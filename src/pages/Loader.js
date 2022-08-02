import React, { useEffect } from "react";
import logoAni from "../components/images/VID-20220720-WA0022.mp4";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="">
      <div className="w-screen h-screen container flex justify-center items-center">
        <video src={logoAni} autoPlay muted loop />
      </div>
    </div>
  );
};

export default Loader;
