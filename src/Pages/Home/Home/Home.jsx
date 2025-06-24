import React from "react";
import Banner from "../Banner/Banner";
import SwiperCarousel from "../Swiper/SwiperCarousel";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedItems from "../Featured/FeaturedItems";
import Testimonials from "../Testimonials/Testimonials";
import Recommends from "../Recommends/Recommends";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SwiperCarousel></SwiperCarousel>
      <About></About>
      <PopularMenu></PopularMenu>
      <Recommends></Recommends>
      <FeaturedItems></FeaturedItems>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
