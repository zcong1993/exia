# Development

## Install

```bash
$ git clone https://github.com/zcong1993/exia.git
# install all dependences
$ npm install
# run dev
$ npm run dev
# open localhost:7001
```

## Core

### parser

请看项目 [zcong1993/taobao-parser](https://github.com/zcong1993/taobao-parser)，本项目完全使用此库。

### cache

使用 [lru-cache](https://github.com/isaacs/node-lru-cache)

默认配置为：

```js
const options = {
  max: 500,
  maxAge: 1000 * 60 * 10 // 10 min cache
}
```
可以在 `app/extend/application.js`中修改

### normalize

请查看 `app/libs/normalize.js`

目的主要是为了去除url中的多余参数，使得cache的命中率能够更高。

## 其他

关于 eggjs: 更多使用请查看 [eggjs/egg](https://github.com/eggjs/egg/)
