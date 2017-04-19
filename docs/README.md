# exia

> 一个可以得到淘宝商品搜索信息数据的`API服务端`，基于`eggjs`框架

<p class="warning">
  由于在境外访问淘宝网和国内有区别，所以只保证在服务端serve在国内正常。由于本人vps都在境外，所以只保证此程序在localhost运行正常。
</p>

## Install

```bash
$ git clone https://github.com/zcong1993/exia.git
# 仅安装dependences
$ npm install --production
# deploy
$ npm run deploy
# 将运行在7001端口，可以通过process.env.PORT改变端口
```
<p class="tip">
  为了安全起见，你应当在deploy前修改`config/config.default.js`中的`config.keys`值。
</p>

## API

### 请求方法

GET

### 请求参数

|参数名|类型|必须|参数位置|描述|默认值|
|---|---|---|---|---|---|
|url|string|必填|urlParam|想要获取数据的网址|无|

<p class="warning">
  url参数需要请求方进行urlencode以保证url参数能够完整传递。
</p>

商品链接：'https://s.taobao.com/search?q=nodejs&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170419&bcoffset=4&p4ppushleft=1%2C48&s=44&ntoffset=4'

encode后：'https%3a%2f%2fs.taobao.com%2fsearch%3fq%3dnodejs%26imgfile%3d%26commend%3dall%26ssid%3ds5-e%26search_type%3ditem%26sourceId%3dtb.index%26spm%3da21bo.50862.201856-taobao-item.1%26ie%3dutf8%26initiative_id%3dtbindexz_20170419%26bcoffset%3d4%26p4ppushleft%3d1%252C48%26s%3d44%26ntoffset%3d4'

完整请求链接: 'http://localhost:7001/?url=https%3a%2f%2fs.taobao.com%2fsearch%3fq%3dnodejs%26imgfile%3d%26commend%3dall%26ssid%3ds5-e%26search_type%3ditem%26sourceId%3dtb.index%26spm%3da21bo.50862.201856-taobao-item.1%26ie%3dutf8%26initiative_id%3dtbindexz_20170419%26bcoffset%3d4%26p4ppushleft%3d1%252C48%26s%3d44%26ntoffset%3d4'

### json返回示例

#### response
```json
{"status":1,"data":[{"i2iTags":{"samestyle":{"url":""},"similar":{"url":"/search?type=similar&app=i2i&rec_type=1&uniqpid=&nid=544493603385"}},"p4pTags":[],"nid":"544493603385","category":"121956004","pid":"","title":"包邮 Node.js进阶之路+Node.js硬实战：115个核心技巧 Node.js权威指南 Node.js教程 node.js基础入门书籍 <span class=H>nodejs</span>编程设计书籍","raw_title":"包邮 Node.js进阶之路+Node.js硬实战：115个核心技巧 Node.js权威指南 Node.js教程 node.js基础入门书籍 nodejs编程设计书籍","pic_url":"//g-search1.alicdn.com/img/bao/uploaded/i4/i3/TB1Bn6qPXXXXXXyXFXXXXXXXXXX_!!2-item_pic.png","detail_url":"//detail.tmall.com/item.htm?id=544493603385&ns=1&abbucket=0","view_price":"108.60","view_fee":"0.00","item_loc":"上海","view_sales":"2人付款","comment_count":"0","user_id":"1020536390","nick":"云聚算图书专营店","shopcard":{"levelClasses":[{"levelClass":"icon-supple-level-guan"},{"levelClass":"icon-supple-level-guan"},{"levelClass":"icon-supple-level-guan"},{"levelClass":"icon-supple-level-guan"},{"levelClass":"icon-supple-level-guan"}],"isTmall":true,"delivery":[480,1,824],"description":[487,-1,54],"service":[480,0,0],"encryptedUserId":"UvFNyvm8GMCvSvNTT","sellerCredit":15,"totalRate":10000},"icon":[{"title":"尚天猫，就购了","dom_class":"icon-service-tianmao","position":"1","show_type":"0","icon_category":"baobei","outer_text":"0","html":"","icon_key":"icon-service-tianmao","trace":"srpservice","traceIdx":0,"innerText":"天猫宝贝","url":"//www.tmall.com/"}],"comment_url":"//detail.tmall.com/item.htm?id=544493603385&ns=1&abbucket=0&on_comment=1","shopLink":"//store.taobao.com/shop/view_shop.htm?user_number_id=1020536390","risk":""},{"i2iTags":{"samestyle":{"url":""},"similar":{"url":""}},"p4pTags":[],"nid":"538686329087","category":"124710007","pid":"","title":"<span class=H>nodejs</span>视频教程,node视频教程,node.js开发视频教程","raw_title":"nodejs视频教程,node视频教程,node.js开发视频教程","pic_url":"//g-search3.alicdn.com/img/bao/uploaded/i4/i1/2803859518/TB2jcTgXrDD11BjSszfXXbwoFXa_!!2803859518.jpg","detail_url":"//item.taobao.com/item.htm?id=538686329087&ns=1&abbucket=0#detail","view_price":"100.00","view_fee":"0.00","item_loc":"福建 厦门","view_sales":"0人付款","comment_count":"","user_id":"2803859518","nick":"将来一定会感谢现在","shopcard":{"levelClasses":[],"isTmall":false,"delivery":[0,0,0],"description":[0,0,0],"service":[0,0,0],"encryptedUserId":"UvCgWvGgbOF8YONTT","sellerCredit":0,"totalRate":10000},"icon":[],"comment_url":"//item.taobao.com/item.htm?id=538686329087&ns=1&abbucket=0&on_comment=1","shopLink":"//store.taobao.com/shop/view_shop.htm?user_number_id=2803859518","risk":""}]}
```
#### 备注

|status|是否成功|说明|data|
|---|---|---|---|
|1|成功|正常|data为商品数据数组|
|2|失败|请求url链接不正确|data为错误信息|
|3|失败|其他错误|data为错误信息|

## Development

[Development](/development)
