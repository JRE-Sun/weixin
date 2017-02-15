var initData = [{
  "con": "您好"
}];
var extraLine = [];
Page({
  data: {
    content: initData,
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    })
  },
  send: function () {
    var that = this;
    this.setData({
      content: initData.push({ "con": that.data.inputValue, "flag": true })
    })
    wx.request({
      url: "https://route.showapi.com/913-1?brand=&location=&platform=&question=" + that.data.inputValue + "&showapi_appid=31610&userid=1&showapi_sign=794da37ef6d548bdb3faf07de393bc6d",
      success: function (res) {
        console.log(that.data.inputValue);
        console.log(res.data.showapi_res_body.content);
        initData.push({ "con": res.data.showapi_res_body.content });
        that.setData({
          content: initData
        })
        console.log(initData);
      }
    })
  },
})