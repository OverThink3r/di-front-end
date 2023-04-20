import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    status: 'checking',
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated'
      state.userName = payload
    },
    logout: (state) => {
      state.status = 'not-authenticated'
      state.userName = ''
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
      state.userName = ''
    }
  }
})

export const {
  login,
  logout,
  checkingCredentials,
} = authSlice.actions