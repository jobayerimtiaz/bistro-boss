import { FaTrash } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // 🔥 Perform the delete operation here
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="bg-white py-12 ">
      <div className="flex justify-between px-2 md:px-8 py-4">
        <h2 className="text-sm md:text-3xl font-bold">Items: {cart.length}</h2>
        <h2 className="text-sm md:text-3xl font-bold">
          Total Price: {totalPrice}
        </h2>
        <button className="btn bg-[#D1A054] text-white">Pay</button>
      </div>
      <div className="md:px-8">
        <table className="table md:p-8">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>
                <td className="font-bold">${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
