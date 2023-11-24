import { NavBar, DatePicker } from 'antd-mobile';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { groupBy } from 'lodash';

import './index.scss';

function Month() {
  // 显示日期选择窗
  const [dateVisible, setDateVisible] = useState(false);
  // 时间显示
  const [currentDate, setCurrentDate] = useState(() => new Date());
  // 按月做数据分组，方便按月显示数据
  const { billList } = useSelector(state => state.bill);
  const monthGroup = useMemo(() => {
    // return groupBy(billList, item => item.date);
    return groupBy(billList, item => dayjs(item.date).format('YYYY-MM'));
  }, [billList]);

  /**
   * 点击日期选择窗确认
   * 
   * @param {date} date 日期
   */
  const onConfirm = (date) => {
    setCurrentDate(date);
    setDateVisible(!dateVisible);
  };

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(!dateVisible)}>
            <span className="text">
              {dayjs(currentDate).format('YYYY | MM')}月账单
            </span>
            <span className={classNames(
              'arrow',
              { expand: dateVisible }
            )}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate theme40"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(!dateVisible)}
            onConfirm={onConfirm}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;