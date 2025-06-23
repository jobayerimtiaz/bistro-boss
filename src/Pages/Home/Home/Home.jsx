import React from "react";
import Banner from "../Banner/Banner";
import SwiperCarousel from "../Swiper/SwiperCarousel";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedItems from "../Featured/FeaturedItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SwiperCarousel></SwiperCarousel>
      <PopularMenu></PopularMenu>
      <FeaturedItems></FeaturedItems>
    </div>
  );
};

export default Home;
