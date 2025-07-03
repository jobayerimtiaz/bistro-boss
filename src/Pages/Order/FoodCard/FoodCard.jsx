import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //send cart item to the database
      console.log(user.email, food);

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added to Cart!",
            text: `${food.name} has been added to your cart.`,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    } else {
      //sweet alert2
      Swal.fire({
        title: "Please log in",
        text: "You need to log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } }); // 🔁 Redirect to login page
        }
      });
    }
  };
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
        <button
          onClick={() => handleAddToCart(item)}
          className=" mx-auto border-0 border-black border-b-4 text-sm font-semibold text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
