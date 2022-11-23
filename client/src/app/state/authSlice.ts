import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dataLogin } from '../../models/dataLogin';
import { AuthInfo } from '../../models/authInfo';
import { postRequest } from '../../services/httpRequest';
import { persistLocalStorage } from '../../utils/LocalStorageFunctions';

export const initialState: AuthInfo = {
  userRole: null,
  token: null,
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
      resp.then((response) => {
        console.log(resp)
        persistLocalStorage<AuthInfo>('auth', {token: response.data.token, id: response.data.user.id, userRole: response.data.user.userRole, logged: true})
      })
      return resp

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
    })),
    builder.addCase(authLogin.rejected, (state, action) => ({
      ...state,
    }))
  },
});


export default authSlice.reducer;