import { FaSyncAlt, FaTrash, FaUser } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, refetch } = UseMenu();
  const axiosSecure = UseAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading="Manage All Items"
          subHeading="Hurry Up"
        ></SectionTitle>
      </div>
      <div className="md:px-8">
        <table className="table md:p-8">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>

                <td>
                  <div>
                    <img className="w-8 h-8 rounded-sm" src={item.image}></img>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">$ {item.price}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>
                <td className="font-bold">
                  {" "}
                  {item.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Link
                      to={`/dashboard/updateItem/${item._id}`}
                      //   onClick={() => handleUpdateItem(item)}
                      className="btn bg-[#F6F6F6] border-none text-xl text-red-600"
                    >
                      <FaSyncAlt></FaSyncAlt>
                    </Link>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-[#F6F6F6] border-none text-xl text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
