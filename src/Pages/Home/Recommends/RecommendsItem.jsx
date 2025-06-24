import React from "react";

const RecommendsItem = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img className="w-full h-56 object-cover" src={image} alt={name} />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{name}</h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-base mb-4">{recipe}</p>

        {/* Button */}
        <button className="border-0 border-black border-b-4 text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default RecommendsItem;
