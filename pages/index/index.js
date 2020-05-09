Page({
  /**
   * 页面的初始数据
   */
  data: {
    //首页导航
    navList: [],
    //当前点击的导航按钮
    currentNav: 0,
    //轮播图数据
    swiperList: [],
    //视频列表数据
    videosList: [],
  },

  activeNav(e) {
    this.setData({
      currentNav: e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList',
      success: (res)=>{
        if(res.data.code === 0) {
          _this.setData({
            navList: res.data.data.navList
          })
        }
      },
    });
  },

  /**
   * 获取首页导航数据
   */
  getSwiperList() {
    let _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
      success: (res)=>{
        if(res.data.code === 0) {
          _this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      },
    });
  },

  /**
   * 获取视频列表数据
   */
  getVideosList() {
    let _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList',
      success: (res)=>{
        if(res.data.code === 0) {
          _this.setData({
            videosList: res.data.data.videosList
          })
        }
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
