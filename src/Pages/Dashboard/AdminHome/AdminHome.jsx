import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import {
  FaDollarSign,
  FaUsers,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";
const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        Hi, welcome <span>{user?.displayName ? user.displayName : "Back"}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Revenue Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <FaDollarSign size={24} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <p className="text-2xl font-bold">{stats.revenue}</p>
          </div>
        </div>

        {/* Users Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <FaUsers size={24} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Users</h3>
            <p className="text-2xl font-bold">{stats.users}</p>
          </div>
        </div>

        {/* Menu Items Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
            <FaUtensils size={24} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Menu Items</h3>
            <p className="text-2xl font-bold">{stats.menuItems}</p>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-full">
            <FaShoppingCart size={24} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Orders</h3>
            <p className="text-2xl font-bold">{stats.orders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
