import React from "react";
import chefServiceImage from "../../../assets/home/chef-service.jpg";
const About = () => {
  return (
    <div
      className="bg-cover bg-center w-3/4  py-20 mx-auto"
      style={{ backgroundImage: `url(${chefServiceImage})` }}
    >
      <div className="w-3/4 mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">BISTRO BOSS</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Welcome to Bistro Boss – where taste meets elegance. Enjoy our gourmet
          selection crafted with passion and served with love. Your perfect meal
          awaits!
        </p>
      </div>
    </div>
  );
};

export default About;
