/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produce from 'immer';
import axios from '../../api/axios';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { getState }) => {
    const { accessToken } = getState().session;
    const response = await axios.get('/api/reservations', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async ({ getState }) => {
    const { accessToken } = getState().session;
    const response = await axios.post('item/reservation', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
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
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        produce(state, (draftState) => {
          draftState.reservations.push(action.payload);
        });
      });
  },
});

export default reservationSlice.reducer;
