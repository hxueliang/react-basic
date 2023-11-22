import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [], // 商品列表
    activeIndex: 0, // 菜单激活项下标
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    }
  }
});

const { setFoodsList, setActiveIndex } = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3012/takeaway');
    dispatch(setFoodsList(res.data));
  };
};

export { fetchFoodsList, setActiveIndex };

const reducer = foodsStore.reducer;

export default reducer;