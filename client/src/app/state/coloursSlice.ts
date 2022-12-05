import { Colours } from './../../models/Colours';
import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialState: Array<Colours> = [];

export const coloursSlice = createSlice({
  name: "colours",
  initialState: {
    list: initialState,
  },
  reducers: {
    setColoursList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setColoursList } = coloursSlice.actions;

export default coloursSlice.reducer;

export const getAllColours = () => async (dispatch: any) => {
  try {
    const { allColours } = await getRequest("/colours");
    dispatch(setColoursList(allColours));
  } catch (error) {
    console.log(error);
  }
};
