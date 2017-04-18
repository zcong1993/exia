module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const data = {
        title: 'egg',
        content: 'Hello world!',
        login: 'zcong'
      }
      const name = this.ctx.query.name ? this.ctx.query.name : 'zcong1993'
      const userinfo = yield this.ctx.service.github.index(name)
      this.ctx.body = Object.assign({}, data, userinfo.data)
      this.ctx.status = 200
    }
  }
  return HomeController
}
