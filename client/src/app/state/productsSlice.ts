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
    deleteProduct:(state,action) => {
      const productUnit = state.list.find(produc => produc.id === action.payload)
      if(productUnit){
        state.list.splice(state.list.indexOf(productUnit),1)
      }
    }
  },
});

export const { setProductsList,deleteProduct } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async (dispatch: any) => {
  try {
    const { products } = await getRequest("/products");
    dispatch(setProductsList(products));
  } catch (error) {
    console.log(error);
  }
};
