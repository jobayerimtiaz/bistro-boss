import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = UseAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    //image upload to
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's New"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="block mb-1 font-semibold">
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("recipeName", {
                required: "Recipe name is required",
              })}
              className="w-full bg-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
            {errors.recipeName && (
              <p className="text-red-500 text-sm">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full bg-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <option value="">Select Category</option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block mb-1 font-semibold">
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              {...register("details", { required: "Details are required" })}
              className="w-full bg-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              rows={4}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <input
              type="file"
              {...register("image", { required: "File is required" })}
              className="w-full bg-gray-600 text-white rounded-sm p-1"
            />

            {errors.file && (
              <p className="text-red-500 text-sm">{errors.file.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-800"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
