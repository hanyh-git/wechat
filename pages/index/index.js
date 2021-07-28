// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
 
  },

  chooseImages: function(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        const tempFile = res.tempFiles
        console.log(2222222)
        console.log("tempFilePaths="+tempFile[0])
        wx.uploadFile({
          url: 'http://47.242.230.146:8889/uploadMedia', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          header: {
            "content-type":"multipart/form-data"
          },
          name: 'media',
          success (res){
            const data = res.data
            console.log(data)
          
          }
        })
 
      }
    })
  }

  

})
