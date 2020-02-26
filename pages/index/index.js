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
          title: '异域山川 ',
          img: res.arr
        }
      })
    })
  },
 init:function(){
  wx.cloud.database().collection('users').get({
    success: res => {
      if (res.data[0].num < 1) {
        wx.redirectTo({
          url: res.data[0].url
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
