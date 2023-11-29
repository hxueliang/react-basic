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
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
  }
});

const {
  setToken,
} = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm);
    res.data.token && dispatch(setToken(res.data.token));
    return res;
  };
};

export {
  fetchLogin,
};

export default userStore.reducer;
