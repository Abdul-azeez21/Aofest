import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

//motion
import { motion } from "framer-motion";

//icons
import { TbMoodSmile } from "react-icons/tb";
// import { FaStarOfLife } from "react-icons/fa";
import {
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlineLightBulb,
  HiOutlineClock,
} from "react-icons/hi";

const About = () => {
  return (
    <div className="bg-about bg-center bg-cover h-full w-full">
      <Navbar />
      <section className="w-full bg-transparent md:h-[24rem] h-[16rem]">
        <div className="flex items-center justify-center w-full h-full max-w-[1280px] mx-auto px-2">
          <div className="mt-32">
            <motion.div
              className="text-6xl font-normal md:text-7xl lg:text-9xl pr-24"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
                About
              </span>
            </motion.div>
            <motion.div
              className="text-6xl font-normal md:text-7xl lg:text-9xl flex pl-24"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900 ">
                Aofest
              </span>
            </motion.div>
          </div>
        </div>
      </section>
      <section class="my-5 max-w-[1280px] mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 bg-white/50 rounded-md backdrop-blur-sm">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0, type: "spring" }}
            viewport={{ once: true }}
          >
            <div class="container px-5 text-white">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b border-red-500">
                Our Mission
              </h3>
              <p class="lg:text-2xl text-sm py-3 md:text-left text-center">
                We are seeking to become a good corporate enterprise to all our
                clients by applying the use of relevant information, technology
                and innovation.
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center container scale-75">
            <motion.div
              className="border border-blue-500 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.img
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 0, type: "spring" }}
                viewport={{ once: true }}
                src={require("../components/images/youssef-abdelwahab-qyzo7TDSVQs-unsplash.jpg")}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section class="max-w-[1280px] mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 bg-white/50 rounded-md backdrop-blur-sm">
          <div className="flex justify-center items-center container scale-75">
            <motion.div
              className="border border-blue-500 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.img
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 0, type: "spring" }}
                viewport={{ once: true }}
                src={require("../components/images/harmen-jelle-van-mourik-0yfWDwHOB0g-unsplash.jpg")}
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0, type: "spring" }}
            viewport={{ once: true }}
          >
            <div class="container px-5 text-black">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b border-red-500">
                Our Vision
              </h3>
              <p class="lg:text-2xl text-sm py-3 md:text-left text-center">
                To build a strong and reliable Real Estate firm, with capacity
                to satisfy the needs of our would be clients and to provide
                diligent services to each and every client that seeks our
                services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="max-w-[1280px] mx-auto px-2 my-10 p-5">
        <h1 className="flex items-center md:text-3xl text-xl text-white font-medium py-3 justify-center w-full">
          Core Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-content-center items-center">
          <div className="flex justify-center items-center space-x-2 py-3 px-3 rounded-md bg-white text-black">
            <HiOutlineLightBulb className="h-7 w-7" />

            <div className="flex justify-center text-lg lg:text-2xl">
              Reliability
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 py-3 px-3 rounded-md bg-white text-black">
            <HiOutlineClipboardCheck className="h-7 w-7" />
            <div className="flex flex-col justify-center text-lg lg:text-2xl">
              Discipline
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 py-3 px-3 rounded-md bg-white text-black">
            <HiOutlineBriefcase className="h-7 w-7" />
            <div className="flex flex-col justify-center text-lg lg:text-2xl">
              Professionalism
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-content-center items-center mt-3">
          <div className="flex justify-center items-center space-x-2 py-3 px-3 rounded-md bg-white text-black">
            <TbMoodSmile className="h-7 w-7" />
            <div className="flex flex-col justify-center text-lg lg:text-2xl">
              Clients Satisfaction
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 py-3 px-3 rounded-md bg-white text-black">
            <HiOutlineClock className="h-7 w-7" />
            <div className="flex flex-col justify-center text-lg lg:text-2xl">
              Promptness
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
