import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//icons
import { VscChromeClose } from "react-icons/vsc";

const MobileNav = ({ showMenu, active }) => {
  const variants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      animate={active ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      variants={variants}
      className="md:hidden z-20 fixed top-0 right-0 h-screen w-3/5 bg-white/50 backdrop-blur-xl"
    >
      <motion.div
        className="flex justify-end mt-8 mr-4"
        transition={{ duration: 0.5 }}
        variants={variants}
        animate={showMenu ? "open" : "closed"}
      >
        <VscChromeClose onClick={showMenu} className="cursor-pointer h-5 w-5" />
      </motion.div>
      <ul className="h-5/6 flex-col flex items-start gap-5 text-2xl justify-center text-black ml-20">
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
    </motion.div>
  );
};

export default MobileNav;
