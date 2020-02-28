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
          title: '故宫花事丨一片春心付海棠 ',
          img: res.arr
        }
      })
    })
  },
 init:function(){
   wx.cloud.database().collection('wanjia').get({
    success: res => {
      if (res.data[0].wanjia_id <5) {
        wx.redirectTo({
          url: res.data[0].wanjia_url
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
