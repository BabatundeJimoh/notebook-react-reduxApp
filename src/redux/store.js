import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./NoteSlice";

export const store = configureStore({
  reducer: {
    studentReducer: studentReducer,
  },
});
