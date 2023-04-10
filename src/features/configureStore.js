import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Sessions/sessionSlice';
import addClassesReducer from './AddClasses/addClassesSlice';
import reservationReducer from './Reservation/reservationSlice';

// Create Redux store:
const store = configureStore({
  reducer: {
    session: sessionReducer,
    addClassesReducer,
    reservationReducer,
  },
});

export default store;
