//index.js
//获取应用实例
var app = getApp()
const imagesUrls = [{
  url: "/images/carousel-A.png" 
}, {
  url: "/images/carousel-B.png",
}, {
  url: "/images/carousel-C.png" 
}];

Page({
  data:{
    carousel : {
      indicatorDots: true,
      autoplay: true,
      interval : 5000,
      duration: 1000,
      imageUrls:[]
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({ carousel: { imageUrls : imagesUrls } });
  },
  onReady:function(){
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
