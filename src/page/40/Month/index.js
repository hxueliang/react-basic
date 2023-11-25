import { NavBar, DatePicker } from 'antd-mobile';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { groupBy } from 'lodash';

import DailyBill from './components/DailyBill';

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

  // 当前月账单
  const [currentMonthList, setCurrentMonthList] = useState([]);

  // 计算当前月：支出、收入、结余
  const monthResult = useMemo(() => {
    const pay = currentMonthList
      .filter(item => item.type === 'pay')
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter(item => item.type === 'income')
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);

  // 按日做数据分组
  const dayGroup = useMemo(() => {
    const data = groupBy(currentMonthList, item => dayjs(item.date).format('YYYY-MM-DD'));
    const keys = Object.keys(data).sort();
    return {
      data,
      keys,
    };
  }, [currentMonthList]);

  /**
   * 点击日期选择窗确认
   * 
   * @param {date} date 日期
   */
  const onConfirm = (date) => {
    setCurrentDate(date);

    const currentMonth = dayjs(date).format('YYYY-MM');
    setCurrentMonthList(monthGroup[currentMonth] || []);

    setDateVisible(!dateVisible);

  };

  // 初始化渲染当前月统计数据
  useEffect(() => {
    const currentMonth = dayjs().format('YYYY-MM');
    setCurrentMonthList(monthGroup[currentMonth] || []);
  }, [monthGroup]);

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
              <span className="money">{Math.abs(monthResult.pay).toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{Math.abs(monthResult.total).toFixed(2)}</span>
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
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key => {
            return <DailyBill key={key} date={key} billList={dayGroup.data[key]} />;
          })
        }
      </div>
    </div>
  );
};

export default Month;