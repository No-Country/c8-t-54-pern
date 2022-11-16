import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/userInfo';


export const initialState: UserInfo = {
  email:'',
  password: ''
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state,action) => {
      const newState = action.payload
      state.email = newState.email
      state.password = newState.password

    }

  }
});

export const {login} = authSlice.actions

export default authSlice.reducer;