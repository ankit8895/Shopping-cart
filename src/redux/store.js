import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productListReducer } from './reducers/productReducer';
import { productDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
  preloadedState,
});

export default store;
