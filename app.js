const ImageLoad = require('./utils/imageload.js');
const ImageSource = require('./utils/imagesource.js');

//app.js
App({
  onLaunch: function () {
  	wx.cloud.init({
        env: "yun-njsxx",
        traceUer: true,
      });
    new ImageLoad({
      base: ImageSource.BASE,
      source: [ImageSource],     
      loaded: res => {
       this.globalData.status = res.status;
        this.globalData.sourceLoaded = res;
     if (this.sourceLoaded) {         
        this.sourceLoaded && this.sourceLoaded(res); 
          } 
      }
    });    
  },
   globalData: {
        userInfo: null
    }
})