import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models/userInfo";
import { persistLocalStorage, clearLocalStorage } from "../../utils/LocalStorageFunctions";

export const initialState: UserInfo = {
  userRole: null,
  token: null,
  id: "",
  logged: false,
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: null,
  profilePic: "",
  cartId: ''
};

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") as string)
    : initialState,
  reducers: {
    login: (state, action) => {
      persistLocalStorage<UserInfo>("auth", {
        token: action.payload.token,
        id: action.payload.user.id,
        userRole: action.payload.user.userRole,
        userName: action.payload.user.userName,
        cartId: action.payload.user.cartId,
        logged: true,
      });

      state.userRole = action.payload.user.userRole
      state.token = action.payload.token
      state.id = action.payload.user.userId
      state.logged = true
      state.firstName = action.payload.user.firstName
      state.lastName = action.payload.user.lastName
      state.userName = action.payload.user.userName
      state.email = action.payload.user.email
      state.phoneNumber = action.payload.user.phoneNumber
      state.profilePic = action.payload.user.profilePic
      state.cartId = action.payload.user.cartId
    },
    logout: () => {
      clearLocalStorage('auth')
      return initialState
    }
  },
});

export const {login, logout} = authSlice.actions

export default authSlice.reducer;