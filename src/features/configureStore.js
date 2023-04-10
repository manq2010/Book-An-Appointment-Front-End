import { configureStore } from '@reduxjs/toolkit';

// import reducers
// import greetingReducer from './greetingSlice';
import addClassesReducer from './AddClasses/addClassesSlice';
import classesReducer from './DeleteClass/deleteClass.JS';

// Create Redux store:
const store = configureStore({
  reducer: {
    // Add reducers
    // greetingReducer,
    addClassesReducer,
    classes: classesReducer,

  },
});

export default store;
