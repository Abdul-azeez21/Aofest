import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

//icon
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 right-0 bg-white drop-shadow-lg px-4 lg:px-10 py-2 md:mx-5 mx-3 my-3">
        <nav className="flex justify-between items-center">
          <div className="">
            <a href="/">
              <img
                src={require("../images/AOFEST BLACK LOGO.png")}
                alt="TORIOLA FARMS"
                className="lg:w-24 md:w-24 xl:w-24 w-16 lg:h-10 md:h-10 xl:h-10 h-8 object-contain"
              />
            </a>
          </div>

          <div>
            <div>
              <CgMenuRight
                onClick={showMenu}
                className="cursor-pointer md:hidden h-5 w-5"
              />
            </div>
            <ul className="hidden md:flex gap-8 text-base font-normal text-black">
              <li className="hover:bg-blue-600/75 hover:text-white px-4 py-1">
                <Link to="/" className="hover:no-underline hover:text-white">
                  Home
                </Link>
              </li>
              <li className="hover:bg-blue-600/75 hover:text-white px-4 py-1">
                <Link
                  to="/about"
                  className="hover:no-underline hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="hover:bg-blue-600/75 hover:text-white px-4 py-1">
                <Link
                  to="/props"
                  className="hover:no-underline hover:text-white"
                >
                  Properties
                </Link>
              </li>
              <li className="hover:bg-blue-700/75 hover:text-white px-4 py-1">
                <Link
                  to="/contact"
                  className="hover:no-underline hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <MobileNav showMenu={showMenu} active={active} />
    </>
  );
};

export default Navbar;
