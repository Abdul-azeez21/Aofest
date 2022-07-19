import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Card from "../components/Card/Card.js";
import Stats from "../components/Stats/Stats";
import Agents from "../components/Agents/Agents";
import Footer from "../layout/Footer/Footer";
import "../css/homepage.css";

//motion
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <motion.div className="w-full bg-gradient-to-b from-blue-800 via-purple-400 to-white content-center justify-center items-center lg:flex h-[32rem] p-8">
        <motion.div className="p-5">
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
          <span className="lg:text-4xl text-3xl text-gray-900 p-1">
            Residential properties
          </span>
        </motion.div>
      </motion.div>
      <Services />
      <div>
        <h2 className="haa text-xl font-semibold justify-center w-full">
          Properties
        </h2>
      </div>
      <Card />
      <br />
      <section className="scroll">
        <div className="scroll-inner">
          <h1 className="lg:text-7xl text-5xl items-center justify-center flex text-black str">
            <span className="px-2 scroller-item">BUILD</span>
            <span className="px-2 scroller-item">BUY</span>
            <span className="px-2 scroller-item">MANAGE</span>
            <span className="px-2 scroller-item">SELL</span>
            <span className="px-2 scroller-item">RENOVATE</span>
            {/* Exact copy */}
            <span className="px-2 scroller-item">BUILD</span>
            <span className="px-2 scroller-item">BUY</span>
            <span className="px-2 scroller-item">MANAGE</span>
            <span className="px-2 scroller-item">SELL</span>
            <span className="px-2 scroller-item">RENOVATE</span>
          </h1>
        </div>
      </section>

      <br />
      <br />
      <h1 className="haa text-3xl font-semibold justify-center w-full">
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
