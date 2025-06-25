import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuBanner from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBanner}
        headingText={"OUR MENU"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>
      <PopularMenu></PopularMenu>
      <Cover
        img={menuBanner}
        headingText={"OUR MENU"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={menuBanner}
        headingText={"OUR MENU"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={menuBanner}
        headingText={"OUR MENU"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={menuBanner}
        headingText={"OUR MENU"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
