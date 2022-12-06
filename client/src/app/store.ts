import { Size } from './../models/Size';
import { Colours } from './../models/Colours';
import { Product } from "./../models/Products";
import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models/userInfo";
import { authSlice } from "./state/authSlice";
import products from "./state/productsSlice";
import colours from "./state/coloursSlice";
import sizes from "./state/sizeSlice";

export interface AppStore {
  auth: UserInfo;
  products: {
    list: Array<Product>;
    detail: Product;
  };
  colours: {
    list: Array<Colours>;
  };
  sizes: {
    list: Array<Size>;
  };
}

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products,
    colours,
    sizes,
  },
});
