import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickColor } from "../../features/gradient";

const SelectColor = () => {
  const dispatch = useDispatch();
  const gradientValue = useSelector((state) => state.gradient);
  return (
    <div className="mb-5">
      <select
        onChange={(e) => dispatch(pickColor(Number(e.target.value)))}
        className="bg-gray-900 cursor-pointer py-1 px-2 mb-1 mt-2 border border-gray-700 outline-none focus:border-gray-500"
      >
        {gradientValue.colors.map((color) => (
          <option value={color.id} key={color.id}>
            color {color.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectColor;
