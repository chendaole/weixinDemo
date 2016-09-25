//index.js
//获取应用实例
var netApi = require('../../utils/netApi.js')
Page({
  data:{
    carousel : {
      indicatorDots: true,
      autoplay: true,
      interval : 5000,
      duration: 1000,
      imageUrls:[]
    },
    newsCards: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let home = {
        carousel: null,
        newsCards: null
    };
    netApi.getCarouselData( result => {
       home.carousel = result;
    })
    netApi.getNewsCards( result => {
       home.newsCards = result;
    });
    this.setData({ carousel: { imageUrls : home.carousel.imageUrls }, newsCards: home.newsCards});
  },
  onReady:function() {
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
});
