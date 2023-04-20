import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth/authSlice";
import {booksSlice} from "./modal/booksSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksSlice.reducer,
  }
})