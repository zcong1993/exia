module.exports = app => {
  app.get('/', 'index.index')
  app.get('/example', 'index.example')
}
