/**
 * 30-美团外卖案例
 * 
 * 素材：https://git.itcast.cn/heimaqianduan/redux-meituan
 * 
 * 1、实现食品列表
 * 2、实现食品菜单
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../components/30/NavBar';
import Menu from '../components/30/Menu';
import Cart from '../components/30/Cart';
import FoodsCategory from '../components/30/FoodsCategory';
import { fetchFoodsList } from '../store/modules/takeaway';

import '../style/30-app.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  const { foodsList } = useSelector(state => state.foods);

  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map(item => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  );
};

export default App

