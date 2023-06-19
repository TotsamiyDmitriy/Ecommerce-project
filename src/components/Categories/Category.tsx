import React from 'react';
import styles from '../../scss/components/category.module.scss';

interface CategoryProps {
  image: string;
  title: string;
  settings?: {};
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h3 className={styles.title}>
          {props.title}
          <span>Explore</span>
        </h3>
        <img className={styles.image} src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Category;
