const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-start gap-4 py-4">
      {/* Image holder */}
      <div className="w-32 h-32 overflow-hidden rounded-bl-full rounded-tr-full rounded-br-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Text content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-md font-semibold uppercase tracking-wide">
            {name} <span className="text-gray-400">--------------------</span>
          </h3>
          <span className="text-yellow-700 font-semibold">${price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItems;
