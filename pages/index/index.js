const app = getApp();

Page({
  data: { 
img:[]
  },
 
onLoad(){	 

var that=this;
app.PromiseGetData().then(function(res){    
       that.setData({
                img:res.arr
            })
    })
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
