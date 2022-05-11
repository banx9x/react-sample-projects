import { createSlice } from '@reduxjs/toolkit';
import productApi from 'services/product.services';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    newArivals: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getNewArivals.matchFulfilled,
      (state, action) => {
        state.newArivals = action.payload;
      }
    );

    builder.addMatcher(
      productApi.endpoints.getAllProducts.matchFulfilled,
      (state, action) => {
        return state;
      }
    );
  },
});

export default productSlice;
