import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//icons
import { VscChromeClose } from "react-icons/vsc";

const MobileNav = ({ showMenu, active }) => {
  return (
    <div
      className={
        active
          ? "md:hidden z-20 fixed top-0 right-0 h-screen w-1/2 bg-blue-500/50 backdrop-blur-xl"
          : "hidden"
      }
    >
      <div className="flex justify-end mt-8 mr-4">
        <VscChromeClose onClick={showMenu} className="cursor-pointer h-5 w-5" />
      </div>
      <ul className="h-5/6 flex-col flex items-center gap-5 text-lg justify-center text-white">
        <motion.li
          className=""
          initial={{ opacity: 0, translateX: 5 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: false }}
        >
          <Link to="/" className="hover:no-underline hover:text-white">
            Home
          </Link>
        </motion.li>
        <motion.li
          className=""
          initial={{ opacity: 0, translateX: 5 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Link to="/about" className="hover:no-underline hover:text-white">
            About
          </Link>
        </motion.li>
        <motion.li
          className=""
          initial={{ opacity: 0, translateX: 5 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Link to="/props" className="hover:no-underline hover:text-white">
            Properties
          </Link>
        </motion.li>
        <motion.li
          className=""
          initial={{ opacity: 0, translateX: 5 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <Link to="/contact" className="hover:no-underline hover:text-white">
            Contact
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default MobileNav;
