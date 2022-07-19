import React from "react";

//icons
import {
  FiShoppingCart,
  FiUsers,
  FiTrendingUp,
  FiChevronsUp,
} from "react-icons/fi";

const Stats = () => {
  return (
    <div>
      <section className="p-6 my-6 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <FiShoppingCart className="h-9 w-9" strokeWidth="1" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">5</p>
              <p className="capitalize">Sales</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <FiUsers className="h-9 w-9" strokeWidth="1" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">10</p>
              <p className="capitalize">New customers</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <FiTrendingUp className="h-9 w-9" strokeWidth="1" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">30%</p>
              <p className="capitalize">Growth</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <FiChevronsUp className="h-9 w-9" strokeWidth="1" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leading-none">10%</p>
              <p className="capitalize">Bounce rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
