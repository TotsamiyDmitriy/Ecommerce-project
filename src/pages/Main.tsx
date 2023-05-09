import React from 'react';
import { Header, Slider, Scroller } from '../components';

function Main() {
  return (
    <div className="Main">
      <Header></Header>
      <Slider></Slider>
      <Scroller offerType={'product'} title="Trending Now"></Scroller>
      <Scroller offerType={'offer'} title="Deals of the Day"></Scroller>
    </div>
  );
}

export default Main;
