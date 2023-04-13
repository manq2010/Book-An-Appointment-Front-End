/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const initialState = {
  classes: [],
  isLoading: true,
  status: 'idle',
  error: '',
};

export const fetchClasses = createAsyncThunk(
  'classes/fetchClasses',
  async (accessToken) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get('items', config);
    const classes = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    return classes;
  },
);

export const mainSlice = createSlice({
  name: 'classes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.classes = action.payload;
        state.status = 'succeeded';
        state.content = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default mainSlice.reducer;
