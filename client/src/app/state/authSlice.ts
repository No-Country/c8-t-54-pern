import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/userInfo';


export const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: ''
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: EmptyUserState,
  reducers: {
    login: (state,action) => {
        console.log(state)
    }
/*     createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    } */
  }
});

export const {login} = authSlice.actions
/* 
export const { createUser, updateUser, resetUser } = userSlice.actions; */

export default authSlice.reducer;