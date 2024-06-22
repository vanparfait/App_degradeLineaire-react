import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../../features/gradient";

const ColorInput = ({ id, color }) => {
  const dispatch = useDispatch();

  const handleChangeColor = (e) => {
    e.preventDefault(),
      dispatch(
        updateColor({
          id,
          value: e.target.value,
          //   type: "color",
        })
      );
  };

  return (
    <input
      type="color"
      className="w-[60px] h-[60px] bg-transparent rounded-md cursor-pointer d-block [&:not(:last-child)]:mr-4"
      id={id}
      value={color}
      onChange={handleChangeColor}
    />
  );
};

export default ColorInput;
