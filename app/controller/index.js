const normalize = require('../libs/normalize')

module.exports = app => {
  class IndexController extends app.Controller {
    async index() {
      const { query, service } = this.ctx
      const url = query.url
      if (!/^https:\/\/s.taobao.com\/search/.test(url)) {
        this.ctx.status = 200
        this.ctx.body = {
          status: 2,
          data: 'url error, url must start with https://s.taobao.com/search'
        }
        return
      }
      let res
      try {
        res = await service.taobao.index(normalize(url))
      } catch (err) {
        this.ctx.status = 200
        this.ctx.body = {
          status: 3,
          data: err.message
        }
        return
      }
      this.ctx.status = 200
      this.ctx.body = {
        status: 1,
        data: res
      }
    }
    async example() {
      await this.ctx.render('example')
    }
  }
  return IndexController
}
