import { createSlice } from "@reduxjs/toolkit";
import { loginAPI, getUserInfoAPI } from "@/apis/50/user";
import {
  request,
  setToken as _setToken,
  getToken,
  removeToken,
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
    clearUserInfo(state) {
      state.token = '';
      state.userInfo = {};
      removeToken();
    }
  }
});

const {
  setToken,
  setUserInfo,
  clearUserInfo,
} = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm);
    res.data.token && dispatch(setToken(res.data.token));
    return res;
  };
};

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoAPI();
    res.data && dispatch(setUserInfo(res.data));
    return res;
  };
};

export {
  fetchLogin,
  fetchUserInfo,
  clearUserInfo,
};

export default userStore.reducer;
