import React from "react";

//motion
import { motion } from "framer-motion";

//icons
import { FiTruck, FiHome, FiUser, FiBriefcase } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <motion.h1
            className="text-xl font-semibold text-gray-800 lg:text-xl dark:text-white"
            initial={{ opacity: 0, translateY: 70 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
              AOFEST
            </span>{" "}
            all about?
          </motion.h1>

          <motion.div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-5">
            <motion.div
              className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <FiHome className="h-6 w-6" strokeWidth="2" />
              </span>
              <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Real Estate & Property Management
              </h1>
            </motion.div>
            <motion.div
              className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
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
              className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <FiBriefcase className="h-6 w-6" strokeWidth="2" />
              </span>
              <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Development Services
              </h1>
            </motion.div>
            <motion.div
              className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
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
              className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
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
        </div>
      </section>
    </div>
  );
};

export default Services;
