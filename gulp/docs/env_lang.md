
# 環境変数・各言語について

## 環境変数

各コマンドで環境変数が各言語へ渡されます。※ scss以外  
各言語で使用できる環境変数は各言語セクションで説明します。

### 環境変数の種類

- local
- development
- staging
- production

---

## ejs

ejsへは環境変数として`ENV`が渡されています。  
各環境で分岐を行う必要がある場合`ENV`を用いて実装してください。

```ejs
<% if (ENV === 'local') { %>
  local環境の場合の表示
<% } %>
```

ejsではテンプレートの形を決めています。  
ページとして生成しないファイルはファイル名の先頭に「_」を記載します。  

> マイグレーションを使えば自動的に挿入されます。
> 詳しく[マイグレーション](./migration.md)ご覧ください。

また、ページとして生成するファイルは`./src/ejs/_head.ejs`をページ識別を引数にincludeします。  
`./src/ejs/_head.ejs`では`./src/ejs/_config.ejs`をincludeして、ページデータの生成と定数化を行います。  
※ 詳細は`./src/ejs/index.ejs`を参照してください。

ejsファイル内で使用できる定数は`ENV`の他に

- PAGE_DATA
- PATH

があります。

`PAGE_DATA`は`./router/index.json`に記載されている情報のうち、  
ページ識別とnameが一致したものを格納します。  
※ ページ識別とnameが一致したものがない場合エラーになり、gulpが一時停止します。

`PATH`はそのページからのドキュメントルートまでの相対パスを格納します。 
以下にejsからどのようにhtmlが生成されるかの例を記載します。

`./src/ejs/index.ejs`
```ejs
<img src="<%= PATH: %>/assets/img/sample.jpg">
```
```html
<img src="./assets/img/sample.jpg">
```

`./src/ejs/product/detail.ejs`
```ejs
<img src="<%= PATH: %>/assets/img/sample.jpg">
```
```html
<img src="../assets/img/sample.jpg">
```

各ページによって、ディレクトリ階層を判断し、`PATH`に入る値が変更されるので、
どの階層にいるejsファイルでも同じように記述が可能です。  

`PATH`をルートパスや絶対パスに変更する際は、  
`./src/ejs/_config.ejs`にて記述を修正しましょう。

`./src/ejs/_config.ejs`
`before`
```ejs
// 省略
switch (ENV) {
  case 'local':
    break;
  case 'development':
    break;
  case 'staging':
    break;
  case 'production':
    break;
}
// 省略
```

`after`
```ejs
// 省略
switch (ENV) {
  case 'local':
    break;
  case 'development':
    break;
  case 'staging':
    break;
  case 'production':
    path = 'http://sample.com'
    break;
}
// 省略
```

※ 変数`path`は定数`PATH`に代入される変数です。

---

## js

jsへは環境変数として`process.env.NODE_ENV`が渡されています。  
jsの場合は`process.env.NODE_ENV`をそのまま使用した場合、その箇所の記述を省くことが可能です。

例)
```js
if (process.env.NODE_ENV === 'production') {
  // yarn run build のみ出力
}
```

該当の箇所が出力されても問題無い場合は`./src/js/config/index.js` を読み込むことで使用することも可能です。

```js
import ENV from './config'
if (ENV === 'production') {
  // yarn run build のみ実行される
}

```

> 上記のようにes6による記述をトランスパイルする仕様になっているので、
> es6での記述を推奨します。

### ライブラリの追加

- jquery
- lodash

はすでにインストール済みですが、他にライブラリが必要な場合もあるでしょう。  
その場合は`yarn`を使用します。  
以下では`moment`をインストールしています。

`cmd`
```
yarn add moment
```

これらライブラリファイルは`vendor.js`としてコンパイルされます。  
使用する際は、ライブラリが必要なファイルで

```js
import moment from 'moment'
```

と記入するのみです。

### 複数ファイルの生成

デフォルトでは、当パッケージの生成するファイルは2つとなっていて、

- app.js
- vendor.js

となります。  
別にjsファイルを作りたい場合、ページ毎にjsファイルを作成したい場合等、  
個別に生成することも可能です。  

詳しくは[Vue・jsのエントリーポイント](./vue.md)にて説明しているので、  
そちらを参考にしてください。

---

## scss

scssへは環境変数は渡されません。

背景画像に使う画像は`./src/`をルートパスとして記述できます。

```scss
body {
  background: url(/img/sample.jpg)
}
```

- 背景画像として扱える画像サイズは14KBです。

もし背景画像がサイズオーバーした場合、  
以下のようにすることで強制的にbase64変換することができます。

```scss
body {
  background: url(/img/sample.jpg,true)
}
```