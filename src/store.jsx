import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './redux/NotesSlice';

const store= configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;