import { configureStore } from '@reduxjs/toolkit';

// import reducers
// import greetingReducer from './greetingSlice';
import addClassesReducer from './AddClasses/addClassesSlice';

// Create Redux store:
const store = configureStore({
  reducer: {
    // Add reducers
    // greetingReducer,
    addClassesReducer,

  },
});

export default store;
