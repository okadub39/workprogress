
# Vue・jsのエントリーポイント

当リポジトリには`vue-loader`を搭載しています。  
SPA開発が必要な場合は`vue-cli`による開発がベターですが、  
SPA以外で`vue`を使用したい場合は以下のような手順で開発を行いましょう。

## エントリーポイントの追加

jsのエントリーポイントを追加しましょう。  
`./src/js/main.js`を作成してください。

※ 当リポジトリではサンプルとして、以下のファイルはすでに生成・修正済みです。

`./config/index.js`

`before`
```js
const globalConfig = {
  // 省略
  /**
   * js entry points
   */
  jsEntryPoints: ['app'],

// 省略
```

`after`
```js
const globalConfig = {
  // 省略
  /**
   * js entry points
   */
  jsEntryPoints: ['app', 'main'],

// 省略
```

`./src/js/main.js`
```js
import App from './vue/App.vue'
import Vue from 'vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

`./src/js/vue/App.vue`を作成しましょう。

`./src/js/vue/App.vue`
```vue
<template>
  <div>
    {{text}}<br>
    <input type="text" v-model="text">
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        text: 'test'
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 40px;
    margin: 30px auto;
    width: 400px;
    border: 1px solid #ccc;
    background: #fff;
  }
</style>
```

## ejsファイルへ読み込み

`./src/ejs/globals/_bottom_script.ejs`

`before`
```ejs
<script src="<%= PATH; %>/assets/js/vendor.js"></script>
<script src="<%= PATH; %>/assets/js/app.js"></script>
```

`after`
```ejs
<script src="<%= PATH; %>/assets/js/vendor.js"></script>
<script src="<%= PATH; %>/assets/js/app.js"></script> <!-- vue以外のアプリケーション -->
<script src="<%= PATH; %>/assets/js/main.js"></script><!-- vueアプリケーション -->
```

## ヒント

`vendor.js`へすべてのnode_moduleパッケージを含みたくない場合があるでしょう。  
その場合は以下の設定をすることで、エントリーポイントごとのvendorファイルを生成することが可能です。

`./config/index.js`

`before`
```js
const globalConfig = {
  // 省略
  /**
   * vendorファイルをエントリーポイント毎で分けるか
   */
  divisionVendor: false,
};
// 省略
```

`after`
```js
const globalConfig = {
  // 省略
  /**
   * vendorファイルをエントリーポイント毎で分けるか
   */
  divisionVendor: true,
};
// 省略
```

各エントリーjsがimportを行っているパッケージにもよりますが、以下のファイル群が生成されます。

- app.js
- main.js
- vendor.app.js  
  app.jsのみにimportされたパッケージ
- vendor.main.js 
  main.jsのみにimportされたパッケージ
- vendor.common.js  
  app.js,main.js両方にimportされたパッケージ

```ejs
<script src="<%= PATH; %>/assets/js/vendor.common.js"></script>

<% if () { %>
<script src="<%= PATH; %>/assets/js/vendor.app.js"></script>
<script src="<%= PATH; %>/assets/js/app.js"></script>
<% } else { %>
<script src="<%= PATH; %>/assets/js/vendor.main.js"></script>
<script src="<%= PATH; %>/assets/js/main.js"></script>
<% } %>
```
