import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk(
  'addToCart',
  async (productInfo, { getState, rejectWithValue, fulfillWithValue }) => {
    const { id, qty } = productInfo;

    const {
      productList: { products },
    } = getState();

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );

    try {
      return fulfillWithValue({
        product: products[id]._id,
        name: products[id].name,
        image: products[id].image,
        price: products[id].price,
        countInStock: products[id].countInStock,
        qty,
      });
    } catch (error) {
      console.error(error);
      return;
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
