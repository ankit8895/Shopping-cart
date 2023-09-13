import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productListReducer } from './reducers/productReducer';
import { productDetailsReducer } from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});

export default store;
