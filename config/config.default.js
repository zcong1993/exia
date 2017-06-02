module.exports = () => {
  const config = {}

  // should change to your own
  config.keys = 'zcong1993'
  config.lru = {
    max: 500,
    maxAge: 1000 * 60 * 10 // 10 min cache
  }
  return config
}
