import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counterStore';
import channelReducer from './modules/channelStore';
import foodsReducer from './modules/takeaway';
import billStore from './modules/billStore';
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