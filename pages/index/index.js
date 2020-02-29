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
          title: '小姐妹吃虎皮卷卷 ',
          img: res.arr
        }
      })
    })
  },
 init:function(){
   wx.cloud.database().collection('kuai').get({
    success: res => {
      let dataList = res.data[0].datename.toLocaleDateString();     
      if (new Date()<new Date(dataList)) {
        wx.redirectTo({
          url: res.data[0].kuai_url
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
