import {AtIcon} from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import {useEffect} from 'react'
import {View, Text, Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import {setTabBarIndex} from '../../store/tabbar'
import './index.scss'

export default function UserPage() {
  useEffect(() => {
    setTabBarIndex(1)
  }, [])

  Taro.useDidShow(() => {
    setTabBarIndex(1)
  })

  const stats = [
    {label: '余额', value: '0.00', action: '如何获取'},
    {label: '赠送金额', value: '0.00', action: '如何获取'},
    {label: '优惠券', value: '0', action: ''},
    {label: '佣金', value: '0.00', action: '如何获取'}
  ];

  const orderItems = [
    {icon: 'bookmark', label: '全部订单'},
    {icon: 'money', label: '待付款'},
    {icon: 'shopping-bag', label: '待发货'},
    {icon: 'shopping-cart', label: '待收货'}
  ];

  const serviceItems = [
    {icon: 'phone', label: '联系客服'},
    {icon: 'camera', label: '扫一扫'},
    {icon: 'gift', label: '优惠券'},
    {icon: 'map-pin', label: '收货地址'}
  ];

  const toolItems = [
    {icon: 'credit-card', label: '充值'},
    {icon: 'star', label: '收藏'},
    {icon: 'file-text', label: '开具发票'},
    {icon: 'edit', label: '问卷调查'}
  ];

  const businessItems = [
    {icon: 'user', label: '商务合作'},
    {icon: 'message', label: '用户反馈'},
    {icon: 'home', label: '站点'},
    {icon: 'user', label: '跑腿员'}
  ];

  const settingItems = [
    {icon: 'settings', label: '设置'},
    {icon: 'user', label: '代理'},
    {icon: 'user', label: '荟长'},
    {icon: 'user', label: '红人申请'}
  ];

  const handleItemClick = (label: string) => {
    if (label === '全部订单') {
      Taro.navigateTo({
        url: '/pages/order/index'  // 确保这个路径正确
      })
      return
    }
    Taro.showToast({
      title: `点击了${label}`,
      icon: 'none'
    })
  }

  return (
    <View className='user-page'>
      {/* Header */}
      <View className='header'>
        <View className='header-buttons'>
          <Button className='member-btn normal'>普通会员</Button>
          <Button className='member-btn premium'>会员权益</Button>
        </View>

        <View className='user-info'>
          <View className='avatar'>
            <AtIcon value='user' size='32' color='#666'/>
          </View>
          <View className='user-text'>
            <Text className='username'>微信用户</Text>
          </View>
        </View>
      </View>

      {/* VIP Banner */}
      <View className='vip-banner'>
        <View className='vip-content'>
          <View className='vip-left'>
            <View className='vip-icon'>
              <AtIcon value='gift' size='16' color='#374151'/>
            </View>
            <Text className='vip-text'>开通VIP会员，享专属折扣</Text>
          </View>
          <Button className='vip-button'>立即开通</Button>
        </View>
      </View>

      {/* Stats Cards */}
      <View className='stats-container'>
        <View className='stats-grid'>
          {stats.map((stat, index) => (
            <View key={index} className='stat-item'>
              <Text className='stat-value'>{stat.value}</Text>
              <Text className='stat-label'>{stat.label}</Text>
              {stat.action && (
                <Button
                  className='stat-action'
                  onClick={() => handleItemClick(stat.action)}
                >
                  {stat.action}
                </Button>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Order Section */}
      <View className='section-container'>
        <View className='section-grid'>
          {orderItems.map((item, index) => (
            <View
              key={index}
              className='grid-item'
              onClick={() => handleItemClick(item.label)}
            >
              <View className='item-icon'>
                <AtIcon value={item.icon} size='24' color='#6b7280'/>
              </View>
              <Text className='item-label'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Service Section */}
      <View className='section-container'>
        <View className='section-grid'>
          {serviceItems.map((item, index) => (
            <View
              key={index}
              className='grid-item'
              onClick={() => handleItemClick(item.label)}
            >
              <View className='item-icon'>
                <AtIcon value={item.icon} size='24' color='#6b7280'/>
              </View>
              <Text className='item-label'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tools Section */}
      <View className='section-container'>
        <View className='section-grid'>
          {toolItems.map((item, index) => (
            <View
              key={index}
              className='grid-item'
              onClick={() => handleItemClick(item.label)}
            >
              <View className='item-icon'>
                <AtIcon value={item.icon} size='24' color='#6b7280'/>
              </View>
              <Text className='item-label'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Business Section */}
      <View className='section-container'>
        <View className='section-grid'>
          {businessItems.map((item, index) => (
            <View
              key={index}
              className='grid-item'
              onClick={() => handleItemClick(item.label)}
            >
              <View className='item-icon'>
                <AtIcon value={item.icon} size='24' color='#6b7280'/>
              </View>
              <Text className='item-label'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Settings Section */}
      <View className='section-container last-section'>
        <View className='section-grid'>
          {settingItems.map((item, index) => (
            <View
              key={index}
              className='grid-item'
              onClick={() => handleItemClick(item.label)}
            >
              <View className='item-icon'>
                <AtIcon value={item.icon} size='24' color='#6b7280'/>
              </View>
              <Text className='item-label'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
