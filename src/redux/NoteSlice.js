import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      name: "Kojo",
      note: "Hello my people",
    },
  ],
};

const NoteSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent } = NoteSlice.actions;

export default NoteSlice.reducer;
