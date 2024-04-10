import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";

//icons
import { MdLocationOn, MdLocalPhone, MdMail } from "react-icons/md";

const validate = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  toast.configure();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitt = (e) => {
    emailjs
      .send("service_i159fhe", "template_jlg6ktm", values, "9t7zvyXynqvsSvFt4")
      .then(
        (response) => {
          // console.log("SUCCESS", response);
          if (response.status === 200) {
            navigate("/");
            toast.success("Your email has been submitted Successfully");
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
      {/* <div
        className="w-full bg-center bg-cover h-[24rem]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-blue-900/50">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-5xl">
              Contact Us{" "}
            </h1>
          </div>
        </div>
      </div> */}
      <section className="my-10 md:mt-32 mt-20">
        <div className="grid max-w-[1280px] mx-auto grid-cols-1 px-6 lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-900">
              Get in touch
            </h1>
            <p className="pt-2 pb-4">Fill in the form to contact us</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <MdLocationOn className="w-6 h-6 mr-2 sm:mr-6 text-blue-700" />
                <span>
                  Shop L7 & L8, Abiola Modern Market, Ogba Road, Agege, Lagos
                  State, Nigeria.
                </span>
              </p>
              <p className="flex items-center">
                <MdLocalPhone className="w-6 h-6 mr-2 sm:mr-6 text-blue-700" />
                <span>08029559491</span>
              </p>
              <p className="flex items-center">
                <MdMail className="w-6 h-6 mr-2 sm:mr-6 text-blue-700" />
                <span>aofestproperties@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitt)}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="fullName"
                {...register("fullName")}
                value={values.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-coolGray-800"
              />
            </label>
            <span className="text-xs text-red-600 text-start my-2">
              {errors.fullName?.message}
            </span>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                {...register("email")}
                onChange={handleChange}
                value={values.email}
                placeholder="mail@example.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-coolGray-800"
              />
            </label>
            <span className="text-xs text-red-600 text-start my-2">
              {errors.email?.message}
            </span>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                name="message"
                {...register("message")}
                onChange={handleChange}
                value={values.message}
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-coolGray-800"
              ></textarea>
            </label>
            <span className="text-xs text-red-600 text-start my-2">
              {errors.message?.message}
            </span>
            {!loading && (
              <button
                type="submit"
                onSubmit={handleSubmit(handleSubmitt)}
                className="self-center text-white font-bold px-8 py-1 text-lg rounded focus:ring focus:ring-opacity-75 bg-blue-600/75 hover:bg-blue-600"
              >
                Submit
              </button>
            )}
            {loading && (
              <button type="submit" className="self-center px-8 py-1 text-lg">
                <div className="w-5 h-5 text-center border-2 border-dashed border-blue-600 rounded-full animate-spin border-white-400"></div>
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
