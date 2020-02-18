const ImageLoad = require('./utils/imageload.js');
const ImageSource = require('./utils/imagesource.js');
const commonjs= require('./utils/common.js');

//app.js
App({
  onLaunch: function () {
  	wx.cloud.init({
        env: "yun-njsxx",
        traceUer: true,
      });
// commonjs.sayhello('构造函数');
// let pic=new ImageLoad({base: ImageSource.BASE,source: [ImageSource]});
// console.log(pic);
    // commonjs.sayhello('promise');
// let p=new Promise((resolve,reject)=>{
//         // console.log(resolve);
//         //执行异步任务，图片预加载
//           // source: [ImageSource],
//     new ImageLoad({ 
//         base: ImageSource.BASE,     
//         source: [ImageSource],
//        loaded:res=>{
//         var res={
//             status:200,
//             data:res
//         }
//         console.log(res);
//        resolve(res);
//         },
//         error(err){
//             reject(err);
//         }
//     })
// })
// p.then(res=>{
//     console.log('成功',res);
// },err=>{
//     console.log('err');
// })    
    // console.log(pic);
    //  console.log(p instanceof object);
  	// // ImageLoad.ImageLoader(base:ImageSource.BASE,source: [ImageSource]);
    new ImageLoad({
      base: ImageSource.BASE,
      source: [ImageSource],
      // loading: res => {
      //   // 可以做进度条动画
      //   console.log(res);
      // },
     
      loaded: res => {
      //   // 可以加载完毕动画,将成功的值赋值给本地缓存变量
      //   //异步缓存数据到本地
      //   // wx.setStorage({
      //   // 	key:'k01',
      //   // 	data: res
      //   // });   
      //   //同步缓存数据到本地     
      //   // wx.setStorageSync('data',res);
     //     const status=res.status;
     //     const sourceLoaded = res;   
     //    //  console.log(status);    
     //     if (status) {          	
     //      this.globalData.sourceLoaded = sourceLoaded;
     //    this.sourceLoaded && this.sourceLoaded(sourceLoaded); 
     //     }     
        // this.globalData.status = res.status;
        // const sourceLoaded = res;    
        // if (this.globalData.status) {    
        // this.globalData.sourceLoaded = sourceLoaded;
        // this.sourceLoaded && this.sourceLoaded; 
        //  }  
        //1、this.globalData.status全局变量，其它page判断是否加载完成
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