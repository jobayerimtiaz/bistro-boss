import React from "react";

const SectionTitle = ({ heading, subHeading, color = "black" }) => {
  return (
    <div className="w-3/4 md:w-2/5 text-center mx-auto py-8">
      <p className="text-[#D99904] font-normal text-sm md:text-xl">
        {subHeading}
      </p>
      <h3
        className={`uppercase font-normal text-black text-lg md:text-4xl border-y-2 border-[#E8E8E8] pb-2 mt-2 
        ${color === "white" ? "text-white" : "text-black"}`}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
