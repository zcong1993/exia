const LRU = require('lru-cache')

const options = {
  max: 500,
  maxAge: 1000 * 60 * 60
}

const CACHE = Symbol('Application#cache')

module.exports = {
  get cache() {
    if (!this[CACHE]) {
      this[CACHE] = LRU(options)
    }
    return this[CACHE]
  }
}
