// user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
pic:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
 
app.PromiseGetData().then(function(res){
      console.log(res);
       that.setData({
            pic: res.arr
        })
    })

  }
})