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
    if (app.globalData.status) {    
      this.setData({
        pic: app.globalData.sourceLoaded.arr
      })
    } else {
      app.sourceLoaded = source => {       
        this.setData({
            pic: source.arr
        })
      }
    }   


  }
})