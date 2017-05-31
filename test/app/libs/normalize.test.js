const normalize = require('../../../app/libs/normalize')

describe('test/app/libs/normalize.test.js', () => {
  it('should work well', () => {
    const url1 = 'https://s.taobao.com/search?q=nodejs&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170419&bcoffset=4&p4ppushleft=1%2C48&s=44&ntoffset=4'
    const res = normalize(url1)
    assert(res === 'q=nodejs&imgfile=&commend=all&search_type=item&bcoffset=4&p4ppushleft=1%2C48&s=44&ntoffset=4')
    const removeItems = [
      'initiative_id',
      'ie',
      'spm',
      'sourceId',
      'ssid',
      'suggest',
      '_input_charset'
    ]
    removeItems.forEach(it => {
      const reg = new RegExp(it)
      assert(reg.test(res) === false)
    })
  })
})
