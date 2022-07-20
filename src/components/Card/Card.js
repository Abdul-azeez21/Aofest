import React from "react";
import { Link } from "react-router-dom";
import "../Card/card.css";
import cardfInfo from "./CardData";
const Card = () => {
  const card = cardfInfo.slice(0, 1);
  return (
    // <div className="flex">
    //   <div className="cards" key={index}>
    //     <div className="card-container">
    //       <div className="imagecont">
    //         <img
    //           src={card.image}
    //           alt=""
    //           style={{ height: "250px", width: "320px" }}
    //         />
    //       </div>
    //       <div className="textcont">
    //         <div className="Headercont">{card.title}</div>
    //         <div className="bodycont">{card.about} Hostel</div>
    //         <div className="pricecont">{card.semititle}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* <div class="flex flex-row items-center justify-spacebetween max-w-sm mx-auto">
        {cardfInfo.map((properties) => (
          <>
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <img src={properties.image} alt="" />
            </div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {properties.title}
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  $129
                </span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div> */}
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
                {/* <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-700">
                      <Link to={`/each?id=${properties.id}`}>
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {properties.title}
                      </Link>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      {properties.semititle}
                    </p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">
                    {" "}
                    {properties.text1}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
