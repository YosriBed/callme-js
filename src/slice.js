/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    username: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetching(state) {
      state.loading = true;
      state.error = false;
    },
    error(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
    setUsername(state, action) {
      state.username = action.payload.username;
    },
  },
});

export const { name, actions, reducer } = appSlice;
