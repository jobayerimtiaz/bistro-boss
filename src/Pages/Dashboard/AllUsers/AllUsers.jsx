import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="bg-white py-12 ">
      <div className="flex justify-between px-2 md:px-8 py-4">
        <h2 className="text-sm md:text-3xl font-bold">
          Total Users: {users.length}
        </h2>
      </div>
      <div className="md:px-8">
        <table className="table md:p-8">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>

                <td>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">{user.email}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </td>
                <td className="font-bold">
                  {" "}
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-[#F6F6F6] border-none text-xl text-red-600"
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
