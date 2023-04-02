import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../modules/itemSlice";

const store = configureStore({
  reducer: {
    item: itemSlice,
  },
});

export default store;

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>;
