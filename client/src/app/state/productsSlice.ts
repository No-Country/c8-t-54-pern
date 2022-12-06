import { Product } from "./../../models/Products";
import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialList: Array<Product> = [];
export const initialDetail = {} as Product;

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: initialList,
    detail: initialDetail,
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload;
    },
    setDetailProduct: (state, action) => {
      state.detail = action.payload;
    },
    deleteProduct: (state, action) => {
      const productUnit = state.list.find(
        (produc) => produc.id === action.payload
      );
      if (productUnit) {
        state.list.splice(state.list.indexOf(productUnit), 1);
      }
    },
  },
});

export const { setProductsList, deleteProduct, setDetailProduct } =
  productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async (dispatch: any) => {
  try {
    const { products } = await getRequest("/products");
    dispatch(setProductsList(products));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = (id: string) => async (dispatch: any) => {
  try {
    const { product } = await getRequest(`/products/${id}`);
    dispatch(setDetailProduct(product));
  } catch (error) {
    console.log(error);
  }
};
