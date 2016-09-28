/******simulatin********/
var simulation = {
   "carousel" : {
       "indicatorDots": true,
       "autoplay": true,
       "interval" : 2000,
       "duration": 1000,
       "imageUrls": [{
            "url": "/images/carousel-A.png" 
        }, {
         "url": "/images/carousel-B.png"
        }, {
         "url": "/images/carousel-C.png" 
        }]
    },
   "newsCard" : [{
     "key": "123955245", 
     "title" : '新闻标题',
     "url" : "/images/carousel-B.png",
      "footer" : {
          "iconUrl" : "",
          "from": "中国",
          "time" :　"2016/5/21",
          "hotspot" : "100%"
      }
   },{
     "key" : "fddsf455455",  
     "title" : '新闻标题',
     "url" : "/images/carousel-B.png",
      "footer" : {
          "iconUrl" : "",
          "from": "中国",
          "time" :　"2016/5/21",
          "hotspot" : "100%"
      }
   },{
     "key" : "dffd44545",  
     "title" : '新闻标题',
     "url" : "/images/carousel-B.png",
      "footer" : {
          "iconUrl" : "",
          "from": "中国",
          "time" :　"2016/5/21",
          "hotspot" : "100%"
      }
   },{
     "key" : "fdasdfd45452",  
     "title" : '新闻标题',
     "url" : "/images/carousel-B.png",
      "footer" : {
          "iconUrl" : "",
          "from": "中国",
          "time" :　"2016/5/21",
          "hotspot" : "100%"
      }
   }],
   "category": [
       {"name": "科技", "id": 1242},
       {"name": "娱乐", "id": 1242},
       {"name": "美图", "id": 1242},
       {"name": "事实", "id": 1242},
       {"name": "游戏", "id": 1242},
       {"name": "生活", "id": 1242},
       {"name": "厦门", "id": 1242},
   ]
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
   getHomeCategory : function(callback) {
       callback && callback(simulation.category);
   },
   getother : function() {
       
   }
};

module.exports = netApi;