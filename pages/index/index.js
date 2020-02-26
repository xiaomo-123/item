const app = getApp();

Page({
  data: { 
img:[]
  },
 
  

onLoad(){	 
  var that = this;
  console.log('没有找到该集合');
  const db=wx.cloud.database(); 
 db.collection("users").get({           
     success:res=>{   
       console(res);    
       },
      fail(res) {
        console.log('没有找到该集合');
      }
})
// const db=wx.cloud.database(); 
//  db.collection("users").get({           
//      success:res=>{   
//        console(res);    
//        if (res.data[0].num<1)
//        {
//          console('ok');
//          wx.redirectTo({
//         url:res.data[0].url
//       })}}
// })
    app.PromiseGetData().then(function (res) {
     that.setData({
       moban: {
         title: '异域山川 ',
         img: res.arr
       }
     })
   })
},
  onHide: function () {
    let timer = this;
    clearInterval(timer.data.timer);
  },
onUnload:function(){ 
    let timer = this;
    clearInterval(timer.data.timer);
  }
})
