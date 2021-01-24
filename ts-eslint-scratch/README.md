# 手順

## 記録用

1. VSCode の Remote Containers で環境を立ち上げる

   ```docker
   # 使用するDockerfileは以下になる
   ARG VARIANT="14-buster"
   FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
   ```

2. プロジェクトの初期化

   ```bash
   # -> package.json
   $ yarn init -y
   ```

3. TypeScript と ESLint のインストール

   ```bash
   # -> yarn.lock & node_modules
   $ yarn add -D eslint typescript @typescript-eslint/{parser,eslint-plugin}
   ```

4. TypeScript の初期化

   ```bash
   # -> tsconfig.json
   $ yarn run tsc --init
   ```

5. ESLint の初期化

   ```bash
   # ->
   $ yarn run eslint --init

   # -> To check syntax and find problems
   # -> JavaScript modules (import/export)
   # -> Which framework does your project use? -> None of these
   # -> Does your project use TypeScript? -> Yes
   # -> Where does your code run? -> Node
   # -> What format do you want your config file to be in? -> JSON
   # -> Would you like to install them now with npm? -> No
   #    @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
   ```

   上記のように質問に回答することで、以下のファイルが作成される

   ```json
   {
     "env": {
       "browser": true,
       "es2021": true
     },
     "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": 12,
       "sourceType": "module"
     },
     "plugins": ["@typescript-eslint"],
     "rules": {}
   }
   ```

6. prettier の設定を行う

   ```bash
   # install prettier automatically formator
   # install eslint-config-prettier to deactivate eslint's format
   $ yarn add -D prettier eslint-config-prettier
   ```

7. ESLint の設定に prettier を追加する

   ```json
   "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", // add
        "prettier@typescript-eslint" // add
   ],
   ```

8. prettier の設定を追加する

   ```json
   // .prettierrc.json
   {
     "trailingComma": "es5",
     "tabWidth": 2,
     "semi": true,
     "singleQuote": true
   }
   ```

9. VSCode で対応する拡張機能を導入する

   ```json
   // .devcontainer/devcontainer.json
   "extensions": [
   	"dbaeumer.vscode-eslint",
   	"esbenp.prettier-vscode"
   ],
   ```

10. TypeScript で実験する

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNEXT",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

node と express のためにファイルを適当に作って実験する

```bash
$ yarn add -D @types/node @types/express
```

## 参考資料

- [TypeScript のプロジェクトに ESLint と Prettier を導入する方法（+VSCode での設定）](https://qiita.com/yuma-ito-bd/items/cca7490fd7e300bbf169)
- [VSCode + ESLint + Prettier + React + TypeScript （自分用メモ Fall, 2020）](https://qiita.com/sprout2000/items/ee4fc97f83f45ba1d227)
- [VSCode で ESLint+typescript-eslint+Prettier を導入する（2020/11/14 修正）](https://qiita.com/madono/items/a134e904e891c5cb1d20)
- [Step by Step で始める ESLint](https://qiita.com/howdy39/items/6e2c75861bc5a14b2acf)
