import React from 'react';
import { MiniCard } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/mainSlice';

const Scroller = () => {
  const dispatch: any = useDispatch();

  const setProductObj = (): void => {
    dispatch(fetchProducts());
  };

  const state = useSelector((main) => ({
    product: main.product,
  }));
  console.log(state);

  return (
    <div>
      <MiniCard></MiniCard>
    </div>
  );
};

export default Scroller;
