import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import PropCard from "../components/Card/PropCard";

//header animation
// import Lottie from "react-lottie";

const Properties = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white  md:h-[20rem] h-[16rem] mt-16 flex items-center justify-center">
        <div className="flex flex-col space-y-2 justify-center items-center max-w-[1280px] mx-auto px-2">
          <h1 className="md:text-7xl text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
            Choose Your Desired
          </h1>
          <p className="md:text-5xl text-center text-3xl font-semibold">
            Property
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-7">
        {/* <div>
          <h1 className="text-center text-gray-700 text-2xl font-medium">
            Available properties
          </h1>
        </div> */}
      </div>
      <PropCard />
      <br />
      <Footer />
    </div>
  );
};

export default Properties;
