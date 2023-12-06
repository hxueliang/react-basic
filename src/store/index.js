import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/24-counterStore';
import channelReducer from './modules/26-channelStore';
import foodsReducer from './modules/30-takeaway';
import billStore from './modules/40-billStore';
import userStore from './modules/50-user';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    foods: foodsReducer,
    bill: billStore,
    user: userStore,
  }
});

export default store;