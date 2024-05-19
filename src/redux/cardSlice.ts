import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface User {
  id: string;
  name: string;
  email: string;
}
const initialState: Array<ItemCart> = []
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemCart>) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }

    },
  },
});
export const { addItem } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;