import { Link } from "react-router-dom";
import Cover from "../../../../Shared/Cover/Cover";
import MenuItems from "../../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, subTitle, coverImg }) => {
  return (
    <div>
      {coverImg && (
        <Cover
          img={coverImg}
          headingText={title}
          subHeadingText={subTitle}
        ></Cover>
      )}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mx-auto py-5">
          {items.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        <div className="w-3/4 mx-auto flex justify-center items-center py-5">
          <Link
            to={`/order/${title?.toLowerCase()}`}
            className="border-0 border-black border-b-4 text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            ORDER YOUR FAVORITE FOOD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
