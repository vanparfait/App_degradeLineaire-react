import { createSlice } from "@reduxjs/toolkit";

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
  },
});
export default gradientSlice.reducer;
export const { updateColor } = gradientSlice.actions;
