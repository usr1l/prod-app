'use client'

import axios from "axios";
import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

// session initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  errors: null
};

// thunk for testing connection
export const thunkTest = createAsyncThunk(
  'session/test',
  async (data, { dispatch }) => {
    const response = await fetch('/auth/test');
    return response;
  }
);

// login user thunk
export const thunkLogin = createAsyncThunk(
  'session/login',
  async ({ email, password }, { dispatch }) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const res = await response.json();
    if (response.ok) {
      dispatch(authenticate(res));
      return;
    } else {
      dispatch(handleError(res.errors));
      return;
    }
  });

// authenticate user thunk
export const thunkAuthenticate = createAsyncThunk(
  'session/authenticate',
  async (data, { dispatch }) => {
    const response = await fetch('/api/auth/session', {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const res = await response.json();
    if (response.ok) {
      dispatch(authenticate(res));
      return;
    } else {
      dispatch(handleError(res.errors));
      return;
    }
  }
);

// signup user thunk
export const thunkSignup = createAsyncThunk(
  'session/signup',
  async ({ email, password, firstname, lastname, username }, { dispatch }) => {
    return;
  }
);

// logout user thunk
export const thunkLogout = createAsyncThunk(
  'session/logout',
  async (data, { dispatch }) => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST'
    });

    if (response.ok) {
      dispatch(logout());
      return;
    } else {
      dispatch(handleError(res.errors));
      return;
    }
  });

// session slice
const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.errors = null;
    },
    handleError: (state, action) => {
      state.errors = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.errors = null;
    },
    test: (state, action) => {}
  },
  extraReducers: builder => {
    builder
      .addDefaultCase(state => state)
  }
});

// export session actions
export const { authenticate, handleError, test, logout } = sessionSlice.actions;

// export session reducer
export default sessionSlice.reducer;
