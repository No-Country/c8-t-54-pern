import { Colours } from './../models/Colours';
import { Product } from "./../models/Products";
import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models/userInfo";
import { authSlice } from "./state/authSlice";
import products from "./state/productsSlice";
import colours from "./state/coloursSlice";

export interface AppStore {
  auth: UserInfo;
  products: {
    list: Array<Product>;
  };
  colours: {
    list: Array<Colours>;
  };
}

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products,
    colours,
  },
});
