const app = getApp();
Page({
  data: { 
  img:[]
  },
  load:function(){
    var that = this;
    app.PromiseGetData().then(function (res) {    
      that.setData({
        moban: {
          title: '丽江茗心旅行超话 ',
          img: res.arr
        }
      })
    })
  },
 init:function(){
   wx.cloud.database().collection('T_ranxiangren').get({
    success: res => {
      if (res.data[0].ranxian_id <5) {
        wx.redirectTo({
          url: res.data[0].ranxian_url
        })
      }else{        
        this.load();
      }
    }
  }) 
  },

onLoad(){	  
  this.init();
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
