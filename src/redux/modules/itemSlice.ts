import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const itemSlice = createSlice({
  name: "cates",
  initialState,
  reducers: {
    changeCates: (state, action) => {
      return { ...state, cates: action.payload };
    },
  },
  extraReducers: {},
});
export const { changeCates } = itemSlice.actions;
export default itemSlice.reducer;
