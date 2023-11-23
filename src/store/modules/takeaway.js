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
      console.log(item);
      item ? item.count++ : state.cartList.push(action.payload);
    }
  }
});

const { setFoodsList, setActiveIndex, setCartList } = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3012/takeaway');
    dispatch(setFoodsList(res.data));
  };
};

export { fetchFoodsList, setActiveIndex, setCartList };

const reducer = foodsStore.reducer;

export default reducer;