/**
 * 共通設定
 */
const globalConfig = {
  /**
   * 生成元ディレクトリ設定
   */
  srcPath: './src',

  /**
   * アセットディレクトリ
   */
  assetsDir: '/',

  /**
   * デプロイパス
   * vue-loaderで出力されるリソース参照に影響
   */
  publicPath: '/',

  /**
   * Vueで使用している画像サイズが大きかった場合の吐き出しパス
   * assets/img/{vue}
   */
  vueImgDir: 'vue',

  /**
   * js entry points
   */
  jsEntryPoints: ['app'],

  /**
   * vendorファイルをエントリーポイント毎で分けるか
   */
  divisionVendor: false,

  /**
   * プロキシ
   */
  proxy: '192.168.33.10'
};

/**
 * 環境ごとの設定
 * globalConfigを上書き
 */
const envConfig = {
  /**
   * ローカル開発
   */
  local: {
    env: 'local',
    distPath: './local',
    // proxyAssetsPath: '../ecorange/html/user_data/' + globalConfig.assetsDir
  },
  /**
   * 開発環境用
   */
  development: {
    env: 'development',
    distPath: './dev'
  },
  /**
   * ステージング環境用
   */
  staging: {
    env: 'staging',
    distPath: './stg'
  },
  /**
   * 本番環境用
   */
  production: {
    env: 'production',
    distPath: './build',
    /**
     * ファイル転送
     * [from, to]
     */
    //transfers: [
    //  ['./prod/' + globalConfig.assetsDir, '../html/user_data/assets']
    //]
  }
};

exports.getConfig = function (env) {
  return Object.assign(globalConfig, envConfig[env])
};