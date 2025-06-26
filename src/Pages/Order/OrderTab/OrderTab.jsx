import React from "react";
import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ foods }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
      {foods.map((food) => (
        <FoodCard item={food} key={food._id}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
