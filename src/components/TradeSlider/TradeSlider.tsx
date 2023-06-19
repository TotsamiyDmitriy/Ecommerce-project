import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import TradeSlide from './TradeSlide';
import styles from '../../scss/components/tradeSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
const settings: object = {
  modules: [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow],
  slidesPerView: 3,
  navigation: true,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
  centeredSlides: true,
  loop: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  effect: 'coverflow',
};

type ppType = {
  title: string;
  image: string;
  button: string;
};

const pp: Array<ppType> = [
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/8bHR360/14da57684b01bb173550f78c1bfa0d82.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/znZp95M/5a65929a53732fe755a5ca4a69beaed0.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/xj34Vwj/36103bdefadaaaade1a47c0d611d460f.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/8bHR360/14da57684b01bb173550f78c1bfa0d82.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/xj34Vwj/36103bdefadaaaade1a47c0d611d460f.jpg',
    button: 'Explore',
  },
  {
    title: 'Min 60% off',
    image: 'https://i.ibb.co/znZp95M/5a65929a53732fe755a5ca4a69beaed0.jpg',
    button: 'Explore',
  },
];

const TradeSlider: React.FC<any> = ({ title }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper {...settings}>
        {pp.map((val: ppType, id: number) => {
          return (
            <SwiperSlide key={`${val}__${id}`}>
              <TradeSlide key={`${val}__${id}`} {...val} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TradeSlider;
