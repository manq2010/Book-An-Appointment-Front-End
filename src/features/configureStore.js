import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Sessions/sessionSlice';
import addClassesReducer from './AddClasses/addClassesSlice';
import reservationReducer from './Reservation/reservationSlice';
import mainReducer from './Main/mainSlice';

// Create Redux store:
const store = configureStore({
  reducer: {
    session: sessionReducer,
    addClassesReducer,
    reservationReducer,
    mainReducer,
  },
});

export default store;
