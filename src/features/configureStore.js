import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Sessions/sessionSlice';
import addClassesReducer from './AddClasses/addClassesSlice';

// Create Redux store:
const store = configureStore({
  reducer: {
    session: sessionReducer,
    addClasses: addClassesReducer,
  },
});

export default store;
