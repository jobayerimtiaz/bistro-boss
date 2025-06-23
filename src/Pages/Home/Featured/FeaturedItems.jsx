import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
const FeaturedItems = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      className="bg-cover bg-center w-full bg-fixed"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      <div className=" bg-black/50">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
          color="white"
        ></SectionTitle>
        <div className="w-3/4 mx-auto flex flex-col md:flex-row gap-16 justify-between items-center pb-14">
          <div className="md:w-[600px] md:h-[350px] flex-1">
            <img src={featuredImage} alt="Featured Item" />
          </div>

          <div className="font-semibold text-white flex-1 space-y-4">
            <h3 className="text-xl">{today}</h3>
            <h2 className="text-2xl">Where Can I Get Some</h2>
            <p className="text-lg">
              Taste the passion in every bite of our chef’s handpicked
              creation—crafted with the freshest ingredients and bursting with
              bold, unforgettable flavors.
            </p>
            <button className="border-0 border-white border-b-4 text-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
