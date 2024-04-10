import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Agents from "../components/Agents/Agents";
import Footer from "../layout/Footer/Footer";
import HomeCard from "../components/Card/HomeCard";
import "../css/homepage.css";

//motion
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Homepage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <motion.div className="w-full bg-gradient-to-b from-blue-800 via-blue-400 to-white content-center lg:h-[32rem] h-full">
        <div className="justify-center items-center lg:flex max-w-[1280px] mx-auto px-2 lg:mt-3 mt-20 gap-5">
          <motion.div className="flex justify-center items-center">
            <motion.div
              className="border border-white p-2"
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
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></motion.img>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 70 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, delay: 0, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-4 md:mt-0 mt-3"
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
            <div className="bg-white/50 rounded-md backdrop-blur-sm px-4 py-3 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-7 drop-shadow-sm">
              <div className="flex flex-col justify-center space-y-2">
                <span className="md:text-2xl text-xl font-bold">10+</span>
                <span className="md:text-base text-sm font-medium">
                  Properties
                </span>
              </div>
              {/* .. */}
              <div className="flex flex-col justify-center space-y-2">
                <span className="md:text-2xl text-xl font-bold">10+</span>
                <span className="md:text-base text-sm font-medium">
                  Costumers
                </span>
              </div>
              {/* .. */}
              <div className="flex flex-col justify-center space-y-2">
                <span className="md:text-2xl text-xl font-bold">3+</span>
                <span className="md:text-base text-sm font-medium">
                  Years of experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Services />
      <HomeCard />
      <section className="my-10">
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
      <Agents />
      <Footer />
    </div>
  );
};

export default Homepage;
