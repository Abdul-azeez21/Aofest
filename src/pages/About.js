import React from "react";
import Navbar from "../components/Navbar/Navbar";
//import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../layout/Footer/Footer";

//motion
import { motion } from "framer-motion";

//icons
import { TbMoodSmile } from "react-icons/tb";
import { FaStarOfLife } from "react-icons/fa";
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
      <div className="w-full bg-white h-[16rem]">
        <div className="flex items-center justify-center w-full h-full">
          <motion.div>
            <motion.div
              className="text-4xl font-normal md:text-7xl lg:text-9xl pr-24"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
                About
              </span>
            </motion.div>
            <motion.div
              className="text-4xl font-normal md:text-7xl lg:text-9xl flex pl-24"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex justify-center items-center"
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <FaStarOfLife className="lg:text-5xl md:text-3xl text-2xl" />
              </motion.div>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900 ">
                Aofest
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section class="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <div class="container px-5">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b border-red-500">
                Our Mission
              </h3>
              <p class="lg:text-2xl text-sm py-3 text-left">
                We are seeking to become a good corporate enterprise to all our
                clients by applying the use of relevant information, technology
                and innovation.
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center container scale-75">
            <motion.div
              className="border-2 border-blue-200 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}
                src={require("../components/images/youssef-abdelwahab-qyzo7TDSVQs-unsplash.jpg")}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2">
          <div className="flex justify-center items-center container scale-75">
            <motion.div
              className="border-2 border-blue-200 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}
                src={require("../components/images/harmen-jelle-van-mourik-0yfWDwHOB0g-unsplash.jpg")}
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <div class="container px-5">
              <h3 class="font-medium lg:text-3xl text-xl text-center py-3 border-b border-red-500">
                Our Vision
              </h3>
              <p class="lg:text-2xl text-sm py-3 text-left">
                To build a strong and reliable Real Estate firm, with capacity
                to satisfy the needs of our would be clients and to provide
                diligent services to each and every client that seeks our
                services.
              </p>
            </div>
          </motion.div>
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
            <HiOutlineLightBulb className="h-7 w-7" />
          </div>
          <div class="flex flex-col justify-center text-lg lg:text-2xl">
            Reliability
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <HiOutlineClipboardCheck className="h-7 w-7" />
          </div>
          <div class="flex flex-col justify-center text-lg lg:text-2xl">
            Discipline
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle  sm:p-4">
            <HiOutlineBriefcase className="h-7 w-7" />
          </div>
          <div class="flex flex-col justify-center text-lg lg:text-2xl">
            Professionalism
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <TbMoodSmile className="h-7 w-7" />
          </div>
          <div class="flex flex-col justify-center text-lg lg:text-2xl">
            Clients Satisfaction
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle sm:p-4">
            <HiOutlineClock className="h-7 w-7" />
          </div>
          <div class="flex flex-col justify-center text-lg lg:text-2xl">
            Promptness
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <Testimonial /> */}
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
