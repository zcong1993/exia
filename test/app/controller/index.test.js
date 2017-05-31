describe('test/app/controller/index.test.js', () => {
  it('should app auto init on setup.js', () => {
    // app is auto init at `test/.setup.js`
    assert(app)
    assert(mock)
    // mock alias
    assert(mm)
    assert(request)
  })

  it('should GET /', async () => {
    const result = await app.httpRequest()
      .get('/')
      .expect(200)
      .expect('{"status":2,"data":"url error, url must start with https://s.taobao.com/search"}')

    assert(result.headers['content-type'] === 'application/json; charset=utf-8')
    assert(result.body.status === 2)
  })

  it('should work well with taobao item url', async () => {
    const url = '/?url=https%3a%2f%2fs.taobao.com%2fsearch%3fq%3dnodejs%26imgfile%3d%26commend%3dall%26ssid%3ds5-e%26search_type%3ditem%26sourceId%3dtb.index%26spm%3da21bo.50862.201856-taobao-item.1%26ie%3dutf8%26initiative_id%3dtbindexz_20170419%26bcoffset%3d4%26p4ppushleft%3d1%252C48%26s%3d44%26ntoffset%3d4'

    const result = await app.httpRequest()
      .get(url)
      .expect(200)

    assert(result.body.status === 1)
    assert(result.body.data.length > 0)
    const index = result.body.data.findIndex(item => /node/i.test(item.raw_title))
    assert(index > -1)
  })

  it('should return url error when url is not start with `https://s.taobao.com`', async () => {
    const url = '/?url=https://test.com'

    const result = await app.httpRequest()
      .get(url)
      .expect(200)

    assert(result.body.status === 2)
    assert(/url error/.test(result.body.data))
  })
})
