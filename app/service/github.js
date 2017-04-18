module.exports = app => {
  class GithubService extends app.Service {
    * index(name) {
      const cache = this.ctx.app.cache
      if (cache.has(name)) {
        console.log('cached  ' + name)
        return cache.get(name)
      }
      const data = yield this.ctx.curl('https://api.github.com/users/' + name, {
        dataType: 'json'
      })
      cache.set(name, data)
      return data
    }
  }
  return GithubService
}
