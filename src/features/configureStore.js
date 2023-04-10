import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Sessions/sessionSlice';
import addClassesReducer from './AddClasses/addClassesSlice';
import classesReducer from './DeleteClass/deleteClass.JS';

// Create Redux store:
const store = configureStore({
  reducer: {
    session: sessionReducer,
    addClassesReducer,
    classes: classesReducer,
  },
});

export default store;
