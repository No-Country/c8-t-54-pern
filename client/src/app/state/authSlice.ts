import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { dataLogin } from '../../models/dataLogin';
import { UserInfo } from '../../models/userInfo';
import { postRequest } from '../../services/httpRequest';


export const initialState: UserInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: 0,
  userRole: '',
  token: '',
  id: '',
  logged: false,
};

export const authLogin = createAsyncThunk(
  //action type string
  'auth/login',
  // callback function
  async ({email, password}:dataLogin ,thunkAPI) => {
    try {
      const resp = postRequest({ email, password },'/users/login')
      return resp

    } catch (error) {
        return thunkAPI.rejectWithValue('Error when logging')
    }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state,action) => {
      const {firstName, lastName, email, phoneNumber, userRole, id} = action.payload.data.user
      state.firstName = firstName
      state.lastName = lastName
      state.email = email
      state.phoneNumber = phoneNumber
      state.userRole = userRole
      state.token = action.payload.data.token
      state.id = id
      state.logged = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => ({
      ...state,
      loading: true,
    })),
    builder.addCase(authLogin.fulfilled, (state, action) => ({
      ...state,
      firstName: action.payload.data.user.firstName,
      lastName: action.payload.data.user.lastName,
      email: action.payload.data.user.email,
      phoneNumber: action.payload.data.user.phoneNumber,
      userRole: action.payload.data.user.userRole,
      token: action.payload.data.token,
      id: action.payload.data.user.id,
      logged: true,
    })),
    builder.addCase(authLogin.rejected, (state, action) => ({
      ...state,
    }))
  },
});

export const {login} = authSlice.actions

export default authSlice.reducer;