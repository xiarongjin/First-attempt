Page({
  data: {
    images: [],
    ima: ["/image/test.jpg"]
  },
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 718,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 718 / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },
  previewImg: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.ima;
    wx.previewImage({
      current: imgArr[index],     //当前图片http链接 地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式 http链接
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function (options) {
    let that = this
  },
  onShow: function (e) {
    var that = this;
    //动态获取屏幕尺寸
    wx.getSystemInfo({//获取搜集系统信息
      success: function (res) {
        that.setData({
          height: res.windowHeight,//手机屏幕可用高度
          width: res.windowWidth,//手机屏幕可用宽度
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  onTap:function(){
    wx.navigateTo({
      url: '',
    })
  }
})
