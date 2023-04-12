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
    return classes.slice().sort((a, b) => b.id - a.id);
  },
);

export const addClass = createAsyncThunk(
  'classes/addClass',
  async (classItem) => {
    const config = {
      headers: {
        Authorization: `Bearer ${classItem.accessToken}`,
      },
    };
    await axios.post('items', {
      name: classItem.name,
      description: classItem.description,
      photo: classItem.photo,
      price: classItem.price,
      mentor_name: classItem.mentorName,
      duration: classItem.duration,
    }, config);
    return classItem;
  },
);

export const deleteClass = createAsyncThunk(
  'classes/deleteClass',
  async ({ accessToken, id }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios.delete(`items/${id}`, config);
    return id;
  },
);

const addClassSlice = createSlice({
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
      })
      .addCase(addClass.fulfilled, (state, action) => {
        state.classes = [state.classes, action.payload];
        state.status = 'added';
      })
      .addCase(addClass.pending, (state) => {
        state.status = 'adding';
      })
      .addCase(deleteClass.fulfilled, (state, action) => {
        state.classes = state.classes.filter((classItem) => classItem.id !== action.payload);
        state.status = 'removed';
      })
      .addCase(deleteClass.pending, (state) => {
        state.status = 'removing';
      });
  },
});

export default addClassSlice.reducer;
