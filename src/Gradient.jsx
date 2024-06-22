import React from "react";
import getGradientCSSValue from "./utils/getGradientCSSValue";

import { useSelector } from "react-redux";

const Gradient = () => {
  const gradientValue = useSelector((state) => state.gradient);
  return (
    <div
      style={{
        backgroundImage: getGradientCSSValue(gradientValue).slice(0, -1),
      }}
      className="w-1/2 border-4 border-slate-200"
    ></div>
  );
};

export default Gradient;
