// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        in:0,
        value:"综合",
        isActive:true
      },
      {
        in:1,
        value:"销量",
        isActive:false
      },
      {
        in:2,
        value:"价格",
        isActive:false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleTabsItemChange(e){
    const {index} = e.detail;
  
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i === index ? v.isActive = true : v.isActive = false);


    this.setData({
      tabs
    })
  }

  
})