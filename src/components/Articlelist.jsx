import { BiUserCircle } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulasi login
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `text-sm font-integral py-1 px-2 rounded ${
      isActive
        ? "text-slate-800 font-semibold bg-gray-100"
        : "text-slate-600 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="flex bg-white py-0.5 fixed top-0 left-0 right-0 z-50 shadow">
      <div className="flex items-center justify-between w-full px-4 lg:px-8 py-3 font-integral">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2">
           <img src="/img/logo.png" alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* TOGGLE BUTTON (Mobile) */}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* MENU */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-4 lg:gap-4 mt-4 lg:mt-0 font-integral`}
        >
          <li><NavLink to="/" className={menuClass}>HOME</NavLink></li>
          <li><NavLink to="/ProductList" className={menuClass}>PRODUCT</NavLink></li>
          <li><NavLink to="/Articlepage" className={menuClass}>ARTICLE</NavLink></li>
          <li><NavLink to="/Careerpage" className={menuClass}>CAREER</NavLink></li>
          <li><NavLink to="/Reviewpage" className={menuClass}>REVIEWS</NavLink></li>

          {/* About Dropdown */}
          <li className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-sm text-slate-600 py-1 px-2 rounded hover:bg-gray-100 font-integral">
              About
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-44 font-integral">
              <li><NavLink to="/Aboutus" className={menuClass}>About Us</NavLink></li>
              <li><NavLink to="/Contactus" className={menuClass}>Contact Us</NavLink></li>
              <li><NavLink to="/Mediapage" className={menuClass}>Media Us</NavLink></li>
              <li><NavLink to="/OurTeam" className={menuClass}>Our Team</NavLink></li>
            </ul>
          </li>

          {/* Service Dropdown */}
          <li className="dropdown dropdown-hover">
            <div tabIndex={1} role="button" className="text-sm text-slate-600 py-1 px-2 rounded hover:bg-gray-100 font-integral">
              Service
            </div>
            <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-44">
              <li><NavLink to="/FAQ" className={menuClass}>Faqs</NavLink></li>
              <li><NavLink to="/PreOrderpage" className={menuClass}>Pre Order</NavLink></li>
              <li><NavLink to="/Mediapage" className={menuClass}>Media Us</NavLink></li>
              <li><NavLink to="/Careerpage" className={menuClass}>Career</NavLink></li>
            </ul>
          </li>

          {/* Cart Icon */}
          <li>
            <NavLink to="/KeranjangPage" className={menuClass}>
              <BsFillCartFill className="size-5" />
            </NavLink>
          </li>

          {/* User Login/Dropdown */}
          <li className="relative">
            {isLoggedIn ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={2} role="button" className="text-sm font-gothic text-slate-600 py-1 px-2 rounded hover:bg-gray-100 flex items-center gap-1">
                  <BiUserCircle className="size-6" />
                </div>
                <ul tabIndex={2} className="dropdown-content z-[1] right-0 menu p-2 shadow bg-white rounded-box w-44">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-left text-sm font-gothic text-red-500 hover:underline px-2 py-1"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = "https://project-app-likq.vercel.app/"; // Ganti URL admin jika perlu
                      }}
                      className="text-left text-sm font-gothic text-blue-600 hover:underline px-2 py-1"
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
