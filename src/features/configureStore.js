import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Sessions/sessionSlice';
import addClassesReducer from './AddClasses/addClassesSlice';
import mainReducer from './Main/mainSlice';

// Create Redux store:
const store = configureStore({
  reducer: {
    session: sessionReducer,
    addClassesReducer,
    mainReducer,
  },
});

export default store;
