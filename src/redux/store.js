import { configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export default store;
