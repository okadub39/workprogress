
# インストール

## node & npm バージョン

- node >= 8.0.0

## 使用するツール

- node
- git
- yarn

## ① 使用するツールのインストール・確認

すでに

- node
- git
- yarn

がインストールしてある場合はスキップしてください。  
インストールしてあるかは以下のコマンドでバージョンが出力されるか確認してください。

`cmd`
```
 node --version
 git --version
 yarn --version
```

インストールされていない場合はインストールを行います。  
以下のサイトでインストール方法が説明されています。

- [node](https://nodejs.org/ja/download/)
- [git (mac)](https://git-scm.com/book/ja/v1/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB#Macにインストール)
- [git (windows)](https://git-scm.com/book/ja/v1/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB#Windowsにインストール)
- [yarn](https://yarnpkg.com/lang/en/)

※ macの場合はhomebrewでインストールするとアップデートも簡単なのでおすすめです。
※ yarnの代わりにnpmを使用してもよいです。

- [HomebrewでGitをインストールする](http://sh-yoshida.hatenablog.com/entry/2017/02/11/213323)

## ② gitクローン

プロジェクトフォルダを生成して、`git clone`を行います。

```
git clone {project_base_git_repository} {your_project_directory}
```

## ③ パッケージ初期化

生成したプロジェクトフォルダに移動し、  
必要なパッケージをインストールします。

```
cd {your_project_directory}
yarn
```

## ④ git削除

当リポジトリはプロジェクトリポジトリなので、  
絶対に勝手にコミット・プッシュを行わないでください。

`./.git`を削除しましょう。

その後、プロジェクトのバージョン管理へ適宜コピー等を行ってください。
