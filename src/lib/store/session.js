'use client'

import axios from "axios";
import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import instance from "@util/axios";
import { redirect } from "next/dist/server/api-utils";

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
    try {
      const response = await instance.post('/auth/login', { email, password })
      dispatch(authenticate(response.data));
      return response.data;
    } catch (error) {
      return { "errors": error.response.data.errors };
    } finally {
      if (response.data) {
        redirect('/');
      }
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
    const response = await axios.post('/auth/signup', { email, password, firstname, lastname, username });
    if (response.data) {
      dispatch(authenticate(response.data));
      return res;
    };
    return response;
  }
);

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
    test: (state, action) => {}
  },
  extraReducers: builder => {
    builder
      .addDefaultCase(state => state)
  }
});

// export session actions
export const { authenticate, handleError, test } = sessionSlice.actions;

// export session reducer
export default sessionSlice.reducer;
