import { useEffect, useState } from 'react';
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Input,
  Space,
  Select,
  message,
  Radio,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link, useSearchParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { createArticleAPI, getArticleAPI } from '@/apis/50/article';
import { useChannel } from '@/hooks/50/useChannel';

import './index.scss';

const { Option } = Select;

const Publish = () => {
  const [imageList, setImageList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageType, setImageType] = useState(0);

  const { channelList } = useChannel();
  const [searchParams] = useSearchParams();
  const [articleForm] = Form.useForm();

  const articleId = searchParams.get('id');

  // 提交表单
  const onSubmit = async ({ title, content, channel_id }) => {
    if (imageList.length !== imageType) {
      message.error('封面类型和图片数量不匹配');
      return;
    }

    const _imageList = await fetchImageList();
    const images = _imageList.map(item => item?.data?.url).filter(url => !!url);
    if (images.length < imageType) {
      message.error('封面上传失败，请重试');
      return;
    }

    const reqData = {
      title,
      content,
      cover: {
        type: imageType, // -1:自动，0:-无图，1:1张，3:3张
        images,
      },
      channel_id,
    };
    const createArticle = async () => {
      const res = await createArticleAPI(reqData);
      if (res.data.id) {
        message.success('提交成功');
      }
    };

    createArticle();
  };

  /**
   * 上传回调
   * @param {file} imagefile 图片文件
   */
  const beforeUpload = imagefile => {
    // 1图
    if (imageType === 1) {
      setImageList([imagefile]);
      return false;
    }
    // 3图
    if (imageList.length < imageType) {
      setImageList([...imageList, imagefile]);
    } else {
      setImageList([...imageList.slice(1), imagefile]);
    }
    return false;
  };

  /**
   * 
   * @param {file} imagefile 图片文件
   */
  const onRemoveUpload = (imagefile) => {
    const index = imageList.indexOf(imagefile);
    const newFileList = imageList.slice();
    newFileList.splice(index, 1);
    setImageList(newFileList);
  };

  /**
   * 切换图片类型
   */
  const onTypeChange = (e) => {
    const type = e.target.value;
    setImageType(type);
  };

  /**
   * 上传图片
   * @returns promises
   */
  const fetchImageList = async () => {
    let successCount = 0;
    let errorCout = 0;
    let promises = imageList.map(file => {
      const formData = new FormData();
      formData.append('image', file);
      setUploading(true);

      const controller = new AbortController(); // 1创建终止器
      setTimeout(() => {
        controller.abort(); // 3终止请求
      }, 2000);

      return fetch('http://geek.itheima.net/v1_0/upload', {
        method: 'POST',
        body: formData,
        signal: controller.signal, // 2终止器的信号
      })
        .then(res => res.json())
        .then(res => {
          // message.success('图片上传成功');
          successCount++;
          return res;
        })
        .catch(res => {
          // message.error('图片上传失败');
          errorCout++;
          return res;
        });
    });

    promises = await Promise.all(promises);

    // TODO：需等产品确认需求
    if (false) {
      successCount && message.success(`上传成功${successCount}张`);
      errorCout && message.error(`上传失败${errorCout}张`);
    }
    setUploading(false);

    return promises;
  };

  useEffect(() => {
    async function getArticle() {
      const res = await getArticleAPI(articleId);
      const {
        cover: {
          type,
          images,
        }
      } = res.data;
      articleForm.setFieldsValue({
        ...res.data,
        type,
      });
      setImageType(type);
      setImageList(images.map(url => {
        return {
          url
        };
      }));
    }
    articleId && getArticle();
  }, [articleId, articleForm]);

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          form={articleForm}
          onFinish={onSubmit}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {
                channelList.map(({ id, name }) => {
                  return <Option value={id} key={id}>{name}</Option>;
                })
              }
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {
              imageType > 0 && <Upload
                listType="picture-card"
                showUploadList
                maxCount={imageType}
                fileList={imageList}
                beforeUpload={beforeUpload}
                onRemove={onRemoveUpload}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            }
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                loading={uploading}
              >
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;