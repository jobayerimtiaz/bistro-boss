import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full fixed  z-50 bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span>Bistro Boss</span>
          <div className="text-xl font-bold -mt-1">Restaurant</div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`md:flex items-center gap-6 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 w-full md:w-auto ${
            isOpen ? "bg-black text-white" : ""
          } md:bg-transparent md:text-white font-bold text-center md:text-left`}
        >
          <ul className="md:flex items-center gap-6 py-4 md:py-0">
            <li>
              <NavLink to="/" className="hover:text-yellow-400">
                Home
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Dashboard
              </a>
            </li>
            <li>
              <NavLink to="/menu" className="hover:text-yellow-400">
                Our Menu
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Our Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 flex items-center justify-center gap-1"
              >
                <FaShoppingCart />
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
