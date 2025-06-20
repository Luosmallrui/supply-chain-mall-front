import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

export default function OrderPage() {
  const [current, setCurrent] = useState(0)

  const tabList = [
    { title: '全部' },
    { title: '待付款' },
    { title: '待发货' },
    { title: '待收货' },
    { title: '已完成' }
  ]

  const handleBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className='order-page'>
      {/* 顶部标题栏 */}
      <View className='order-navbar'>
        <View className='back-btn' onClick={handleBack}>
          ←
        </View>
        <Text className='nav-title'>我的订单</Text>
      </View>

      {/* 标签栏 */}
      <AtTabs
        current={current}
        tabList={tabList}
        onClick={setCurrent}
        className='order-tabs'
        swipeable
      >
        {tabList.map((_, index) => (
          <AtTabsPane current={current} index={index} key={index}>
            <View className='order-empty'>
              <Image
                className='empty-img'
                src='https://cdn-icons-png.flaticon.com/512/4076/4076549.png'
                mode='widthFix'
              />
              <Text className='empty-text'>暂无订单~</Text>
            </View>
          </AtTabsPane>
        ))}
      </AtTabs>
    </View>
  )
}
