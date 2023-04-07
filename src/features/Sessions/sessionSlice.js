import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword, loginWithEmailAndPassword,
  logoutUserWithToken, requestAccessTokenWithRefreshToken, getCurrentUser,
} from '../../api/sessionAPI';
/* eslint-disable no-param-reassign */

function storeRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

function removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

export const signUpUser = createAsyncThunk(
  'session/signUpUser',
  async (payload, { rejectWithValue }) => {
    const response = await createUserWithEmailAndPassword(
      payload.email,
      payload.password,
      payload.username,
    );
    if (response.errors) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(response);
    }

    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const loginUser = createAsyncThunk(
  'session/loginUser',
  async (payload, { rejectWithValue }) => {
    const loginResponse = await loginWithEmailAndPassword(
      payload.email,
      payload.password,
    );
    if (loginResponse.error) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(loginResponse);
    }
    const userResponse = await getCurrentUser(loginResponse.access_token);
    if (userResponse.error) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(userResponse.data);
    }
    const response = {
      ...loginResponse,
      ...userResponse,
    };
      // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const logoutUser = createAsyncThunk(
  'session/logoutUser',
  async (payload, { rejectWithValue }) => {
    const response = await logoutUserWithToken(payload);
    // if response has errors rejectwithvalue
    if (response.error) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(response);
    }
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const refreshAccessToken = createAsyncThunk(
  'session/refreshAccessToken',
  async (refreshToken, { rejectWithValue }) => {
    if (!refreshToken) {
      return rejectWithValue('No refresh token');
    }

    const refreshResponse = await requestAccessTokenWithRefreshToken(
      refreshToken,
    );
    if (refreshResponse.error) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(refreshResponse.data);
    }
    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      // The value we return becomes the `rejected` action payload
      return rejectWithValue(userResponse.data);
    }
    const response = {
      ...refreshResponse,
      ...userResponse,
    };
      // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

const initialState = {
  currentUser: {
    id: undefined,
    email: undefined,
    role: undefined,
    createdAt: undefined,
  },
  loading: true,
  error: false,
  errorMessages: [],
  accessToken: undefined,
  refreshToken: getRefreshToken(),
  expiresIn: undefined,
  tokenType: undefined,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    resetErrorState: (state) => {
      state.error = false;
      state.errorMessages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.tokenType = action.payload.token_type;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = Object.entries(action.payload.errors)
          .filter(([key, value]) => `${key}`[value] !== 'undefined') // has options
          .map(([key, value]) => `${key}: ${value}`);
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = ['Invalid credentials. Did you enter them correctly?'];
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        storeRefreshToken(action.payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = {
          id: undefined,
          email: undefined,
          role: undefined,
          createdAt: undefined,
        };
        state.accessToken = undefined;
        state.refreshToken = undefined;
        state.expiresIn = undefined;
        state.tokenType = undefined;
        removeRefreshToken();

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [action.payload.error];
      });
  },
});

export const { resetErrorState } = sessionSlice.actions;

export default sessionSlice.reducer;
