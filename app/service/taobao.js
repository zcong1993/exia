const parser = require('../libs/parser')

module.exports = app => {
  class TaobaoService extends app.Service {
    async index(url) {
      if (!url) {
        return
      }
      const cache = this.ctx.app.cache
      const baseUrl = 'https://s.taobao.com/search?'
      if (cache.has(url)) {
        // console.log(`cached ${url}`)
        this.ctx.logger.info('cached: %j', url)
        return cache.get(url)
      }
      let data
      try {
        data = await parser(baseUrl + url)
      } catch (err) {
        throw err
      }
      cache.set(url, data)
      return data
    }
  }
  return TaobaoService
}
