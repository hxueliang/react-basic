import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, DatePicker, Input, NavBar } from 'antd-mobile';
import classNames from 'classnames';

import Icon from '@c/40/Icon';
import { billListData } from '@/contants/40-billTypeToName';

import './index.scss';

function New() {
  const navigate = useNavigate();

  // 控制改入支出状态
  const [billType, setBillType] = useState('pay'); // pay income

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
              <span className="text">{'今天'}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
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
                        ''
                      )}
                      key={item.type}

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
        <Button className="btn save">
          保 存
        </Button>
      </div>
    </div>
  );
}

export default New;