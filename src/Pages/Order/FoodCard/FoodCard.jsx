import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white relative flex flex-col">
      {/* Image */}
      <img className="w-full h-56 object-cover " src={image} alt={name} />
      <p className="bg-[#111827] text-white w-16 text-center p-1 absolute top-2 right-2">
        $ {price}
      </p>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{name}</h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-base mb-4 flex-1">{recipe}</p>

        {/* Button */}
        <button className=" mx-auto border-0 border-black border-b-4 text-sm font-semibold text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
