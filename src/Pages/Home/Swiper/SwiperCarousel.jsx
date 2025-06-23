import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import menu1 from "../../../assets/menu/dessert-bg.jpeg";
import menu2 from "../../../assets/menu/pizza-bg.jpg";
import menu3 from "../../../assets/menu/salad-bg.jpg";
import menu4 from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const slides = [
  {
    image: menu1,
    title: "Desert",
  },
  {
    image: menu2,
    title: "Pizza",
  },
  {
    image: menu3,
    title: "Salad",
  },
  {
    image: menu4,
    title: "Soup",
  },
];

const SwiperCarousel = () => {
  return (
    <div>
      <section>
        <SectionTitle
          heading={"Order online"}
          subHeading={"---From 11:00am to 10:00pm---"}
        ></SectionTitle>
      </section>
      <div className="w-3/4 mx-auto py-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2000, // 3 seconds
            disableOnInteraction: false, // keep autoplaying after user interaction
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={3} // Default (large screens)
          breakpoints={{
            0: { slidesPerView: 2 }, // Small screens (phones)
            768: { slidesPerView: 3 }, // Medium screens (tablets and up)
            1024: { slidesPerView: 3 }, // Large screens (desktops)
          }}
          className="rounded-lg overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Background image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-60 object-cover"
                />

                {/* Text overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCarousel;
