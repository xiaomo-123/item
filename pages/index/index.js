const app = getApp();
// const a = wx.getStorageSync('cates');
// const imgSource = require('../../utils/imagesource.js');
// var commonjs = require('../../utils/common.js');

Page({
  data: { 
  
list:[
{id:0,name:"张三"},
{id:1,name:"李四"},
{id:2,name:"王武"}
],
img:[]
  },
  // myget:function(){
  // 	var that=this;
  // 	wx.getStorage({
  // 		key:'k01',
  // 		success:function(res){
  // 			console.log(res.data)
  // 		},
  // 	})
  // },
 
onLoad(){	
var that=this;
if (app.globalData.status){
  console.log('为真时第一个页面回调');
  console.log(app.globalData.sourceLoaded);
  that.setData({
    img: app.globalData.sourceLoaded.arr
  			})
}else{
app.sourceLoaded = source => {
  console.log('为假时第一个页面回调');
            console.log(source);
  console.log(app.globalData.status);      
            this.setData({
                img: source.arr
            })
        }
}
// app.p.then(res=>{
//     console.log('成功',res);
// },err=>{
//     console.log('err');
// })  

  // commonjs.sayhello('sdfadsa');
 //异步获取本地缓存数据
 //  	wx.getStorage({
 //  		key:'k01',
 //  		success:function(res){    			
 //  		console.log(res.data.arr)		
 //  			that.setData({
 //  				img:res.data.arr
 //  			})
 //  		},
 //  	})
//同步获取缓存数据
// var redata = wx.getStorageSync('data')
//     that.setData({
//      img: redata.arr
// })
// app.sourceLoaded = source => {
//             console.log(source);
//             this.setData({
//                 img: source.arr
//             })
//         }

const db=wx.cloud.database(); 
 db.collection("users").get({           
     success:res=>{       
       if (res.data[0].num<1)
       {
         wx.redirectTo({
        url:res.data[0].url
      })      
     }}
})

}
// onShow()
// {
// 	commonjs.sayhello();
//    //同步获取缓存数据
// }
// var redata = wx.getStorageSync('data')
//     that.setData({
//      img: redata.arr
// })
 // console.log('page页面获取',app.globalData.sourceLoaded);
 //       	// app.sourceLoaded = res => {
 //        //     console.log('page页面获取sourceLoaded',res);
	// 	   this.setData({ 
	// 	       img:this.globalData.sourceLoaded.arr
	// 	   })
		// }		
   // } 
       //else结束  
       

    
	//   var arr=[{name:"周六"}];
  // let res=arr.push({name:"周日"});
  // console.log(arr.length,arr);
  // app.sourceLoaded = source => {
  //   console.log(source.sourceLoaded[0].imageList[0].src);
  //   this.setData({
  //     img: source.sourceLoaded[0].imageList[0].src
  //   })



})
