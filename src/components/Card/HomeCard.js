import React from "react";
import { motion } from "framer-motion";

//icons
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

//motion
// import { motion } from "framer-motion";
const HomeCard = () => {
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-2 my-5">
      <h2 className="text-xl font-semibold justify-start w-full mb-3">
        PROPERTIES
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-3">
        {/* .. */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <img src="/prop1.jpg" alt="img" className="rounded-xl" />
            {/* ... */}
            <motion.div
              className="bg-white p-3 space-y-4 drop-shadow-2xl rounded-xl relative bottom-10 flex flex-col items-center justify-center w-full max-w-[400px] mx-auto"
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* .. */}
              <div className="flex items-center justify-between w-full">
                <span className="text-start font-semibold text-base">
                  5 units Detached Duplex
                </span>
                <div className="text-start font-semibold text-base flex items-center justify-end">
                  <span>₦</span>
                  <span>100M</span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-2 w-full">
                <MdLocationOn className="h-4 w-4" />
                <span className="text-start font-medium text-sm">
                  Isheri, Magodo, Lagos
                </span>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-3 w-full">
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBed className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    4 Bedrooms
                  </span>
                </div>
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBath className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    5 Bathrooms
                  </span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-center w-full">
                <a href="tel:08029559491" className="w-full">
                  <button className="px-3 py-1 bg-blue-400/20 hover:bg-blue-400 focus:outline-none focus:border-none hover:text-white hover:scale-95 transition-transform text-center text-sm text-black font-semibold rounded-md shadow-sm w-full">
                    Call to make Enquires
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* .. */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <img src="/prop4.jpg" alt="img" className="rounded-xl" />
            {/* ... */}
            <motion.div
              className="bg-white p-3 space-y-4 drop-shadow-2xl rounded-xl relative bottom-10 flex flex-col items-center justify-center w-full max-w-[400px] mx-auto"
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* .. */}
              <div className="flex items-center justify-between w-full">
                <span className="text-start font-semibold text-base">
                  2 units Detached Duplex
                </span>
                <div className="text-start font-semibold text-base flex items-center justify-end">
                  <span>₦</span>
                  <span>100M</span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-2 w-full">
                <MdLocationOn className="h-4 w-4" />
                <span className="text-start font-medium text-sm">
                  Morgan Estate, Lagos
                </span>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-3 w-full">
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBed className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    5 Bedrooms
                  </span>
                </div>
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBath className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    5 Bathrooms
                  </span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-center w-full">
                <a href="tel:08029559491" className="w-full">
                  <button className="px-3 py-1 bg-blue-400/20 hover:bg-blue-400 focus:outline-none focus:border-none hover:text-white hover:scale-95 transition-transform text-center text-sm text-black font-semibold rounded-md shadow-sm w-full">
                    Call to make Enquires
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* .. */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <img src="/prop3.jpg" alt="img" className="rounded-xl " />
            {/* ... */}
            <motion.div
              className="bg-white p-3 space-y-4 drop-shadow-2xl rounded-xl relative bottom-10 flex flex-col items-center justify-center w-full max-w-[400px] mx-auto"
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* .. */}
              <div className="flex items-center justify-between w-full">
                <span className="text-start font-semibold text-base">
                  1 unit Detached Duplex
                </span>
                <div className="text-start font-semibold text-base flex items-center justify-end">
                  <span>₦</span>
                  <span>75M</span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-2 w-full">
                <MdLocationOn className="h-4 w-4" />
                <span className="text-start font-medium text-sm">
                  John Olarele zone, Magodo phase 1, Lagos
                </span>
              </div>
              {/* .. */}
              <div className="flex items-center justify-start space-x-3 w-full">
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBed className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    4 Bedrooms
                  </span>
                </div>
                <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                  <FaBath className="h-4 w-4" />
                  <span className="text-start font-medium text-sm">
                    4 Bathrooms
                  </span>
                </div>
              </div>
              {/* .. */}
              <div className="flex items-center justify-center w-full">
                <a href="tel:08029559491" className="w-full">
                  <button className="px-3 py-1 bg-blue-400/20 hover:bg-blue-400 focus:outline-none focus:border-none hover:text-white hover:scale-95 transition-transform text-center text-sm text-black font-semibold rounded-md shadow-sm w-full">
                    Call to make Enquires
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <a href="/props" className="w-full">
          <button className="text-center focus:outline-none outline-none border border-blue-400 hover:bg-blue-400 hover:text-white text-black hover:scale-95 transition-transform px-4 py-2 w-full rounded-md">
            <span className="lg:text-xl font-normal text-base">View More</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
