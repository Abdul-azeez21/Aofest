import React from "react";

//motion
import { motion } from "framer-motion";
//icons
// import { FiFacebook } from "react-icons/fi";

const Agents = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-2 mb-5">
      <motion.section
        class="bg-white"
        initial={{ opacity: 0, translateY: 70 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0, type: "spring" }}
        viewport={{ once: true }}
      >
        <div class="h-[32rem] bg-gray-100">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              The Executive Team
            </h1>

            <div class="flex justify-center mx-auto mt-6">
              <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              The team behind AOFEST PROPERTY ENTERPRISE
            </p>
          </div>
        </div>

        <div class="container px-6 py-3 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl shadow-sm bg-white">
              <img
                class="object-cover w-full rounded-xl aspect-square"
                src={require("../images/TITI WORK D3.jpg")}
                alt=""
              />

              <h1 class="mt-4 lg:text-2xl text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Akinsolu Akinjide Festus
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Chairman (C.E.O)
              </p>

              {/* <div class="flex mt-3 -mx-2">
                <a
                  href="/"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              </div> */}
            </div>

            <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl shadow-sm bg-white">
              <img
                class="object-cover w-full rounded-xl aspect-square"
                src={require("../images/TITI WORK D2.jpg")}
                alt=""
              />

              <h1 class="mt-4 lg:text-2xl text-lg text-center font-semibold text-gray-700 capitalize dark:text-white">
                Akinsolu Kolawole Akinwunmi
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Managing Director (C.O.O)
              </p>

              {/* <div class="flex mt-3 -mx-2">
                <a
                  href="/"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              </div> */}
            </div>

            <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl shadow-sm bg-white">
              <img
                class="object-cover w-full rounded-xl aspect-square"
                src={require("../images/TITI WORK D1.jpg")}
                alt=""
              />

              <h1 class="mt-4 lg:text-2xl text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Atenugbe Samuel
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Manager
              </p>
              {/* 
              <div class="flex mt-3 -mx-2">
                <a
                  href="/"
                  class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Agents;
