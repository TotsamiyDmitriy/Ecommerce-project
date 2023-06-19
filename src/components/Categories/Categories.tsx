import React from 'react';
import Category from './Category';
import styles from '../../scss/components/categories.module.scss';

interface CatProps {
  title?: string | undefined;
}

const pp = [
  {
    image: 'https://i.ibb.co/zZkddTD/1.png',
    title: 'Womens Pants',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/SrdZVh9/1left.png',
    title: 'Mens Jacket',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/dfqhqYG/Zhenskaya-moda-vesna-leto-2.jpg',
    title: 'Womens Tops',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/c1LpbR1/5933-970.jpg',
    title: 'Sweater',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/HBbNqXc/183634d4a189fc5e31b6e552865c3b2f.jpg',
    title: 'Pants',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/0GWCp7k/ffa16c9da021e7e229613eaccd3b55de.jpg',
    title: 'Mans Jackets',
    settings: {},
  },
];

const Categories: React.FC<CatProps> = (props) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.container}>
        <div className={styles.section}>
          <Category {...pp[0]} />
        </div>
        <div className={styles.section}>
          <div className={styles.subsection}>
            <Category {...pp[1]} />
          </div>
          <div className={styles.subsection}>
            <Category {...pp[2]} />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.subsection}>
            <Category {...pp[3]} />
          </div>
          <div className={styles.subsection}>
            <div className={styles.subsubsection}>
              <Category {...pp[4]} />
            </div>
            <div className={styles.subsubsection}>
              <Category {...pp[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
