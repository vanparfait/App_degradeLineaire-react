import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateColorPosition } from "../../features/gradient";

const RangeColorPosition = () => {
  const dispatch = useDispatch();
  const gradientValue = useSelector((state) => state.gradient);

  const selectedColorPosition = gradientValue.colors.find(
    (obj) => obj.id === gradientValue.pickedColorId
  );
  return (
    <input
      type="range"
      className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
      value={selectedColorPosition.position}
      onChange={(e) => dispatch(updateColorPosition(e.target.value))}
    />
  );
};

export default RangeColorPosition;
