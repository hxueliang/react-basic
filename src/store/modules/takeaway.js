import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [], // 商品列表
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    }
  }
});

const { setFoodsList } = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3012/takeaway');
    dispatch(setFoodsList(res.data));
  };
};

export { fetchFoodsList };

const reducer = foodsStore.reducer;

export default reducer;