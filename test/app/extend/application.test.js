describe('test/app/extend/application.test.js', () => {
  it('should get lru cache and should work well', () => {
    app.cache.set('foo', 'bar')
    assert(app.cache.get('foo') === 'bar')
  })
})
