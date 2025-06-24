import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import recipe1 from "../../../assets/home/slide1.jpg";
import recipe2 from "../../../assets/home/slide2.jpg";
import recipe3 from "../../../assets/home/slide3.jpg";
import RecommendsItem from "./RecommendsItem";
const Recommends = () => {
  const chefsChoice = [
    {
      image: recipe1,
      name: "Quattro Formaggi",
      recipe:
        "Tomato sauce, Mozzarella cheese, Gorgonzola cheese, Parmesan cheese",
    },
    {
      image: recipe2,
      name: "Crème Brûlée",
      recipe: "Heavy cream, vanilla extract, Egg yolks, Granulated sugar",
    },
    {
      image: recipe3,
      name: "Caesar Salad",
      recipe: "Romaine lettuce,Croutons,Parmesan cheese,Egg yolk,Dijon mustard",
    },
  ];

  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-8 py-8">
        {chefsChoice.map((item, index) => (
          <RecommendsItem key={index} item={item}></RecommendsItem>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
