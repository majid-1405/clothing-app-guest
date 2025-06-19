import { BiUserCircle } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulasi login
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `text-sm font-gothic ${
      isActive
        ? "text-slate-800 font-semibold"
        : "text-slate-600 hover:underline underline-offset-[4px]"
    }`;

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="flex bg-white py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full px-4 lg:px-8 py-3">
        <NavLink to="/" className="text-lg font-gothic text-slate-800">
          Clothing Store
        </NavLink>

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

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-4 lg:gap-4 mt-4 lg:mt-0 font-gothic`}
        >
          {/* --- Pages --- */}
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
            <NavLink to="/Articlepage" className={menuClass}>
              Article
            </NavLink>
          </li>
          <li>
            <NavLink to="/Careerpage" className={menuClass}>
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reviewpage" className={menuClass}>
              Reviews
            </NavLink>
          </li>

          {/* --- About Dropdown --- */}
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="text-sm font-gothic text-slate-600 py-1 px-2 rounded hover:bg-gray-100"
            >
              About
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-44"
            >
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
                <NavLink to="/Mediapage" className={menuClass}>
                  Media Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/OurTeam" className={menuClass}>
                  Our Team
                </NavLink>
              </li>
            </ul>
          </li>

          {/* --- Service Dropdown --- */}
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={1}
              role="button"
              className="text-sm font-gothic text-slate-600 py-1 px-2 rounded hover:bg-gray-100"
            >
              Service
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-44"
            >
              <li>
                <NavLink to="/FAQ" className={menuClass}>
                  Faqs
                </NavLink>
              </li>
              <li>
                <NavLink to="/PreOrderpage" className={menuClass}>
                  Pre Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/Mediapage" className={menuClass}>
                  Media Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/Careerpage" className={menuClass}>
                  Career
                </NavLink>
              </li>
            </ul>
          </li>

          {/* --- Error Routes --- */}
          <li>
            <NavLink to="/400" className={menuClass}>
              400
            </NavLink>
          </li>
          <li>
            <NavLink to="/401" className={menuClass}>
              401
            </NavLink>
          </li>
          <li>
            <NavLink to="/403" className={menuClass}>
              403
            </NavLink>
          </li>
          <li>
            <NavLink to="/ErrorPage" className={menuClass}>
              404
            </NavLink>
          </li>

          {/* --- Cart Icon --- */}
          <li>
            <NavLink to="/KeranjangPage" className={menuClass}>
              <BsFillCartFill className="size-5" />
            </NavLink>
          </li>

          {/* --- User Dropdown --- */}
          <li className="relative">
            {isLoggedIn ? (
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={2}
                  role="button"
                  className="text-sm font-gothic text-slate-600 py-1 px-2 rounded hover:bg-gray-100 flex items-center gap-1"
                >
                  <BiUserCircle className="size-6" />
                </div>
                <ul
                  tabIndex={2}
                  className="dropdown-content z-[1] right-0 menu p-2 shadow bg-white rounded-box w-44"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-left text-sm font-gothic text-red-500 hover:underline px-2 py-1"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        window.location.href =
                          "https://project-app-likq.vercel.app/"; // ganti dengan URL admin kamu
                      }}
                      className="text-left text-sm font-gothic text-red-500 hover:underline px-2 py-1"
                    >
                      Admin
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login" className={menuClass}>
                <BiUserCircle className="size-6" />
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
