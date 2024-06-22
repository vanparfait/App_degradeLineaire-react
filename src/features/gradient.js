import { createSlice } from "@reduxjs/toolkit";
import getGradientCSSValue from "../utils/getGradientCSSValue";

console.log(
  getGradientCSSValue({
    colors: [
      {
        id: 1,
        value: "#ff0000",
        position: 20,
      },
      {
        id: 2,
        value: "#e09ca7",
        position: 50,
      },
    ],
    pickedColorId: 1,
    angle: 60,
  })
);

const initialState = {
  colors: [
    {
      id: 1,
      value: "#ff0000",
      position: 20,
    },
    {
      id: 2,
      value: "#e09ca7",
      position: 50,
    },
  ],
  pickedColorId: 1,
  angle: 60,
};

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    updateColor: (state, action) => {
      const currentColor = state.colors.find(
        (color) => color.id === action.payload.id
      );
      currentColor.value = action.payload.value;
    },
    addColor: (state, action) => {
      if (state.colors.length === 5) return;
      state.colors.push({
        id: state.colors[state.colors.length - 1].id + 1,
        value: "#111111",
        position: 50,
      });
    },
    removeColor: (state, action) => {
      if (state.colors.length === 2) return;

      state.colors.pop();
    },
  },
});
export default gradientSlice.reducer;
export const { updateColor, addColor, removeColor } = gradientSlice.actions;
