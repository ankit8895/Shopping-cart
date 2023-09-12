import { createSlice } from '@reduxjs/toolkit';
import products from '../../../public/assets/data';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: products,
  },
});

export const productListReducer = productListSlice.reducer;