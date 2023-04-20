import {createSlice} from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: 'auth',
  initialState: {
    booksArray: []
  },
  reducers: {
    updateBooks: (state, {payload}) => {
      state.booksArray = payload
    }
  }
})

export const {
  updateBooks
} = booksSlice.actions
