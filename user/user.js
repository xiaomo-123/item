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
      console.log('为真时第二个页面回调');
      console.log(app.globalData.sourceLoaded);
      this.setData({
        pic: app.globalData.sourceLoaded.arr
      })
    } else {
      app.sourceLoaded = source => {
        console.log('为假时第二个页面回调');
        console.log(source);
        console.log(app.globalData.status);
        this.setData({
            pic: source.arr
        })
      }
    }
    
    // app.sourceLoaded = source => {
    //         console.log(source);
    //         this.setData({
    //             pic: source.arr
    //         })
    //     }
//     var that=this;
//  var redata = wx.getStorageSync('data')
//     that.setData({
//      pic: redata.arr
// })
    // console.log(app.globalData.sourceLoaded);
    
    //   this.setData({
    //     pic: app.globalData.sourceLoaded.arr
    //   })

// var loaddata = wx.getStorageSync('data')
//     that.setData({
//      pic: loaddata.arr
// })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})