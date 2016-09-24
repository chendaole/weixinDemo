//index.js
//获取应用实例
var app = getApp()
const imagesUrl = [
  "/images/carousel-A.png",
  "/images/carousel-B.png",
  "/images/carousel-C.png"
]
Page({
  data:{
    carousel : {
      urlIndex: 0,
      url: imagesUrl[0]
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    setInterval(() => {
      const imagesLength = imagesUrl.length;
      const urlIndex  = this.data.carousel.urlIndex + 1 > imagesLength ? 0 : this.data.carousel.urlIndex + 1;
      this.setData({carousel:{urlIndex: urlIndex, url: imagesUrl[urlIndex]}});
    }, 2 * 1000);
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
