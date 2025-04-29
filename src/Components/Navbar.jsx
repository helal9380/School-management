/** @format */
import { NavLink } from "react-router-dom";
import "./slider/slide.css";

const Navbar = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICE", path: "/service" },
    { name: "TEACHERS", path: "/teachers" },
    { name: "LOGIN", path: "/login" },
    { name: "STUDENTS", path: "/students" },
  ];

  const links = navItems.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `px-3 py-2 transition-colors duration-300 ${
            isActive ? "text-[#00bbf0]" : "text-white hover:text-[#00bbf0]"
          }`
        }>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="fixed navbar2 top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navbar Start */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-white tracking-wide">
              Misbahul Uloom
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex">
            <div className="lg:hidden w-full">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#00bbf0] rounded-box w-52 z-50">
                  {links}
                </ul>
              </div>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-4 items-center">{links}</ul>
            </div>

            {/* Navbar End */}
            <li className="list-none">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `px-3 py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-[#00bbf0]"
                      : "text-white hover:text-[#00bbf0]"
                  }`
                }>
                LOGIN
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
