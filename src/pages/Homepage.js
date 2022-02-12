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
      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              Build Your New{" "}
              <span class="text-blue-600 dark:text-blue-400">Idea</span>
            </h2>

            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Get Started
              </a>
              <a
                href="#"
                class="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Learn More
              </a>
            </div>
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
      </div>
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
      <ul
        class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-homeJustify"
            class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeJustify"
            role="tab"
            aria-controls="tabs-homeJustify"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-profileJustify"
            class="
      nav-link
      w-full
      bloc
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            Very very very very long link
          </a>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-messagesJustify"
            class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
      </ul>
      <div class="tab-content" id="tabs-tabContentJustify">
        <div
          class="tab-pane fade show active"
          id="tabs-homeJustify"
          role="tabpanel"
          aria-labelledby="tabs-home-tabJustify"
        >
          <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div class="lg:w-1/2">
                <div
                  class="h-64 bg-cover lg:rounded-lg lg:h-full"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                  }}
                ></div>
              </div>

              <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Build Your New{" "}
                  <span class="text-blue-600 dark:text-blue-400">Idea</span>
                </h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem modi reprehenderit vitae exercitationem aliquid dolores
                  ullam temporibus enim expedita aperiam mollitia iure
                  consectetur dicta tenetur, porro consequuntur saepe
                  accusantium consequatur.
                </p>

                <div class="mt-8">
                  <a
                    href="#"
                    class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-profileJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div class="lg:w-1/2">
                <div
                  class="h-64 bg-cover lg:rounded-lg lg:h-full"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                  }}
                ></div>
              </div>

              <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Build Your New{" "}
                  <span class="text-blue-600 dark:text-blue-400">Idea</span>
                </h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem modi reprehenderit vitae exercitationem aliquid dolores
                  ullam temporibus enim expedita aperiam mollitia iure
                  consectetur dicta tenetur, porro consequuntur saepe
                  accusantium consequatur.
                </p>

                <div class="mt-8">
                  <a
                    href="#"
                    class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-messagesJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div class="lg:w-1/2">
                <div
                  class="h-64 bg-cover lg:rounded-lg lg:h-full"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                  }}
                ></div>
              </div>

              <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Build Your New{" "}
                  <span class="text-blue-600 dark:text-blue-400">Idea</span>
                </h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem modi reprehenderit vitae exercitationem aliquid dolores
                  ullam temporibus enim expedita aperiam mollitia iure
                  consectetur dicta tenetur, porro consequuntur saepe
                  accusantium consequatur.
                </p>

                <div class="mt-8">
                  <a
                    href="#"
                    class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
