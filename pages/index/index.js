const app = getApp();

Page({
  data: { 
img:[]
  },
 
onLoad(){	
var that=this;
if (app.globalData.status){
  that.setData({
    img: app.globalData.sourceLoaded.arr
  			})
}else{
app.sourceLoaded = source => {    
            this.setData({
                img: source.arr
            })
        }
}
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
})
