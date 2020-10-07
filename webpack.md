JS Marathon

1. [https://vimeo.com/456929426](https://vimeo.com/456929426) - NPM, package.json
2. [https://vimeo.com/457088840](https://vimeo.com/457088840) - Webpack

Password: Bonus

---

Прежде всего нужно установить **Node.js**, его вы можете скачать [https://nodejs.org/en/](https://nodejs.org/en/) и дальше пройти простой путь установки...

Дальше в папке нашего проекта выполнить команду...

```jsx
npm init -y
```

После этого выполнить установку всех зависимостей, командой ниже...

```jsx
npm i webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env -D
```

После нам надо создать файл в корне нашего проекта *webpack.config.js*

```jsx
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    }
};
```

После создадим файлик *.babelrc*

```jsx
//.babel.rc
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
}
```

Теперь надо выполнить команду

```jsx
npx webpack
```

После чего добавить в **package.json** в метод *script* поле

```jsx
"start": "webpack-dev-serve"
```

После чего в терминале запускаешь DEV Server командой 

```jsx
npm start
```

И открываешь проект в бразуре на [http://localhost:9000/](http://localhost:9000/) 

На этом все...

Let's keep in touch...
