import React from "react";
import { Link } from "react-router-dom";
import "../Card/card.css";
import cardfInfo from "./CardData";
const PropCard = () => {
  const card2 = cardfInfo.slice(0, 7);
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="max-w-2xl mx-auto   lg:max-w-7xl ">
          <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {card2.map((properties) => (
              <div
                class="group relative p-2 bg-blue-400/50 rounded-lg"
                key={properties.id}
              >
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={properties.propertyImage}
                    alt="Aofest Property"
                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div class="mt-3 flex justify-between">
                  <div>
                    <div class="text-sm text-gray-700">
                      <Link to="/contact">
                        <span className="text-xs font-medium text-gray-800 bg-blue-700/50 px-3 py-1 rounded-xl">
                          {properties.property}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="divide-x divide-black/50 divide-dashed my-2">
                  <span class="text-xs text-gray-500 px-1">
                    {properties.detail1}
                  </span>
                  <span class="text-xs text-gray-500 px-1">
                    {properties.detail2}
                  </span>
                  <span class="text-xs text-gray-500 px-1">
                    {properties.detail3}
                  </span>
                  <span class="text-xs text-gray-500 px-1">
                    {properties.detail4}
                  </span>
                  <span class="text-xs text-gray-500 px-1">
                    {properties.detail5}
                  </span>
                </div>
                <div className="flex text-base my-2">
                  <span className="text-sm text-gray-600">Location:</span>
                  <span className="px-1 text-xs text-gray-700 font-medium">
                    {properties.location}
                  </span>
                </div>
                <div className="flex text-base my-2">
                  <span className="text-sm text-gray-600">
                    PRICE (each unit):
                  </span>
                  <span className="px-1 text-sm text-gray-700 font-medium">
                    ₦{properties.price}
                  </span>
                </div>
                <div className="flex text-base my-2">
                  <span className="text-sm text-gray-600">
                    PRICE (all unit):
                  </span>
                  <span className="px-1 text-sm text-gray-700 font-medium">
                    ₦{properties.price2}
                  </span>
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
