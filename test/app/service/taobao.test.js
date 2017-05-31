const normalize = require('../../../app/libs/normalize')

describe('test/app/service/taobao.tets.js', () => {
  it('should return null when get null', async () => {
    const ctx = app.mockContext()
    const res = await ctx.service.taobao.index()
    assert(!res)
  })

  it('should return result when get taobao item url', async () => {
    const ctx = app.mockContext()
    const url = 'https://s.taobao.com/search?q=nodejs&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170419&bcoffset=4&p4ppushleft=1%2C48&s=44&ntoffset=4'
    const res = await ctx.service.taobao.index(normalize(url))
    assert(res)
    assert(res.length > 0)
    const index = res.findIndex(item => /node/i.test(item.raw_title))
    assert(index > -1)
  })
})
