import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../layout/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";

//icons
import { TbMoodSmile } from "react-icons/tb";
import {
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlineLightBulb,
  HiOutlineClock,
} from "react-icons/hi";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              About Aofest{" "}
            </h1>
          </div>
        </div>
      </div>

      <section class="bg-gradient-to-b from-blue-400 via-purple-200 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2">
          <div className="flex justify-center items-center">
            <div class="container px-5">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b-2 border-red-400/25">
                Our Mission
              </h3>
              <p class="lg:text-2xl text-base py-3 text-left">
                We are seeking to become a good corporate enterprise to all our
                clients by applying the use of relevant information, technology
                and innovation.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center container scale-75">
            <div className="border border-blue-600 p-3">
              <img
                src={require("../components/images/youssef-abdelwahab-qyzo7TDSVQs-unsplash.jpg")}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2">
          <div className="flex justify-center items-center container scale-75">
            <div className="border border-blue-600 p-3">
              <img
                src={require("../components/images/harmen-jelle-van-mourik-0yfWDwHOB0g-unsplash.jpg")}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div class="container px-5">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b-2 border-red-400/25">
                Our Vision
              </h3>
              <p class="lg:text-2xl text-base py-3 text-left">
                To build a strong and reliable Real Estate firm, with capacity
                to satisfy the needs of our would be clients and to provide
                diligent services to each and every client that seeks our
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* <Carousel /> */}
      <h1 className="flex items-center lg:text-3xl text-xl font-medium py-3 justify-center w-full">
        Core Values
      </h1>
      <div class="grid grid-cols-1 pt-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle  sm:p-4">
            <HiOutlineLightBulb className="h-8 w-8" />
          </div>
          <div class="flex flex-col justify-center text-xl lg:text-2xl">
            Reliability
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <HiOutlineClipboardCheck className="h-8 w-8" />
          </div>
          <div class="flex flex-col justify-center text-xl lg:text-2xl">
            Discipline
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle  sm:p-4">
            <HiOutlineBriefcase className="h-8 w-8" />
          </div>
          <div class="flex flex-col justify-center text-xl lg:text-2xl">
            Professionalism
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <TbMoodSmile className="h-8 w-8" />
          </div>
          <div class="flex flex-col justify-center text-xl lg:text-2xl">
            Clients Satisfaction
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <HiOutlineClock className="h-8 w-8" />
          </div>
          <div class="flex flex-col justify-center text-xl lg:text-2xl">
            Promptness
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Testimonial />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
