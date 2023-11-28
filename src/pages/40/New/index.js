import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, DatePicker, Input, NavBar, Toast } from 'antd-mobile';
import classNames from 'classnames';

import Icon from '@c/40/Icon';
import { billListData } from '@/contants/40-billTypeToName';
import { addBillList } from '@s/modules/billStore';

import './index.scss';

function New() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 控制改入支出状态
  const [billType, setBillType] = useState('pay'); // pay income

  // 输入的金额
  const [money, setMoney] = useState(0);
  const moneyChange = value => {
    setMoney(+value);
  };

  // 控制时间打开和关闭
  const [dateVisible, setDateVisible] = useState(false);

  // 存储选择的时间
  const [date, setDate] = useState(new Date());

  // 账单类型
  const [useFor, setUseFor] = useState('');

  /**
   * 保存账单
   */
  const saveBill = () => {
    const data = {
      type: billType,
      money: billType === 'pay' ? -money : +money,
      date,
      useFor,
    };
    if (!money || !useFor) {
      Toast.show({ content: '金额和类型不能为空' });
      return;
    }
    dispatch(addBillList(data));
  };

  /**
   * 点击时间确定按键
   * 
   * @param {date} value 选择的时间
   */
  const dateConfirm = value => {
    setDate(dayjs(value).format('YYYY-MM-DD HH:mm:ss'));
    setDateVisible(false);
  };

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames({ selected: billType === 'pay' })}
            onClick={() => setBillType('pay')}
          >
            支出
          </Button>
          <Button
            shape="rounded"
            className={classNames({ selected: billType === 'income' })}
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
              <DatePicker
                className="kaDate theme40"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        { selected: item.type === useFor }
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          保 存
        </Button>
      </div>
    </div>
  );
}

export default New;