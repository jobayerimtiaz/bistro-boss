import orderBanner from "../../../assets/shop/order.jpg";
import Cover from "../../../Shared/Cover/Cover";
import MenuTab from "../MenuTab/MenuTab";

const Order = () => {
  return (
    <div>
      <Cover
        img={orderBanner}
        headingText={"OUR SHOP"}
        subHeadingText={"Would you like to try a dish?"}
      ></Cover>
      <MenuTab></MenuTab>
    </div>
  );
};

export default Order;
