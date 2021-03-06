var http=require('http');
var querystring = require('querystring');

var DataApiPlugin={};


DataApiPlugin.install = function (Vue, options) {

  Vue.http.options.emulateJSON = true;
  Vue.prototype.$searchSong = function (options,callback) {
    var otherParams ={
        'csrf_token': "",
        'type':1,
        'offset':0,
        'limit':10,
        'total':true
    };

    var postData = Object.assign(options, otherParams);
    console.log(postData);
     
    Vue.http.post("/api/search/get/web",postData).then(resp=>{
      // console.log(resp.data);
      callback(resp.data);
    },resp=>{
      console.log("request error");
    });
  };

  Vue.prototype.$showSong = function (options,callback) {   
    Vue.http.get("/api/song/detail?id="+options.music_id+"&ids="+'%5B'+options.music_id+'%5D').then(resp=>{
      // console.log(resp.data);
      callback(resp.data);
    },resp=>{
      console.log("request error");
    });
  };

  Vue.prototype.$showLyric = function (options,callback) {   
    Vue.http.get("/api/song/lyric?os=pc&id="+options.music_id+'&lv=-1&kv=-1&tv=-1').then(resp=>{
      // console.log(resp.data);
      callback(resp.data);
    },resp=>{
      console.log("request error");
    });
  };
  
}
module.exports = DataApiPlugin
