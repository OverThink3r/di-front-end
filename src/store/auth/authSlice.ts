import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    status: 'checking',
    token: ''
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (state, action) => {

    },
    checkingCredentials: (state, action) => {

    }
  }
})

export const {
  login,
  logout,
  checkingCredentials
} = authSlice.actions