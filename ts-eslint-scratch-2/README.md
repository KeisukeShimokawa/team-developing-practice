# 設定2

初期化

```bash
$ yarn init -y
$ yarn add -D eslint typescript @typescript-eslint/{parser,eslint-plugin}
```

設定ファイル`.eslintrc.json`

```js
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```

設定ファイル`.eslintignore`

```json
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
# don't lint nyc coverage output
coverage
```

スタイルを追加

```bash
$ yarn add -D eslint-config-airbnb-typescript
```

prettierを追加

```bash
$ yarn add -D prettier eslint-config-prettier
```