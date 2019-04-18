Page({
  onTap: function (event) {
    wx.redirectTo({
        url:"/pages/post/post"
    });

    // wx.switchTab({
      // url: "/pages/post/post"
    // });

  }
})