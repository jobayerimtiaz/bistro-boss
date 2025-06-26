import { Parallax } from "react-parallax";
const Cover = ({ img, headingText, subHeadingText }) => {
  return (
    <Parallax
      bgImage={img}
      strength={0}
      blur={{ min: -15, max: 15 }} // Adjust blur levels
    >
      <div className="w-full md:h-[600px] py-20 flex justify-center items-center">
        <div className="w-3/4 mx-auto bg-[#15151599] shadow-lg p-16 text-center text-white">
          <h2 className="text-2xl md:text-6xl font-bold mb-4">{headingText}</h2>
          <p className="font-semibold text-sm md:text-2xl sm:text-lg">
            {subHeadingText}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
