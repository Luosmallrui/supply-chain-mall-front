import {setTabBarIndex} from "@/store/tabbar";
import Taro from "@tarojs/taro";
import React, {useEffect} from "react";
import {Button, Text, View} from "@tarojs/components";
import {useSnapshot} from "valtio";
import {store} from '../../models/index'
import "./index.less";

const User: React.FC = () => {
  useEffect(() => {
    setTabBarIndex(1)
  }, [])

  Taro.useDidShow(() => {
    setTabBarIndex(1)
  })
  const {user} = useSnapshot(store)

  return (
    <View className='user_box'>
      <Text>UserName: {user.name}</Text>
      <Button type='primary' onClick={() => store.setUser('123123')}>
        更新store数据
      </Button>
    </View>
  );
};

export default User;
