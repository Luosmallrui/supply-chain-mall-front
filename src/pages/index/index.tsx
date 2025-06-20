import {setTabBarIndex} from "@/store/tabbar";
import {useEffect, useState} from 'react';
import {View, Text, Image, Input, SwiperItem, Swiper} from '@tarojs/components';
import './index.less';
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');

  const [location, setLocation] = useState('定位中...');

  useEffect(() => {
    getLocation();
    // 使用 setTimeout 确保 TabBar 组件已经渲染完成
    setTabBarIndex(0)
  }, []);


  // 页面显示时也设置一次，确保状态正确
  Taro.useDidShow(() => {
    setTabBarIndex(0)
  })

  const getLocation = () => {
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation']) {
          getLocationInfo();
        } else {
          Taro.authorize({
            scope: 'scope.userLocation',
            success: () => {
              getLocationInfo();
            },
            fail: () => {
              setLocation('未授权定位');
            }
          });
        }
      }
    });
  };

  const getLocationInfo = () => {
    Taro.getLocation({
      type: 'gcj02', // 使用国内标准坐标系
      altitude: true, // 获取高度信息
      isHighAccuracy: true, // 使用高精度定位
      highAccuracyExpireTime: 4000, // 高精度定位超时时间
      success: (res) => {
        console.log('定位结果:', res);

        // 使用有效的API密钥进行逆地理编码
        Taro.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/',
          data: {
            location: `${res.latitude},${res.longitude}`,
            key: '7GEBZ-DLZKN-TRUFI-S7MTP-UISI6-4XBGI', // 需要替换为有效密钥
            get_poi: 1,
            poi_options: 'policy=1;radius=1000'
          },
          success: (response) => {
            console.log('逆地理编码结果:', response.data);
            const data = response.data;
            if (data && data.status === 0) {
              const address = data.result;
              const city = address.address_component.city || address.address_component.district;
              setLocation(city);
            } else {
              console.error('逆地理编码失败:', data);
              setLocation('定位解析失败');
            }
          },
          fail: (error) => {
            console.error('请求失败:', error);
            setLocation('网络请求失败');
          }
        });
      },
      fail: (error) => {
        console.error('定位失败:', error);
        setLocation('定位失败');
      }
    });
  };
  const animalCategories = [
    {
      name: '澳洲和牛',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop',
      overlay: true
    },
    {
      name: '新西兰罗姆尼羊',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=300&h=200&fit=crop',
      overlay: true
    },
    {
      name: '西班牙伊比利亚黑猪',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300&h=200&fit=crop',
      overlay: true
    }
  ];

  const cookingMethods = [
    {name: '煎', icon: '🍳', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop'},
    {name: '炒', icon: '🥘', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150&h=150&fit=crop'},
    {name: '涮', icon: '🍲', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop'},
    {name: '炖', icon: '🥩', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=150&h=150&fit=crop'},
    {name: '烤', icon: '🔥', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=150&h=150&fit=crop'}
  ];

  const bannerData = [
    {
      title: '红芋火锅局',
      subtitle: 'HONGHUI',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=400&fit=crop',
      gradient: 'from-red-600 to-orange-500'
    }
  ];

  // 添加商品数据
  const products = [
    {
      id: 1,
      name: '澳洲谷饲安格斯M3+雪花原切西冷牛排',
      price: '59.90',
      originalPrice: '8452',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      brand: 'HONG HUI',
      brandSubtitle: 'butcher life'
    },
    {
      id: 2,
      name: '澳洲谷饲安格斯M3+雪花牛仔骨原切',
      price: '59.90',
      originalPrice: '6854',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
      brand: 'HONG HUI',
      brandSubtitle: 'butcher life'
    },
    {
      id: 3,
      name: '澳洲原切150天小西冷牛排（煎炒两用）',
      price: '19.90',
      originalPrice: '10360',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
      brand: 'HONG HUI',
      brandSubtitle: 'butcher life'
    },
    {
      id: 4,
      name: '美国谷饲Prime级佳级原切西冷牛排',
      price: '59.90',
      originalPrice: '6651',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop',
      brand: 'HONG HUI',
      brandSubtitle: 'butcher life'
    }
  ];

  return (
    <View className='premium-home'>
      {/* 沉浸式顶部 */}
      <View className='immersive-header'>
        <View className='status-bar'>
          <View className='location-pin' onClick={getLocation}>
            <Text className='pin-icon'>📍</Text>
            <Text className='city-name'>{location}</Text>
            <Text className='location-arrow'>▼</Text>
          </View>
        </View>

        <View className='search-section'>
          <View className='premium-search'>
            <Text className='search-icon'>🔍</Text>
            <Input
              placeholder='牛排'
              value={searchValue}
              onInput={(e) => setSearchValue(e.detail.value)}
              className='search-field'
            />
            <Text className='search-button'>搜索</Text>
          </View>
        </View>
      </View>

      {/* 轮播背景 */}
      <Swiper
        className='hero-banner'
        indicatorDots
        autoplay
        interval={3000}
        circular
      >
        <SwiperItem>
          <Image
            src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
            mode='aspectFill'
            className='hero-image'
          />
          <View className='hero-overlay'/>
        </SwiperItem>
        <SwiperItem>
          <Image
            src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop'
            mode='aspectFill'
            className='hero-image'
          />
          <View className='hero-overlay'/>
        </SwiperItem>
      </Swiper>

      {/* 动物分类卡片 */}
      <View className='animal-showcase'>
        <View className='showcase-grid'>
          {animalCategories.map((animal, index) => (
            <View key={index} className='animal-card'>
              <Image
                src={animal.image}
                mode='aspectFill'
                className='animal-image'
              />
              <View className='animal-overlay'>
                <Text className='animal-name'>{animal.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 烹饪方式 */}
      <View className='cooking-methods'>
        <View className='methods-container'>
          {cookingMethods.map((method, index) => (
            <View key={index} className='method-card'>
              <View className='method-image-container'>
                <Image
                  src={method.image}
                  mode='aspectFill'
                  className='method-bg'
                />
                <View className='method-overlay'>
                  <Text className='method-name'>{method.name}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 火锅局横幅 */}
      <Swiper
        className='banner-swiper'
        indicatorDots
        autoplay
        interval={3000}
        circular
      >
        {bannerData.map((item, index) => (
          <SwiperItem key={index}>
            <Image src={item.image} className='banner-bg' mode='aspectFill'/>
            <View className='banner-content'>
              <Text className='banner-title'>{item.title}</Text>
              <Text className='banner-subtitle'>{item.subtitle}</Text>
            </View>
          </SwiperItem>
        ))}
      </Swiper>

      {/* 商品展示区 - 新增 */}
      <View className='products-showcase'>
        <View className='products-grid'>
          {products.map((product) => (
            <View key={product.id} className='product-card'>
              <View className='product-image-wrapper'>
                <Image
                  src={product.image}
                  mode='aspectFill'
                  className='product-image'
                />
                <View className='brand-logo'>
                  <Text className='brand-name'>{product.brand}</Text>
                  <Text className='brand-subtitle'>{product.brandSubtitle}</Text>
                </View>
                <View className='add-btn'>
                  <Text className='add-icon'>+</Text>
                </View>
              </View>

              <View className='product-info'>
                <Text className='product-name'>{product.name}</Text>
                <View className='price-section'>
                  <Text className='current-price'>¥{product.price}</Text>
                  <Text className='original-price'>已售 {product.originalPrice}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 底部推广区域 */}
      <View className='promotion-area'>
        <View className='promo-left'>
          <View className='newbie-card'>
            <Image
              src='https://picsum.photos/300/200?random=1'
              mode='aspectFill'
              className='newbie-bg-image'
            />
            <View className='newbie-overlay'>
              <Text className='promo-title'>新人专享</Text>
              <Text className='promo-subtitle'>天天有折扣</Text>
              <View className='promo-icon'>🎁</View>
            </View>
          </View>
        </View>

        <View className='promo-right'>
          <View className='coupon-card'>
            <Image
              src='https://picsum.photos/300/200?random=2'
              mode='aspectFill'
              className='coupon-bg-image'
            />
            <View className='coupon-overlay'>
              <Text className='coupon-title'>一优惠券专区一</Text>
              <Text className='coupon-subtitle'>领券享优惠</Text>
              <View className='coupon-icon'>🎟️</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
