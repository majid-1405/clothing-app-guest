import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClass = ({ isActive }) =>
    `text-sm font-gothic ${
      isActive
        ? "text-slate-800 font-semibold"
        : "text-slate-600 hover:underline underline-offset-[4px]"
    }`;

  return (
    <nav className="flex bg-white py-4 fixed top-0 left-0 right-0 z-50 ">
      <div className="flex items-center justify-between w-full px-4 lg:px-8 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-gothic text-slate-800">
          Clothing Store
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-4 lg:gap-6 mt-4 lg:mt-0  font-gothic`}
        >
          <li>
            <NavLink to="/" className={menuClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ProductList" className={menuClass}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQ" className={menuClass}>
              Faqs
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus" className={menuClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contactus" className={menuClass}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/OurTeam" className={menuClass}>
              OurTeam
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reviewpage" className={menuClass}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/400" className={menuClass}>
              {/* <BiErrorCircle className="mr-4 text-xl" />    */}
              400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-6" to="/401" className={menuClass}>
              {/* <BiErrorCircle className="mr-4 text-xl" />      */}
              401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/403" className={menuClass}>
              {/* <BiErrorCircle className="mr-4 text-xl" />     */}
              403
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/ErrorPage" className={menuClass}>
              {/* <BiErrorCircle className="mr-4 text-xl" /> */}
              404
            </NavLink>
          </li>
          <li className="flex items-center gap-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <NavLink to="/profile" className="text-sm font-gothic">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
