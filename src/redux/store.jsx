import { configureStore } from '@reduxjs/toolkit';
import seminarSlice from './seminarSlice';

export default configureStore({
  reducer: {
    seminars: seminarSlice
  }
});