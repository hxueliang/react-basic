import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increCount, decreCount, clearCartList } from '../../../store/modules/takeaway';
import Count from '../Count';
import './index.scss';

const Cart = () => {
  const { cartList } = useSelector(state => state.foods);
  const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.count, 0);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onShowList = () => {
    cartList.length > 0 && setVisible(!visible);
  };

  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames(
          'cartOverlay',
          { visible }
        )}
        onClick={() => setVisible(!visible)}
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div
          className={classNames(
            'icon',
            { fill: cartList.length > 0 }
          )}
          onClick={onShowList}
        >
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames(
        'cartPanel',
        { visible }
      )}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => dispatch(clearCartList())}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(increCount(item))}
                    onMinus={() => dispatch(decreCount(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export default Cart;
