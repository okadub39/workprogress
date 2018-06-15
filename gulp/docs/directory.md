
# ディレクトリ・ファイル構成

このパッケージは以下の構成になっています。

## 書き出しディレクトリ ※ ignore

コマンドにより生成されるので、`git clone`時点では存在しません。  
各環境に合わせた、出力ディレクトリとなります。

- ./dev/
- ./local/
- ./prod/
- ./stc/

これらのディレクトリは共通で以下のディレクトリ構造が生成されます。

- ./assets/
    - css/
    - img/ (「static/img」にファイルが有った場合)
    - js/

## パッケージディレクトリ ※ ignore

コマンドにより生成されるので、`git clone`時点では存在しません。

- ./node_modules/  

## 書き出し元ディレクトリ

このディレクトリ内のファイルを編集して制作を行います。

- ./src/
    - ejs/  
    - img/  
    背景画像用ディレクトリ  
    ※ scssへbackground指定する画像(base64エンコードを行います。)
    - js/  
    - router/  
    ページ生成用(ejs)ルーター情報
    - scss/  
- ./static/  
コピー元のディレクトリ  
画像に関しては圧縮処理が走ります。
    - img/  
    htmlから参照する画像
    - fonts/  
    フォント置き場

## その他のディレクトリ・ファイル

- ./commands/
- ./config/
    - index.js
    - utils.js
    - webpack.config.js
- ./docs/
- ./migration/
    - migrations/
    - tpl/
    - migrations.json
- ./.gitignore
- ./gulpfile.js
- ./package.json
- ./readme.md
- ./yarn.lock
