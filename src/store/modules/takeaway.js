import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [], // 商品列表
    activeIndex: 0, // 菜单激活项下标
    cartList: [], // 购物车列表
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setCartList(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id);
      item ? item.count++ : state.cartList.push(action.payload);
    },
    increCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id);
      item.count++;
    },
    decreCount(state, action) {
      const index = state.cartList.findIndex(item => item.id === action.payload.id);
      if (state.cartList[index].count === 1) {
        state.cartList.splice(index, 1);
      } else {
        state.cartList[index].count--;
      }
    },
    clearCartList(state) {
      state.cartList = [];
    }
  }
});

const {
  setFoodsList,
  setActiveIndex,
  setCartList,
  increCount,
  decreCount,
  clearCartList
} = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3012/takeaway');
    dispatch(setFoodsList(res.data));
  };
};

export {
  fetchFoodsList,
  setActiveIndex,
  setCartList,
  increCount,
  decreCount,
  clearCartList
};

const reducer = foodsStore.reducer;

export default reducer;