import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Stats from "../components/Stats/Stats";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../layout/Footer/Footer";
const About = () => {
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
              About Aofest{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div class="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundimage:
                  'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")',
              }}
            />{" "}
          </div>

          <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Build Your New{" "}
              <span class="text-blue-600 dark:text-blue-400">Idea</span>
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
          </div>
        </div>
      </section> */}
      <section class="bg-white">
        <div class="container px-3 py-5 mx-auto">
          <h3 class="font-bold text-4xl text-center py-3 border-bottom">
            Who we are
          </h3>
          <p class="text-2xl py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>
        </div>
      </section>
      <section class="bg-white">
        <div class="container px-3 py-5 mx-auto">
          <h3 class="font-bold text-4xl text-center py-3 border-bottom">
            Who we do
          </h3>
          <p class="text-2xl py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>
        </div>
      </section>
      {/* <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
          <div class="items-center lg:flex">
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Who we are
              </h2>

              <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                , Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti
                dolorem sequi ex veniam consequuntur id, maiores beatae ipsa
                omnis aliquam?
              </p>
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="flex items-center justify-center lg:justify-end">
                <div class="max-w-lg">
                  <img
                    class="object-cover object-center w-full h-64 rounded-md shadow"
                    src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <br />
      <br />
      <br />
      <br />
      {/* <Carousel /> */}
      <h1 className="haa text-4xl font-bold justify-center w-full">
        Our Stats
      </h1>
      <Stats />
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
