import React, { useState } from 'react';
import { Search, MapPin, Bell, ShoppingCart, Home, Tag, User, Heart } from 'lucide-react';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');

  const categories = [
    { name: '煮', icon: '🍲', color: 'from-orange-400 to-red-500' },
    { name: '炒', icon: '🍳', color: 'from-yellow-400 to-orange-500' },
    { name: '烤', icon: '🔥', color: 'from-red-400 to-pink-500' },
    { name: '蒸', icon: '💨', color: 'from-blue-400 to-indigo-500' },
    { name: '炸', icon: '⚡', color: 'from-purple-400 to-pink-500' },
    { name: '凉拌', icon: '🥗', color: 'from-green-400 to-teal-500' },
    { name: '汤', icon: '🍜', color: 'from-indigo-400 to-purple-500' },
    { name: '甜品', icon: '🍰', color: 'from-pink-400 to-rose-500' }
  ];

  const products = [
    {
      id: 1,
      name: '澳洲和牛A5',
      price: '¥298',
      originalPrice: '¥398',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop',
      tag: '限时特价',
      rating: 4.9
    },
    {
      id: 2,
      name: '新西兰罗姆尼羊',
      price: '¥128',
      originalPrice: '¥168',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop',
      tag: '热销',
      rating: 4.8
    },
    {
      id: 3,
      name: '挪威三文鱼',
      price: '¥88',
      originalPrice: '¥128',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop',
      tag: '新品',
      rating: 4.7
    },
    {
      id: 4,
      name: '日式和牛',
      price: '¥588',
      originalPrice: '¥688',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=200&fit=crop',
      tag: '精选',
      rating: 5.0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部搜索栏 */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-gray-800 font-medium">成都</span>
              <span className="text-xs text-gray-500">▼</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索美食、商品..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* 轮播图 */}
      <div className="px-4 py-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=300&fit=crop"
            alt="Banner"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold mb-1">红荭全球好红肉</h2>
              <p className="text-sm opacity-90">精选全球优质肉类</p>
            </div>
          </div>
        </div>
      </div>

      {/* 分类导航 */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs text-gray-700 mt-2 font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 商品推荐 */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">🔥 精选推荐</h3>
          <span className="text-sm text-red-500 font-medium">查看更多 →</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="p-3">
                <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-red-500 font-bold text-lg">{product.price}</span>
                    <span className="text-gray-400 text-xs line-through">{product.originalPrice}</span>
                  </div>
                  <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-red-600 transition-colors">
                    加购
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          {[
            { icon: Home, label: '首页', active: true },
            { icon: Tag, label: '优惠', active: false },
            { icon: Search, label: '发现', active: false },
            { icon: ShoppingCart, label: '购物车', active: false },
            { icon: User, label: '我的', active: false }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <item.icon className={`w-6 h-6 ${item.active ? 'text-red-500' : 'text-gray-400'}`} />
              <span className={`text-xs ${item.active ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 底部安全距离 */}
      <div className="h-20"></div>
    </div>
  );
};

export default HomePage;
