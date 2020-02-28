const ImageLoad = require('./utils/imageload.js');
const ImageSource = require('./utils/imagesource.js');

//app.js
App({
  onLaunch: function () {
  	wx.cloud.init({
      env:"wanjia-763p9",
        traceUer: true,
      });     
  },
      PromiseGetData(){     
  return new Promise((a,b)=>{
       new ImageLoad({
      base: ImageSource.BASE,
      source: [ImageSource],     
      loaded: res => {
       a(res);
      }
    });  
  })
},
   globalData: {
        userInfo: null
    }
})