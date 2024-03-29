import React from "react";
// import { Link } from "react-router-dom";
import "../Card/card.css";
import cardfInfo from "./CardData";
const Card = () => {
  const card = cardfInfo.slice(0, 1);
  return (
    <>
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {card.map((properties) => (
              <div class="group relative" key={properties.id}>
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={properties.image}
                    alt="Aofest Property"
                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
