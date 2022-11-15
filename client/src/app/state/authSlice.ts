import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/userInfo';


export const EmptyUserState: UserInfo = {
  username: '',
  password: ''
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: EmptyUserState,
  reducers: {
    login: (state,action) => {
    }

  }
});

export const {login} = authSlice.actions

export default authSlice.reducer;