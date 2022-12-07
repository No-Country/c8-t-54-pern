import { Categories } from './../../models/Categories';
import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialState: Array<Categories> = [];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: initialState,
  },
  reducers: {
    setCategoriesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const getAllCategories = () => async (dispatch: any) => {
  try {
    const { allCategories } = await getRequest("/categories");
    dispatch(setCategoriesList(allCategories));
  } catch (error) {
    console.log(error);
  }
};
