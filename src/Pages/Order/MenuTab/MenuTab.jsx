import React, { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MenuTab = () => {
  const [menu] = UseMenu();

  //   const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  //   const offered = menu.filter((item) => item.category === "offered");

  const tabs = ["SALAD", "PIZZA", "SOUPS", "DESERTS", "DRINKS"];
  const categoryMap = {
    salad: "SALAD",
    pizza: "PIZZA",
    soup: "SOUPS",
    dessert: "DESERTS",
    drinks: "DRINKS",
  };

  const { category } = useParams();
  const navigate = useNavigate();
  const defaultTab = categoryMap[category] || "SALAD";
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <div className="w-full my-14 mx-auto">
      {/* Tab Header */}
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <div className="md:w-2/4 w-11/12 mx-auto flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              navigate(`/order/${tab}`);
            }}
            className={`flex-1 py-2 text-center text-sm md:text-lg md:font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "border-b-2 border-yellow-500 text-yellow-600"
                : "text-gray-500 hover:text-yellow-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-3/4 mx-auto p-4 rounded-b-md">
        {activeTab === "SALAD" && <OrderTab foods={salad}></OrderTab>}
        {activeTab === "PIZZA" && <OrderTab foods={pizza}></OrderTab>}
        {activeTab === "SOUPS" && <OrderTab foods={soup}></OrderTab>}
        {activeTab === "DESERTS" && <OrderTab foods={dessert}></OrderTab>}
        {activeTab === "DRINKS" && <OrderTab foods={drinks}></OrderTab>}
      </div>
    </div>
  );
};

export default MenuTab;
