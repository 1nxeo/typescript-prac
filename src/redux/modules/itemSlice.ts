import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type List = {
  id: number;
  title: string | undefined;
  desc: string | undefined;
};

const initialState: List[] = [];

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<List>) => {
      const newList = [...state, action.payload];
      return newList;
    },
    editItems: (state, action: PayloadAction<List>) => {
      const itemId: number = action.payload.id;
      const itemIndex: number = state.findIndex((item) => item.id === itemId);
      const newList: List[] = [...state];
      newList.splice(itemIndex, 1, action.payload);
      return newList;
    },
    deleteItems: (state, action: PayloadAction<number>) => {
      const newList = state.filter((item) => item.id !== action.payload);

      return newList;
    },
  },
  extraReducers: {},
});
export const { addItems, editItems, deleteItems } = itemSlice.actions;
export default itemSlice.reducer;
