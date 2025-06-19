export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/user/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true, // 启用自定义tabBar
    color: '#999999',
    selectedColor: '#1677FF',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
  requiredPrivateInfos: ['getLocation'],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
  },
})
