import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mx-auto py-5">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="w-3/4 mx-auto flex justify-center items-center py-5">
        <button className="border-0 border-black border-b-4 text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
