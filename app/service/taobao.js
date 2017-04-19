const parser = require('../libs/parser')

module.exports = app => {
  class TaobaoService extends app.Service {
    * index(url) {
      const cache = this.ctx.app.cache
      const baseUrl = 'https://s.taobao.com/search?'
      if (cache.has(url)) {
        console.log(`cached ${url}`)
        return cache.get(url)
      }
      let data
      try {
        data = yield parser(baseUrl + url)
      } catch (err) {
        throw err
      }
      cache.set(url, data)
      return data
    }
  }
  return TaobaoService
}
