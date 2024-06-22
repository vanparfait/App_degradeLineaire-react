import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [
    {
      id: 1,
      value: "#yav67",
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

const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {},
});
export default gradientSlice.reducer;
