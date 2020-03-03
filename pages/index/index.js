//index.js
//获取应用实例
const app = getApp()
var x = 0;
var y = 0;
var h = 0;
var w = 0;
var originalImg = ''; //原始图片数据
var windowsW = 0;
Page({
  data: {
    treatImg: 'http://cv.qiaobutang.com/uploads/article_images/2015/11/17/17/564af3b70cf2aa0eac25d9ba/big.jpg',
    arrcss: []
  },
  onLoad: function () {
    
  },
  onReady() {
    
  },
  touchstartFn: function (event) {
    this.data.x = event.changedTouches[0].x;
    this.data.y = event.changedTouches[0].y;
  },
  touchmoveFn: function (event) {
    let nowX = event.changedTouches[0].x;
    let nowY = event.changedTouches[0].y;
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setStrokeStyle('red')
    ctx.strokeRect(this.data.x, this.data.y, nowX - this.data.x, nowY - this.data.y)
    ctx.draw()
  },
  touchendFn: function (event) {
    let that = this;
    console.log(that);
    let endX = event.changedTouches[0].x;
    let endY = event.changedTouches[0].y;
    if (endX < this.data.x) {
      this.data.w = this.data.x - endX;
    } else {
      this.data.w = endX - this.data.x;
    }
    if (endY < this.data.y) {
      this.data.h = this.data.y - endY;
    } else {
      this.data.h = endY - this.data.y;
    }
    let style = '';
    if (endX < this.data.x) {
      if(endY < this.data.y) {
        style = 'left: ' + endX + 'px;top: ' + endY + 'px;width: ' + this.data.w + 'px;height: ' + this.data.h + 'px;'
      }else{
        style = 'left: ' + endX + 'px;top: ' + this.data.y + 'px;width: ' + this.data.w + 'px;height: ' + this.data.h + 'px;'
      }
    }else{
      if (endY < this.data.y) {
        style = 'left: ' + this.data.x + 'px;top: ' + endY + 'px;width: ' + this.data.w + 'px;height: ' + this.data.h + 'px;'
      } else {
        style = 'left: ' + this.data.x + 'px;top: ' + this.data.y + 'px;width: ' + this.data.w + 'px;height: ' + this.data.h + 'px;'
      }
    }
    
    that.setData({
      arrcss: that.data.arrcss.concat(style)
    })
    console.log(that.data.arrcss);
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setStrokeStyle('red')
    ctx.strokeRect(this.data.x, this.data.y, endX - this.data.x, endY - this.data.y)
    ctx.draw()
  },
})
