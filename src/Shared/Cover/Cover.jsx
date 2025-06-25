const Cover = ({ img, headingText, subHeadingText }) => {
  return (
    <div
      className="bg-cover bg-center w-full md:h-[600px]  py-20 mx-auto flex justify-center items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-3/4 mx-auto bg-[#15151599] shadow-lg  p-16 text-center text-white">
        <h2 className="text-6xl font-bold mb-4">{headingText}</h2>
        <p className="font-semibold text-2xl sm:text-lg">{subHeadingText}</p>
      </div>
    </div>
  );
};

export default Cover;
