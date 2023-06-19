import React, { ReactNode } from 'react';
import styles from '../../scss/components/cards/productCard.module.scss';

interface MiniCardType {
  product: ReactNode | any;
  offerType: string;
}

const MiniCard: React.FC<MiniCardType> = ({ product }) => {
  return (
    <div className={styles.root}>
      <div className={styles.containerProduct}>
        <img className={styles.imageProduct} src={product.photos[0]} alt="" />
        <h3 className={styles.name}>{product.name}</h3>
        <div>
          <span className={styles.brandName}>{product.brandName}</span>
          <span className={styles.rating}>
            {product.rating}
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.00065 0L11.8332 5.73833L18.1673 6.66417L13.584 11.1283L14.6657 17.435L9.00065 14.4558L3.33565 17.435L4.41732 11.1283L-0.166016 6.66417L6.16815 5.73833L9.00065 0Z"
                fill="#848484"
              />
            </svg>
          </span>
          <div className={styles.priceBlock}>
            <span className={styles.currentPrice}>{`Rs. ${
              (product.price * product.offers) / 100
            }`}</span>
            <span className={styles.oldPrice}>{`Rs. ${product.price}`}</span>
            <span className={styles.offer}>{`(${product.offers}% off)`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
