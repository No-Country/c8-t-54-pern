import { Product } from "./../../models/Products";
import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialState: Array<Product> = [];

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: initialState,
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProductsList } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async (dispatch: any) => {
  try {
    const { products } = await getRequest("/products");
    dispatch(setProductsList(products));
  } catch (error) {
    console.log(error);
  }
};
