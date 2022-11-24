import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dataLogin } from '../../models/dataLogin';
import { UserInfo } from '../../models/userInfo';
import { postRequest } from '../../services/httpRequest';
import { persistLocalStorage } from '../../utils/LocalStorageFunctions';

export const initialState: UserInfo = {
  userRole: null,
  token: null,
  id: '',
  logged: false,
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  phoneNumber: null,
  profilePic: '',

};

export const authLogin = createAsyncThunk(
  //action type string
  'auth/login',
  // callback function
  async ({email, password}:dataLogin ,thunkAPI) => {
    try {
      const response = await postRequest({ email, password },'/users/login')
        persistLocalStorage<UserInfo>('auth', {token: response.data.token, id: response.data.user.id, userRole: response.data.user.userRole, logged: true})
      return response

    } catch (error) {
        return thunkAPI.rejectWithValue('Error when logging')
    }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') as string) : initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => ({
      ...state,
    })),
    builder.addCase(authLogin.fulfilled, (state, action) => ({
      ...state,
      userRole: action.payload.data.user.userRole,
      token: action.payload.data.token,
      id: action.payload.data.user.id,
      logged: true,
      firstName: action.payload.data.user.firstName,
      lastName: action.payload.data.user.lastName,
      userName: action.payload.data.user.userName,
      email: action.payload.data.user.email,
      phoneNumber: action.payload.data.user.phoneNumber,
      profilePic: action.payload.data.user.profilePic,

    })),
    builder.addCase(authLogin.rejected, (state, action) => ({
      ...state,
    }))
  },
});


export default authSlice.reducer;