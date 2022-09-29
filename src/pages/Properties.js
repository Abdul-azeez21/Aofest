import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import PropCard from "../components/Card/PropCard";

//header animation
import Lottie from "react-lottie";

const Properties = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../house.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white h-[28rem] flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-4">
          <div className="flex justify-center items-center">
            <div className="px-5">
              <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900 md:text-3xl lg:text-5xl">
                Choose Your Desired
              </h1>
              <p className="lg:text-4xl text-xl font-semibold">Property</p>
            </div>
          </div>
          <div className="container">
            <Lottie options={defaultOptions} height={300} width="100%" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-7">
        <div>
          <h1 className="text-center text-gray-700 text-2xl font-medium">
            Available properties
          </h1>
        </div>
      </div>
      <div className="mx-5 flex justify-center items-center">
        <div className="">
          <PropCard />
        </div>
        <div className="my-10"></div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Properties;
