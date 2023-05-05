import React from 'react';
import styles from '../scss/components/minicard.module.scss';

const MiniCard = () => {
  return (
    <div>
      <img className={styles.imageProduct} src="" alt="" />
      <h3>Womens Denim Jacket</h3>
      <div>
        <span>Brand Name</span>
        <span>
          4.4
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
        <div className="priceBlock">
          <span>Rs. 700</span>
          <span>Rs. 1000</span>
          <span>(30% off)</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
