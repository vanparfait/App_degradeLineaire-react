import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAngle } from "../../features/gradient";

const RangeAngle = () => {
  const dispatch = useDispatch();
  const gradientValue = useSelector((state) => state.gradient);
  return (
    <input
      type="range"
      className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
      min={"0"}
      max="360"
      value={gradientValue.angle}
      onChange={(e) => dispatch(updateAngle(e.target.value))}
    />
  );
};

export default RangeAngle;
