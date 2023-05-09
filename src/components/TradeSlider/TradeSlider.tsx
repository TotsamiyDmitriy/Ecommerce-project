import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TradeSlide from './TradeSlide';

type TradeSliderProps = {
	settings? : object
}

const TradeSlider:React.FC<TradeSliderProps> = ({settings, }) => {
  return (
    <div>
      <Swiper {...settings}>
        {.map((val: object, id: number) => {
          return (
            <SwiperSlide key={`${val}__${id}`}>
              <TradeSlide key={`${val}__${id}`} {...val}></TradeSlide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TradeSlider;
