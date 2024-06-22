import React from "react";
import { useDispatch } from "react-redux";
import { addColor, removeColor } from "../features/gradient";

const AddRemoveColor = ({ action, sign }) => {
  const dispatch = useDispatch();

  function handleClick() {
    if (action === "add") {
      dispatch(addColor());
    } else if (action === "remove") {
      dispatch(removeColor());
    }
  }
  return (
    <button
      onClick={handleClick}
      className="mr-1 border border-slate-400 rounded min-w-[40px]"
    >
      {sign}
    </button>
  );
};

export default AddRemoveColor;
