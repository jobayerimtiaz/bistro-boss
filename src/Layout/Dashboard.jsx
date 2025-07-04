import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUtensils,
  FaCreditCard,
  FaShoppingCart,
  FaStar,
  FaCalendarCheck,
  FaBars,
  FaAddressBook,
} from "react-icons/fa";
import UseCart from "../Hooks/UseCart";
import { useState } from "react";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = UseCart();
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Top navbar with toggle on mobile */}
      <div className="md:hidden bg-[#D1A054] p-4 flex justify-between items-center">
        <h2 className="text-white font-bold">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>
      <div>
        <div
          className={`bg-[#D1A054] w-64 min-h-full p-4 space-y-2 text-sm md:text-lg font-medium
    fixed md:static z-20 top-0 left-0 h-full transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <ul className="menu text-sm md:text-lg space-y-2 font-medium p-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/userHome"
              >
                <FaHome></FaHome>User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/reservation"
              >
                <FaUtensils></FaUtensils> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/payment"
              >
                <FaCreditCard></FaCreditCard> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/cart"
              >
                <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/review"
              >
                <FaStar></FaStar>Add Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/dashboard/booking"
              >
                <FaCalendarCheck></FaCalendarCheck> My Booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/"
              >
                <FaHome></FaHome>Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/order/salad"
              >
                <FaShoppingCart></FaShoppingCart>Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-black"
                }
                to="/order/salad"
              >
                <FaAddressBook></FaAddressBook>Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-8 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
