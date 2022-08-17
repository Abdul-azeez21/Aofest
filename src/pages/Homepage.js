import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Agents from "../components/Agents/Agents";
import Footer from "../layout/Footer/Footer";
import HomeCard from "../components/Card/HomeCard";
import "../css/homepage.css";

//motion
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

//icons
import { FiArrowRight } from "react-icons/fi";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <motion.div className="w-full bg-gradient-to-b from-blue-800 via-purple-400 to-white content-center justify-center items-center lg:flex h-[32rem] p-8">
        <motion.div className="p-5 flex justify-center items-center">
          <motion.div
            className="border border-white p-2"
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <motion.img
              initial={{ opacity: 0, translateX: -70 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            ></motion.img>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 70 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
        >
          <div className="scroller">
            <span className="text-5xl text-gray-900">
              Build
              <br />
              Buy
              <br />
              Manage
              <br />
              Sell
              <br />
              Renovate
            </span>
          </div>
          <span className="lg:text-4xl text-2xl text-gray-900 p-1">
            Residential properties
          </span>
        </motion.div>
      </motion.div>
      <br />
      <Services />
      <motion.div
        initial={{ opacity: 0, translateY: 70 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="haa text-xl font-semibold justify-center w-full">
          Properties
        </h2>
        <HomeCard />
        <div className="container">
          <div className="flex justify-center items-center">
            <a href="/props">
              <button className="text-center">
                <span className="text-black lg:text-2xl p-2 pb-6 font-normal text-base">
                  CHECK OUT OUR PROPERTIES
                </span>
                <span className="text-center justify-center flex">
                  <FiArrowRight
                    className="h-5 w-5 text-blue-500"
                    strokeWidth="2"
                  />
                </span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <section className="pt-10">
        <div className="lg:text-5xl md:text-5xl text-2xl items-center justify-center flex text-blue-800 ">
          <Marquee pauseOnHover speed={30} gradient={false}>
            <div>
              <span className="px-4">BUILD</span>
            </div>
            <div>
              <span className="px-4">BUY</span>
            </div>
            <div>
              <span className="px-4">MANAGE</span>
            </div>
            <div>
              <span className="px-4">SELL</span>
            </div>
            <div>
              <span className="px-4">RENOVATE</span>
            </div>
            <div>
              <span className="px-4">BUILD</span>
            </div>
            <div>
              <span className="px-4">BUY</span>
            </div>
            <div>
              <span className="px-4">MANAGE</span>
            </div>
            <div>
              <span className="px-4">SELL</span>
            </div>
            <div>
              <span className="px-4">RENOVATE</span>
            </div>
          </Marquee>
        </div>
      </section>

      <br />
      <br />
      <div>
        <h1 className="haa text-3xl font-semibold justify-center w-full">
          Our Stats
        </h1>
        <Stats />
      </div>

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
