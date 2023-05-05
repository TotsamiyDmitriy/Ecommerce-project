import { Slice, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mainReduser:Slice = createSlice({
  name: 'mainReduser',
  initialState: {
    product: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
  },
});

// Определяем `thunk`
export const fetchProducts = () => (dispatch:any) => {
  axios
    .get(
      `http://localhost:3000/db.json`,
    )
    .then(({ data }) => {
      dispatch(setProduct(data));
    });
};

export const {setProduct} = mainReduser.actions;
export default mainReduser.reducer;