import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type ReviewsType = {
  author: string,
  date: string,
  rating: number,
  title: string,
 description: string,
  photos: Array<string>
}


type ProductType = {
    name: string,
    brandName: string,
    soldBy: string,
    rating: number,
    reviewsCount: number,
    price: number,
    offers: number,
	photos: Array<string>,
    sizes: Array<string>,
    colors: Array<string>,
	category: number,
    reviews? : Array<ReviewsType>
}


type ProductState = {
  product: Array<ProductType>,
}


const initialState:ProductState = {
  product:[]
}


const mainReduser:Slice = createSlice({
  name: 'mainReduser',
  initialState,
  reducers: {
    setProduct: (state, action:PayloadAction<ProductType>) => {
      state.product = action.payload
    },
  },
});


export const fetchProducts = () => (dispatch:any) => {
  axios
    .get(
      `http://localhost:3000/db.json`,
    )
    .then(({ data }) => {
      dispatch(setProduct(data));
    }).catch(error => {
      console.log(error)
  });
};

export const {setProduct} = mainReduser.actions;
export default mainReduser.reducer;