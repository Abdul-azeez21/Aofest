import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Card from "../components/Card/Card.js";
import Carousel from "../components/Carousel/Carousel";
import Stats from "../components/Stats/Stats";
import Agents from "../components/Agents/Agents";
import Footer from "../layout/Footer/Footer";
import "../css/homepage.css";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              The Simplest Way to Find Property{" "}
            </h1>
          </div>
        </div>
      </div>
      <Services />
      <div>
        <h2 className="haa text-4xl font-bold justify-center w-full">
          Properties
        </h2>
      </div>
      <Card />
      <br />
      <br />
      <br />
      <br />
      {/* <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              Build Your New{" "}
            </h2>

            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>
          </div>
        </div>
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            class="w-full h-full bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)",
            }}
          >
            <div class="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      {/* <Carousel /> */}
      <h1 className="haa text-4xl font-bold justify-center w-full">
        Our Stats
      </h1>
      <Stats />
      <br />
      <br />
      <Agents />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Homepage;
