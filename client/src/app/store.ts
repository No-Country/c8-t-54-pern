import { configureStore } from "@reduxjs/toolkit";
import { AuthInfo } from "../models/authInfo";
import { authSlice } from "./state/authSlice";

export interface AppStore {
    auth: AuthInfo;
}

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

