/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (accessToken) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get('user/reservations', config);
    const reservations = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    return reservations.slice().sort((a, b) => b.id - a.id);
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationItem) => {
    const config = {
      headers: {
        Authorization: `Bearer ${reservationItem.accessToken}`,
      },
    };
    await axios.post(
      'user/reserve',
      {
        item_id: reservationItem.item_id,
        city: reservationItem.city,
        date: reservationItem.date,
      },
      config,
    );
    return reservationItem;
  },
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.reservations = [state.reservations, action.payload];
        state.status = 'added';
      });
  },
});

export default reservationSlice.reducer;
