import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveIndex } from '@s/modules/takeaway';
import './index.scss';

const Menu = () => {
  const dispatch = useDispatch();

  const { foodsList, activeIndex } = useSelector(state => state.foods);
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }));

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              { 'active': activeIndex === index }
            )}
            onClick={() => dispatch(setActiveIndex(index))}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
