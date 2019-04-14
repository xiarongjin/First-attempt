var initdata = function (that) {
  var list = that.data.list
  for (var i = 0; i < list.length; i++) {
    list[i].shows = ""
  }
  that.setData({
    list: list
  })
}
var app = new getApp();
var X = 0;
Page({

  data: {
    weeklyMovieList: [
      {
        id:0,
        card_name:"卡片名字",
        card_comment:"卡片内容",
        peview_time:"应在多久复习",
        current_date:"2019/4/14",
      },
      {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容片内容片内容片内容片内容片内容片内容片内容片内容片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      }, {
        id: 0,
        card_name: "卡片名字",
        card_comment: "卡片内容",
        peview_time: "应在多久复习",
        current_date: "2019/4/14",
      },
    ],
    count: 0,
    score: 61
  },

  // // 点击个人资料事件
  onTap: function (event) {
    wx.navigateTo({
      url: "/pages/info/info"
    });

    // wx.switchTab({
    // url: "/pages/post/post"
    // });

  },
  // 点击左上角小图标事件
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },

  // 点击添加事件处理函数
  onTap1: function (event) {
    wx.navigateTo({
      url: "/pages/richtest/richtest"
    });
    
  },
  // 点击卡片处理函数
  onTap2: function (event) {
    var textId = event.currentTarget.dataset.textId;
    console.log(textId);
    wx.navigateTo({
      url: "/pages/detial/detial?id=" + textId
    });

  },
  // 删除事件处理函数
  deleteTap:function(event){
     wx.navigateTo({
      url: '/pages/test/test',
     })
  },
  
 
  // //  左右滑动操作的代码
  // //  bindtouchmove="tap_drag" bindtouchend="tap_end" bindtouchstart="tap_start" 
  // tap_start: function (e) {
  //   // touchstart事件
  //   // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
   
  //   this.data.mark = this.data.newmark = e.touches[0].pageX;
  // },

  // tap_drag: function (e) {
  //   // touchmove事件
  //   this.data.newmark = e.touches[0].pageX,
  //     X = this.data.newmark - this.data.mark ;
  //   // 手指从左向右移动
  //   if (X > 30) {
  //     this.istoright = true;
  //   }

  //   // 手指从右向左移动
  //   if (X < 0) {
  //     this.istoright = false;
  //   }
  //   this.data.mark = this.data.newmark;
  // },

  // tap_end: function (e) {
  //   // touchend事件
  //   this.data.mark = 0;
  //   this.data.newmark = 0;
  //   // 通过改变 opne 的值，让主页加上滑动的样式
  //   if (this.istoright) {
  //     this.setData({
  //       open: true
  //     });
  //   } else {
  //     this.setData({
  //       open: false
  //     });
  //   }
  // },
  
   
})