# board-game-app

## コマンド

gh-pages インストール

```bash
yarn add -D gh-pages
```

package.json に以下を追加

```package.json
// ...
"homepage": "http://pure-adachi.github.io/myapp",
"scripts": {
    // ...
    "deploy": "yarn build && gh-pages -d build"
}
```

github-pages デプロイ

```bash
yarn deploy
```
