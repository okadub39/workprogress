
# config設定

パッケージの設定をカスタマイズする場合は、`./config/index.js`を調整します。  
例えば`yarn run build`で書き出したいファイルのディレクトリを変更したい場合などは、  
`./config/index.js`を編集することで変更できます。

## 書き出しディレクトリの設定

各npm_scriptsで出力されるディレクトリについては  
`envConfig.{env}.distPath`で変更可能です。

`./config/index.js`

`before`
```js
const envConfig = {
  /**
   * ローカル開発
   */
  local: {
    env: 'local',
    distPath: './local',
    // proxyAssetsPath: '../ecorange/html/user_data/' + globalConfig.assetsDir
  }
  // 省略
};
```

`after`
```js
const envConfig  = {
  /**
   * ローカル開発
   */
  local: {
    env: 'local',
    distPath: './sample',
    // proxyAssetsPath: '../ecorange/html/user_data/' + globalConfig.assetsDir
  }
  // 省略
};
```

## プロキシ設定

ローカル環境のvagrantなどで仮想環境を用意している場合など、  
プロキシ設定を行い`yarn run start:proxy`を実行することで、  
プロキシサーバを立ち上げることができます。

設定は、`globalConfig.proxy`です。

`./config/index.js`

```js
const globalConfig = {
  // 省略
  /**
   * プロキシ
   */
  proxy: '192.168.33.10'
};
```


プロキシ使用時にアセットファイルの出力先を変更したい場合は、`envConfig.{env}.proxyAssetsPath`を編集します。

`./config/index.js`

`before`
```js
const envConfig  = {
  /**
   * ローカル開発
   */
  local: {
    env: 'local',
    distPath: './sample',
    // proxyAssetsPath: '../html/user_data/' + globalConfig.assetsDir
  }
  // 省略
};
```

`after`
```js
const envConfig  = {
  /**
   * ローカル開発
   */
  local: {
    env: 'local',
    distPath: './sample',
    proxyAssetsPath: '../html/user_data/' + globalConfig.assetsDir
  }
  // 省略
};
```

## 別ディレクトリ転送

ビルドを実行後、自動的にファイルを他の場所へコピーする設定です。  

以下では`yarn run build`でのビルド後  
「./prod/assets」を「../html/user_data/assets」にコピーする設定です。

`envConfig.{env}.transfer`はArrayの中にArray[from, to]をいくつも設けることができ、  
複数箇所に分けてコピーすることも可能です。

`./config/index.js`

`before`
```js
const envConfig = {
  // 省略
  /**
   * 本番環境用
   */
  production: {
    env: 'production',
    distPath: './prod',
    /**
     * ファイル転送
     * [from, to]
     */
    //transfers: [
    //  ['./prod/' + globalConfig.assetsDir, '../html/user_data/assets']
    //]
  }
};
```

`after`
```js
const envConfig  = {
  // 省略
  /**
   * 本番環境用
   */
  production: {
    env: 'production',
    distPath: './prod',
    /**
     * ファイル転送
     * [from, to]
     */
    transfers: [
      ['./prod/' + globalConfig.assetsDir, '../html/user_data/assets']
    ]
  }
};
```
