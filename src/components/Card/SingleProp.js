import React from "react";
import cardfInfo from "./CardData";

const SingleProp = () => {
  const card = cardfInfo;
  return <div>{card[(0, 1, 2, 3, 4)].text1}</div>;
};

export default SingleProp;
