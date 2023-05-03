import React from 'react';
import SlSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../scss/components/slider.module.scss';
import Button from '../Button';

import { image1, image2 } from '../../img/';

const Slider: React.FC = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div>
      <SlSlider {...settings}>
        <div>
          <div>
            <img src={image1} alt="" className={styles.image} />
            <div className={styles.container}>
              <Button className={styles.button} blank>
                Search
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img src={image2} alt="" className={styles.image} />
          <div>
            <span></span>
          </div>
        </div>
      </SlSlider>
    </div>
  );
};

export default Slider;
