/**
 * 10-评论案例
 * 
 * 1、列表渲染
 * 2、实现删除评论功能
 * 3、实现tab切换功能
 * 4、实现评论排序功能
 * 5、使用classnames优化class写法
 * 6、实现核心功能
 * 7、实现随机id和时间格式化
 * 8、实现清空内容和输入框聚集
 */
import '../style/10-app.scss';
import avatar from '../images/bozai.png';
import { useState, useRef } from 'react';
import { orderBy } from 'lodash';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const BASE_URL = 'http://localhost:3000';
// http://toutiao.itheima.net/resources/images

// 评论列表数据
const list = [
  {
    rpid: 3,
    user: {
      uid: "13258165",
      avatar: `${BASE_URL}/10/98.jpg`,
      uname: "周杰伦"
    },
    content: "哎哟，不错哦",
    ctime: "10-18 08: 15",
    like: 126
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: `${BASE_URL}/10/98.jpg`,
      uname: "许嵩"
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11: 29",
    like: 88
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar: `${BASE_URL}/10/98.jpg`,
      uname: "黑马前端"
    },
    content: "学前端就来黑马",
    ctime: "10-19 09: 00",
    like: 66
  }
];
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
};
// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
];

function App() {
  // 渲染评论列表
  // 1、使用useState维护list
  const [commentList, setCommentList] = useState(orderBy(list, 'like', 'desc'));

  // 10.2、删除评论
  const handleDel = (id) => {
    setCommentList(commentList.filter(item => item.rpid !== id));
  };

  // 10.3、切换Tab
  const [tabType, setTabType] = useState(tabs[0].type);
  const handleTabChange = (type) => {
    setTabType(type);
    changeCommentList(type);
  };

  // 10.4、评论排序
  const typeMap = { hot: 'like', time: 'ctime' };
  const changeCommentList = (type) => {
    setCommentList(orderBy(commentList, typeMap[type], 'desc'));
  };

  // 发表评论
  const [content, setContent] = useState('');
  const contentRef = useRef(null);
  const handlePublish = () => {
    console.log(content);
    setCommentList([
      ...commentList,
      {
        rpid: uuidv4(),
        user: {
          uid: "13258165",
          avatar: `${BASE_URL}/10/98.jpg`,
          uname: "周杰伦"
        },
        content,
        ctime: dayjs(new Date()).format('MM-DD HH:mm'),
        like: 126
      }
    ]);
    setContent('');
    contentRef.current.focus();
  };

  return (
    <div className="App">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item =>
              <span
                key={item.type}
                className={classNames('nav-item', { active: tabType === item.type })}
                onClick={() => handleTabChange(item.type)}
              >
                {item.text}
              </span>
            )}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              ref={contentRef}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
            <div key={item.rpid} className="reply-item">
              {/* 头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    {/* 评论时间 */}
                    <span className="reply-time">{item.ctime}</span>
                    {/* 评论数量 */}
                    <span className="reply-time">点赞数:{item.like}</span>
                    {/* 条件 */}
                    {
                      user.uid === item.user.uid
                      &&
                      <span className="delete-btn" onClick={() => handleDel(item.rpid)}>
                        删除
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
