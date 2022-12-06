import { Size } from "./../../models/Size";
import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialState: Array<Size> = [];

export const sizeSlice = createSlice({
  name: "sizes",
  initialState: {
    list: initialState,
  },
  reducers: {
    setSizesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setSizesList } = sizeSlice.actions;

export default sizeSlice.reducer;

export const getAllSizes = () => async (dispatch: any) => {
  try {
    const { sizes } = await getRequest("/sizes");
    dispatch(setSizesList(sizes));
  } catch (error) {
    console.log(error);
  }
};
