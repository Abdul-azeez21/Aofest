import React, { useEffect } from "react";
import logo from "../components/images/AOFEST BLACK LOGO.png";

//motion
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div className="container">
      <motion.div
        className="w-screen h-screen container flex justify-center items-center"
        initial={{ opacity: 0, translateZ: -60 }}
        whileInView={{ opacity: 1, translateZ: 0 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <motion.img src={logo} alt="logo" height="50%" width="50%" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
