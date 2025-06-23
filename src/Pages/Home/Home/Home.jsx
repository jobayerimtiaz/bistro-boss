import React from "react";
import Banner from "../Banner/Banner";
import SwiperCarousel from "../Swiper/SwiperCarousel";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedItems from "../Featured/FeaturedItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SwiperCarousel></SwiperCarousel>
      <PopularMenu></PopularMenu>
      <FeaturedItems></FeaturedItems>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
