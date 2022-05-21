import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return state;
    },

    changeQuantity(state, action) {
      return state;
    },

    removeItem(state, action) {
      return state;
    },

    clearCart(state, action) {
      return [];
    },
  },
});

export default cartSlice;
export const { addToCart, changeQuantity, removeItem, clearCart } =
  cartSlice.actions;

export const selectAllItems = (state: RootState) => state.cart;

export const selectTotalItems = createSelector(
  selectAllItems,
  (item) => item.length
);
