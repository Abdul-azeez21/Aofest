import React from "react";
import "../Card/card.css";
import cardfInfo from "./CardData";
import { motion } from "framer-motion";
//icons
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const PropCard = () => {
  const card2 = cardfInfo.slice(0, 7);
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="max-w-[1280px] mx-auto px-2">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8">
            {card2.map((properties) => (
              // <div
              //   class="group relative p-2 bg-blue-400/50 rounded-lg"
              //   key={properties.id}
              // >
              //   <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              //     <img
              //       src={properties.propertyImage}
              //       alt="Aofest Property"
              //       class="w-full h-full object-center object-cover lg:w-full lg:h-full"
              //     />
              //   </div>
              //   <div class="mt-3 flex justify-between">
              //     <div>
              //       <div class="text-sm text-gray-700">
              //         <Link to="/contact">
              //           <span className="text-xs font-medium text-gray-800 bg-blue-700/50 px-3 py-1 rounded-xl">
              //             {properties.property}
              //           </span>
              //         </Link>
              //       </div>
              //     </div>
              //   </div>
              //   <div className="divide-x divide-black/50 divide-dashed my-2">
              //     <span class="text-xs text-gray-500 px-1">
              //       {properties.detail1}
              //     </span>
              //     <span class="text-xs text-gray-500 px-1">
              //       {properties.detail2}
              //     </span>
              //     <span class="text-xs text-gray-500 px-1">
              //       {properties.detail3}
              //     </span>
              //     <span class="text-xs text-gray-500 px-1">
              //       {properties.detail4}
              //     </span>
              //     <span class="text-xs text-gray-500 px-1">
              //       {properties.detail5}
              //     </span>
              //   </div>
              //   <div className="flex text-base my-2">
              //     <span className="text-sm text-gray-600">Location:</span>
              //     <span className="px-1 text-xs text-gray-700 font-medium">
              //       {properties.location}
              //     </span>
              //   </div>
              //   <div className="flex text-base my-2">
              //     <span className="text-sm text-gray-600">
              //       PRICE (each unit):
              //     </span>
              //     <span className="px-1 text-sm text-gray-700 font-medium">
              //       ₦{properties.price}
              //     </span>
              //   </div>
              //   <div className="flex text-base my-2">
              //     <span className="text-sm text-gray-600">
              //       PRICE (all unit):
              //     </span>
              //     <span className="px-1 text-sm text-gray-700 font-medium">
              //       ₦{properties.price2}
              //     </span>
              //   </div>
              // </div>
              <div
                className="flex justify-center items-center"
                key={properties.id}
              >
                <div className="flex flex-col">
                  <img
                    src={properties.propertyImage}
                    alt="Aofest Property"
                    className="rounded-xl"
                  />
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
                        {properties.detail2}
                      </span>
                      <div className="text-start font-semibold text-base flex items-center justify-end">
                        <span>₦</span>
                        <span>{properties.price}</span>
                      </div>
                    </div>
                    {/* .. */}
                    <div className="flex items-center justify-start space-x-2 w-full">
                      <MdLocationOn className="h-4 w-4" />
                      <span className="text-start font-medium text-sm">
                        {properties.location}
                      </span>
                    </div>
                    {/* .. */}
                    <div className="flex items-center justify-start space-x-3 w-full">
                      <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                        <FaBed className="h-4 w-4" />
                        <span className="text-start font-medium text-sm">
                          {properties.bed}
                        </span>
                      </div>
                      <div className="flex items-center justify-start space-x-2 text-start font-medium text-base">
                        <FaBath className="h-4 w-4" />
                        <span className="text-start font-medium text-sm">
                          {properties.bath}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropCard;
