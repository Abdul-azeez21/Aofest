import React from "react";

//motion
import { motion } from "framer-motion";

//icons
import { FiTruck, FiHome, FiUser, FiBriefcase } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-white max-w-[1280px] mx-auto px-2 mt-5">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">
        What is{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
          AOFEST
        </span>{" "}
        all about?
      </h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
        <motion.div
          className="p-8 space-y-3 bg-blue-400/20 rounded-xl"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0, type: "spring" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-500">
            <FiHome className="h-6 w-6" strokeWidth="2" />
          </span>
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Real Estate & Property Management
          </h1>
        </motion.div>
        <motion.div
          className="p-8 space-y-3 bg-blue-400/20 rounded-xl"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0, type: "spring" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-500 dark:text-blue-400">
            <FaRegHandshake className="h-6 w-6" strokeWidth="2" />
          </span>
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Sales & Purchase of Landed Property
          </h1>
        </motion.div>
        <motion.div
          className="p-8 space-y-3 bg-blue-400/20 rounded-xl"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0, type: "spring" }}
          viewport={{ once: true }}
        >
          <span class="inline-block text-blue-500 dark:text-blue-400">
            <FiBriefcase className="h-6 w-6" strokeWidth="2" />
          </span>
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Development Services
          </h1>
        </motion.div>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6 xl:gap-6">
        <motion.div
          className="p-8 space-y-3 bg-blue-400/20 rounded-xl"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0, type: "spring" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-500 dark:text-blue-400">
            <FiTruck className="h-6 w-6" strokeWidth="2" />
          </span>
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Plant Hiring
          </h1>
        </motion.div>
        <motion.div
          className="p-8 space-y-3 bg-blue-400/20 rounded-xl"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.span className="inline-block text-blue-500 dark:text-blue-400">
            <FiUser className="h-6 w-6" strokeWidth="2" />
          </motion.span>
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            General Contractor
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
