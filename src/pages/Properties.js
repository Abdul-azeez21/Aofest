import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../layout/Footer/Footer";
import PropCard from "../components/Card/PropCard";

const Properties = () => {
  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Choose Your Desired Property{" "}
            </h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
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
