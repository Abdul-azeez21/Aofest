import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
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
      <div class="container">
        <h3 class="text-3xl font-semibold text-dark text-center border-b-2 py-3 border-blue-400">
          First Property
        </h3>
        <br />
        <div class="font-semibold text-dark text-lg">
          <h6>
            Property Detail: 2 Units of Newly built 5-Bedroom Detached Duplex
            with BQ
          </h6>{" "}
          <br />
          <h6>Location: Morgan Estate</h6>
          <br />
          <h6>Land Size: 300 sqm</h6>
          <br />
          <h6>Title: Survey and Receipt Deed of Assignment</h6>
          <br />
          <h6>Price: 100m Naira (Negotiable)</h6>
        </div>
        <PropCard />
      </div>
      <br />
      <div class="container">
        <h3 class="text-3xl font-semibold text-dark text-center border-b-2 py-3 border-blue-400">
          Second Property
        </h3>
        <br />
        <div class="font-semibold text-dark text-lg">
          <h6>Property Detail: 5 Units of 4-Bedroom Detached Duplex with BQ</h6>{" "}
          <br />
          <h6>Location: Isheri, Magodo, Lagos</h6>
          <br />
          <h6>Land Size: 2500 sqm</h6>
          <br />
          <h6>Title: Certificate Of Ownership</h6>
          <br />
          <h6>Price: 100m Naira each (450m for all)</h6>
        </div>
        <PropCard />
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Properties;
