const qs = require('querystring')

const removeItems = [
  'initiative_id',
  'ie',
  'spm',
  'sourceId',
  'ssid',
  'suggest',
  '_input_charset'
]

module.exports = url => {
  const query = url.match(/\?([^\s]+)/)[1]
  const obj = qs.parse(query)
  removeItems.map(i => delete obj[i])

  return qs.stringify(obj)
}
