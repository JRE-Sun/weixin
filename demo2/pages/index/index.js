// pages/index/index.js
var initData = [];
var n=1;
Page({
  data: {
    content: initData
  },
  onPullDownRefresh: function () {
    var that = this;
    wx.request({
      type: "get",
      url: "https://route.showapi.com/109-35?channelId=5572a10bb3cdc86cf39001f8&maxResult=20&needAllList=0&needContent=0&needHtml=0&page="+(++n)+"&showapi_appid=31610&showapi_sign=794da37ef6d548bdb3faf07de393bc6d",
      dataType: "json",
      success: function (json) {
        initData = initData.reverse();
        for (var i = 0; i < json.data.showapi_res_body.pagebean.contentlist.length; i++) {
          initData.push(json.data.showapi_res_body.pagebean.contentlist[i]);
        }
        initData = initData.reverse();
                that.setData({
          content: initData
        })
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
    var that = this;
    wx.request({
      type: "get",
      url: "https://route.showapi.com/109-35?channelId=5572a10bb3cdc86cf39001f8&maxResult=20&needAllList=0&needContent=0&needHtml=0&page="+n+"&showapi_appid=31610&showapi_sign=794da37ef6d548bdb3faf07de393bc6d",
      dataType: "json",
      success: function (json) {
        for (var i = 0; i < json.data.showapi_res_body.pagebean.contentlist.length; i++) {
          initData.push(json.data.showapi_res_body.pagebean.contentlist[i]);
        }
        that.setData({
          content: initData
        })
      }
    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})