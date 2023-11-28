import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    addBill(state, action) {
      state.billList.push(action.payload);
    }
  }
});

const { setBillList, addBill } = billStore.actions;

// 异步请求
const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3013/ka');
    dispatch(setBillList(res.data));
  };
};
const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:3013/ka', data);
    dispatch(addBill(res.data));
  };
};

export { fetchBillList, addBillList };

export default billStore.reducer;