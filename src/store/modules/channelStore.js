import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload;
    }
  }
});

const { setChannelList } = channelStore.actions;

// 异步请求
const fetchChannelList = () => {
  return async (dispatch) => {
    // src/db/26-channels.json
    const res = await axios.get('http://geek.itheima.net/v1_0/channels');
    dispatch(setChannelList(res.data.data.channels));
  };
};

export { fetchChannelList };

const reducer = channelStore.reducer;

export default reducer;