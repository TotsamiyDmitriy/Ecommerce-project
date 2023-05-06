import React from 'react';
import { MiniCard } from '.';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/mainSlice';
import styles from '../scss/components/scroller.module.scss';

const Scroller: React.FC<{}> = ({}) => {
  const dispatch: any = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const state = useAppSelector(({ mainReduser }) => ({
    product: mainReduser.product,
  }));

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Trending Now</h2>
      <div className={styles.box}>
        {state.product.map((val: object, id: number) => (
          <div className={styles.component} key={`${val}__${id}`}>
            <MiniCard key={`${val}__${id}`} product={val}></MiniCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
