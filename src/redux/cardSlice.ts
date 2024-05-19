import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface User {
  id: string;
  name: string;
  email: string;
}
const initialState: Array<Game> = []
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Game>) => {
        state.push(action.payload);
    },
  },
});
export const { addItem } = cartSlice.actions;
export const userSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;