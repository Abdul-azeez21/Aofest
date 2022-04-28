import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  toast.configure();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xi57x05",
        "template_j57domt",
        values,
        "user_PDU99tS6mlXYloYhmsjk0"
      )
      .then(
        (response) => {
          // console.log("SUCCESS", response);
          if (response.status === 200) {
            navigate("/");
            toast.success("Your email Has been submitted Successfully");
          }
        },

        (error) => {
          // console.log("FAILED...", error);
        }
      );

    setLoading(true);
  };

  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHJlYWwlMjBlc3RhdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Contact Us{" "}
            </h1>
          </div>
        </div>
      </div>
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to contact us</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Shop L7 & L8, Abiola Modern Market, Ogba Road, Agege, Lagos
                  State, Nigeria.
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>08029559491</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                name="message"
                onChange={handleChange}
                value={values.message}
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800"
              ></textarea>
            </label>
            {!loading && (
              <button
                type="submit"
                className="self-center text-white font-bold px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-blue-400 dark:text-coolGray-900 focus:ring-violet-400 hover:opacity-violet-400"
              >
                Submit
              </button>
            )}
            {loading && (
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-coolGray-900 focus:ring-violet-400 hover:ring-violet-400"
              >
                <div className="w-5 h-5 text-center border-4 border-dashed rounded-full animate-spin border-white-400"></div>
              </button>
            )}
          </form>
        </div>
      </section>
      <br />

      <Footer />
    </div>
  );
};

export default Contact;
