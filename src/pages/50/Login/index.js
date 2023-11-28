import { Card, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import logo from '@a/images/50/logo.png';
import { fetchLogin } from '@/store/modules/50-user';

import './index.scss';

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(fetchLogin(values));
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger={'onBlur'}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入正确格式的手机号' }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;