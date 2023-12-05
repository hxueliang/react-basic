import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
  Table,
  Tag,
  Space,
} from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


import { useChannel } from '@/hooks/50/useChannel';
import { getArticleListAPI } from '@/apis/50/article';
import { ARTICLE_STATUS, ARTICLE_STATUS_COLOR } from '@/enum/50/article';
import img404 from '@/assets/images/50/error.png';

import './index.scss';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Article = () => {
  // 列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />;
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => <Tag color={ARTICLE_STATUS_COLOR[data]}>{ARTICLE_STATUS[data]}</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        );
      }
    }
  ];

  const { channelList } = useChannel();
  const [articleList, setArticleList] = useState([]);
  const [articleCount, setArticleCount] = useState(0);
  const [reqData, setReqDate] = useState({
    status: '', // 文章状态
    channel_id: '', // 频道
    begin_pubdate: '', // 起始时间
    end_pubdate: '', // 截止时间
    page: 1, // 当前页码
    per_page: 5, // 当前页条数
  });

  /**
   * 切换页码
   * @param {number} page 当面页
   */
  const onPageChange = page => {
    setReqDate({
      ...reqData,
      page,
    });
  };

  // 提交表单
  const onSubmit = ({ status, channel_id, date }) => {
    setReqDate({
      ...reqData,
      status, // 文章状态
      channel_id, // 频道
      begin_pubdate: date[0].format('YYYY-MM-DD'), // 起始时间
      end_pubdate: date[1].format('YYYY-MM-DD'), // 截止时间
      page: 1,
    });
  };

  useEffect(() => {
    async function getList() {
      const res = await getArticleListAPI(reqData);
      setArticleList(res.data.results);
      setArticleCount(res.data.total_count);
    }

    getList();
  }, [reqData]);

  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={onSubmit}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              defaultValue={channelList[0] || ''}
              style={{ width: 120 }}
            >
              {
                channelList.map(({ id, name }) => {
                  return <Option key={id} value={id}>{name}</Option>;
                })
              }

            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title={`根据筛选条件共查询到 ${articleCount} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={articleList} pagination={{
          total: articleCount,
          pageSize: reqData.per_page,
          current: reqData.page,
          onChange: onPageChange,
        }} />
      </Card>
    </div>
  );
};

export default Article;