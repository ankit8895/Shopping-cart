import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import products from '../../assets/data';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: products,
  },
});

export const productListReducer = productListSlice.reducer;

export const listproductDetails = createAsyncThunk(
  'product/listproductDetails',
  async (id, { getState, fulfillWithValue }) => {
    const {
      productList: { products },
    } = getState();

    try {
      return fulfillWithValue(products[id]);
    } catch (error) {
      console.error(error);
      return;
    }
  }
);

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: {},
  },
  extraReducers: (builder) => {
    builder.addCase(listproductDetails.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const productDetailsReducer = productDetailsSlice.reducer;
