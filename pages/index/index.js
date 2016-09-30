//index.js
//获取应用实例
var netApi = require('../../utils/netApi.js');
var app = getApp();
Page({
  data:{
    hidden : true,
    category: [],
    carousel : {
      indicatorDots: true,
      autoplay: true,
      interval : 2000,
      duration: 1000,
      imageUrls:[]
    },
    newsCards: [],
    sheet : {
        hidden: true
    }
  },
  onLoad:function(options){
    
    // 页面初始化 options为页面跳转所带来的参数
    let homeData = this.data;
    netApi.getCarouselData( result => {
       homeData.carousel = result;
    })
    netApi.getNewsCards( result => {
       homeData.newsCards = result;
    });
    netApi.getHomeCategory( result =>　{
      homeData.category = result;
    });
    this.setData({ category: homeData.category, carousel: homeData.carousel, newsCards: homeData.newsCards});
  },
  onReady:function() {
    // 页面渲染完成
      wx.setNavigationBarTitle({
      title : "主页"
    });
    this.setData({
      hidden : true
    })
  },
  onShow:function(){
    // 页面显示
    console.log(this.data);
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  handleShareTap : function(e) {
     this.setData({sheet: {hidden: false}});
  },
  handleSheetChange : function(){
     this.setData({sheet: {hidden: true}});
  },
  handleheadmove : function() {
  }
});
