import React from 'react';
import { MiniCard, MegaCard } from '..';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/mainSlice';
import styles from '../../scss/components/scroller.module.scss';

interface ScrollerType {
  offerType: string;
  title: string;
}

const Scroller: React.FC<ScrollerType> = ({ offerType, title }) => {
  const dispatch: any = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const state = useAppSelector(({ mainReduser }) => ({
    product: mainReduser.product,
  }));

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.box}>
        {state.product.map((val: object, id: number) => (
          <div className={styles.component} key={`${val}__${id}`}>
            {offerType === 'product' ? (
              <MiniCard key={`${val}__${id}`} product={val} offerType={offerType}></MiniCard>
            ) : offerType === 'offer' ? (
              <MegaCard key={`${val}__${id}`} product={val} offerType={offerType}></MegaCard>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
