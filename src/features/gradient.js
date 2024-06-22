import { createSlice } from "@reduxjs/toolkit";
//import getGradientCSSValue from "../utils/getGradientCSSValue";

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
        position:
          state.colors[state.colors.length - 1].position +
          0.1 * state.colors[state.colors.length - 1].position, //50
      });
    },
    removeColor: (state, action) => {
      if (state.colors.length === 2) return;

      state.colors.pop();
    },
    updateAngle: (state, action) => {
      state.angle = action.payload;
    },
    pickColor: (state, action) => {
      state.pickedColorId = action.payload;
    },
    updateColorPosition: (state, action) => {
      state.colors.find((color) => color.id === state.pickedColorId).position =
        action.payload;
    },
  },
});
export default gradientSlice.reducer;
export const {
  updateColor,
  addColor,
  removeColor,
  updateAngle,
  pickColor,
  updateColorPosition,
} = gradientSlice.actions;
