/*
 * @Author: {zhengzhuang}
 * @Date: 2024-06-13 17:48:17
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-06-21 11:07:18
 * @Description:
 */
import {PropsWithChildren} from 'react'
import {useLaunch} from '@tarojs/taro'
import {appUpdate} from './utils'
import './app.less'
// 在app.js或app.tsx文件顶部添加这段代码
if (typeof console.time !== 'function') {
  const timeMap = {};

  console.time = function(label) {
    timeMap[label] = Date.now();
  };

  console.timeEnd = function(label) {
    if (timeMap[label]) {
      console.log(`${label}: ${Date.now() - timeMap[label]}ms`);
      delete timeMap[label];
    } else {
      console.log(`Timer '${label}' does not exist`);
    }
  };
}

function App({children}: PropsWithChildren<any>) {

  useLaunch(() => {
    // 小程序更新
    appUpdate();

    // 不要删除，用来识别当前项目环境
    console.log(
      `\n %c 电子科技大学${process.env.NODE_ENV} %c ${process.env.YDY_APP_API} \n`,
      "color: #fff; background: #008bf8; padding:5px 0; font-size:12px;font-weight: bold;",
      "background: #008bf8; padding:5px 0; font-size:12px;"
    );
  })

  // children 是将要会渲染的页面
  return children
}

export default App
