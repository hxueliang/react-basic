import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
  name: 'user50',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  }
});

const {
  setToken,
} = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm);
    dispatch(setToken(res.data.token));
  };
};

export {
  fetchLogin,
};

export default userStore.reducer;
