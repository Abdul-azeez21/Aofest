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
          <h3 class="font-bold text-4xl text-center py-3 border-b-2 border-sky-400/25">
            Our Mission
          </h3>
          <p class="text-2xl py-3 text-center">
            We are seeking to become a good corporate enterprise to all our
            clients by applying the use of relevant information, technology and
            innovation.
          </p>
        </div>
      </section>
      <section class="bg-white">
        <div class="container px-3 py-5 mx-auto">
          <h3 class="font-bold text-4xl text-center py-3 border-b-2 border-sky-400/25">
            Our Vision
          </h3>
          <p class="text-2xl py-3 text-center">
            To build a strong and reliable Real Estate firm, with capacity to
            satisfy the needs of our would be clients and to provide diligent
            services to each and every client that seeks our services.
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
      <h1 className="haa text-4xl font-bold py-3 justify-center w-full">
        Core Values
      </h1>
      <div class="grid grid-cols-5 pt-2 sm:grid-cols-1 xl:grid-cols-5">
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-center text-2xl">Reliability</div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-center text-2xl">Discipline</div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-center text-2xl">
            Professionalism
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-center text-2xl">
            Clients Satisfaction
          </div>
        </div>
        <div class="flex justify-center py-3">
          <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-center text-2xl">Promptness</div>
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
