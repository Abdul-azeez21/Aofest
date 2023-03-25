import React from "react";

//icons
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto">
          <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
              <div class="px-6">
                <div>
                  <a
                    href="/"
                    class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Aofest Property Enterprise
                  </a>
                </div>

                <p class="max-w-md mt-2 text-gray-500 dark:text-gray-400">
                  BUY & BUILD affordable residential land
                </p>

                <div class="flex mt-4 -mx-2">
                  <a
                    href="#"
                    class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Linkden"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
              <div class="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <a
                    href="/props"
                    class="text-gray-700 uppercase dark:text-white"
                  >
                    Properties
                  </a>
                  <br />
                  <a
                    href="/about"
                    class="text-gray-700 uppercase dark:text-white mt-2"
                  >
                    About
                  </a>
                </div>

                <div>
                  <a
                    href="/contact"
                    class="text-gray-700 uppercase dark:text-white"
                  >
                    Contact
                  </a>
                  <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    08029559491
                  </span>
                  <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    aofestproperties@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr class="h-px my-6 bg-red-300 border-none" />

          <div>
            <p class="text-center text-gray-800 dark:text-white">
              © Aofest Property Enterprise 2023 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
