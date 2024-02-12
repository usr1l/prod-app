'use client'

import axios from "axios";
import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import instance from "@util/axios";

// session initial state
const initialState = {
  isAuthenticated: false,
  user: null
};

export const thunkTest = createAsyncThunk(
  'session/test',
  async (data, { dispatch }) => {
    const response = await instance.get('/auth/healthchecker');
    if (response.data) {
      console.log(response.data)
      return response.data;
    };
    return response;
  }
);

// login user thunk
export const thunkLogin = createAsyncThunk(
  'session/login',
  async ({ email, password }, { dispatch }) => {
    const response = await instance.post('/auth/login', { email, password });
    if (response.data) {
      dispatch(authenticate(response.data));
      return response.data;
    };
    return response;
  });

// authenticate user thunk
export const thunkAuthenticate = createAsyncThunk(
  'session/authenticate',
  async (data, { dispatch }) => {
    const response = await instance.get('/auth/');
    const res = await unwrapResult(response);
    if (response.ok) {
      dispatch(authenticate(res));
      return res;
    };
    return response;
  }
);

// signup user thunk
export const thunkSignup = createAsyncThunk(
  'session/signup',
  async ({ email, password, firstname, lastname, username }, { dispatch }) => {
    const response = await axios.post('/api/auth/signup', { email, password, firstname, lastname, username });
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
    }
  },
  extraReducers: builder => {
    builder
      .addDefaultCase(state => state)
  }
});

export const { login, authenticate } = sessionSlice.actions;

export default sessionSlice.reducer;
