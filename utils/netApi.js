/******simulatin********/
var simulation = {
   "carousel" : {
       "imageUrls": [{
            "url": "/images/carousel-A.png" 
        }, {
         "url": "/images/carousel-B.png"
        }, {
         "url": "/images/carousel-C.png" 
        }]
    },
   "newsCard" : {
     "title" : '测试测试',
     "url" : "/images/carousel-B.png",
      "footer" : {
          "iconUrl" : "",
          "from": "中国",
          "title" :　"ceshi",
          "hotspot" : "2"
      }
   }
};

var apiKey = "";
var apiUrl = {
    carouselUrl : ""
};

// get localMaterial
    function  fetchApi (url, callback) {
    wx.request({
      url,
      data: {},
      header: { 'Content-Type': 'application/json' },
      success (res) {
        callback(res);
      },
      fail (e) {
        callback(e);
      }
    })
  }
  // get weixin mp
    function getBase(url) {
        wx.connectSocket({
           url: url,
           header:{ 
                   'content-type': 'application/json'
           },
           method:"GET"
        });
        wx.onSocketOpen(function(res){
            Promise.resolve(res);
        })
        wx.onSocketError(function(res){
           Promise.reject(res); 
        });

        return Promise;
    }

var netApi = {
    getCarouselData : function(callback) {
        callback && callback(simulation.carousel);
   },
   getNewsCards : function(callback) {
        callback && callback(simulation.newsCard);
   },
   getother : function() {
       
   }
};

module.exports = netApi;