const normalize = require('../libs/normalize')

module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      const { query, service } = this.ctx
      const url = query.url
      if (!/^https:\/\/s.taobao.com\/search/.test(url)) {
        this.ctx.status = 200
        return this.ctx.body = {
          status: 0,
          data: 'url error, url must start with https://s.taobao.com/search'
        }
      }
      let res
      try {
        res = yield service.taobao.index(normalize(url))
      } catch(err) {
        this.ctx.status = 200
        return this.ctx.body = {
          status: 0,
          data: err.message
        }
      }
      this.ctx.status = 200
      this.ctx.body = {
        status: 1,
        data: res
      }
    }
  }
  return IndexController
}
