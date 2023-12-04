// 封装获取频道列表的逻辑

import { useEffect, useState } from 'react';

import { getChannelAPI } from '@/apis/50/article';

function useChannel() {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI();
      if (res?.data?.channels) {
        setChannelList(res.data.channels);
      }
    };

    getChannelList();
  }, []);

  return {
    channelList
  };
}

export { useChannel };