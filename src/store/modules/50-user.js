import { createSlice } from "@reduxjs/toolkit";
import {
  request,
  setToken as _setToken,
  getToken,
} from "@/utils";

const userStore = createSlice({
  name: 'user50',
  initialState: {
    token: getToken(),
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  }
});

const {
  setToken,
  setUserInfo,
} = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm);
    res.data.token && dispatch(setToken(res.data.token));
    return res;
  };
};

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile');
    res.data && dispatch(setUserInfo(res.data));
    return res;
  };
};

export {
  fetchLogin,
  fetchUserInfo,
};

export default userStore.reducer;
