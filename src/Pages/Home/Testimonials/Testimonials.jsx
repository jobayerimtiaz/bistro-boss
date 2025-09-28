import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa"; // for filled and empty stars
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css"; // core Swiper
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-ashy-iota.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews);

  return (
    <div className="w-3/4 mx-auto py-10">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTitle>
      <div>
        <Swiper
          pagination={{ clickable: true }}
          // navigation={true}

          modules={[Pagination]}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="p-6 pb-12 text-center">
                <div className="flex justify-center mb-4">
                  <Rating
                    readonly
                    initialRating={review.rating}
                    emptySymbol={
                      <FaRegStar className="text-[#CD9003] text-2xl" />
                    }
                    fullSymbol={<FaStar className="text-[#CD9003] text-2xl" />}
                  />
                </div>
                <FaQuoteLeft className="text-7xl text-black mb-4 text-center mx-auto" />
                <p className="text-gray-700 mb-4 font-normal">
                  {review.details}
                </p>
                <h2 className="text-[#CD9003] text-3xl font-medium">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
