import classNames from "classnames";
import { useMemo, useState } from "react";

import { billTypeToName } from '@/contants/40-billTypeToName';

import './index.scss';
import Icon from "@/components/40/Icon";

const DailyBill = ({ date, billList }) => {
  // 计算当前日：支出、收入、结余
  const dayResult = useMemo(() => {
    const pay = billList
      .filter(item => item.type === 'pay')
      .reduce((a, c) => a + c.money, 0);
    const income = billList
      .filter(item => item.type === 'income')
      .reduce((a, c) => a + c.money, 0);
    return {
      pay: Math.abs(pay).toFixed(2),
      income: Math.abs(income).toFixed(2),
      total: Math.abs(pay + income).toFixed(2),
    };
  }, [billList]);

  // 控制展开收起
  const [visible, setVisible] = useState(false);

  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span
            className={classNames('arrow', { expand: visible })}
            onClick={() => setVisible(!visible)}
          ></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>

      {/* 单日列表 */}
      <div className="billList" style={{ display: visible ? 'block' : 'none' }}>
        {billList.map(item => {
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              <Icon type={item.useFor} />
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyBill;