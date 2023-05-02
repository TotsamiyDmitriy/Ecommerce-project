import React from 'react';
import styles from '../../scss/components/header.module.scss';
import { Search, Profile } from './';

const categories: Array<String> = ['Men', 'Women', 'Kids', 'Shop'];

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.compose}>
          <svg
            width="57"
            height="48"
            viewBox="0 0 57 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.5503 37.831L56.9942 48L57 22.6542L38.5503 12.0146V37.831ZM18.8805 0L39.0257 9.2483L20.0776 22.6534L20.071 48L0 38.6318V13.507L18.8805 0Z"
              fill="#002482"
            />
          </svg>
          <ul className={styles.categories}>
            {categories.map((el: String, id: Number): React.ReactNode => {
              return (
                <li className={styles.link} key={`${el}__${id}`}>
                  {el}
                </li>
              );
            })}
            <li className={styles.link}>Contact us</li>
          </ul>
        </div>
        <div className={styles.compose}>
          <Search></Search>
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
};

export default Header;
