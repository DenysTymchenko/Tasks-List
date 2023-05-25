import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';

/* eslint-disable no-param-reassign */
const tasksSlice = createSlice({
  name: moduleName,
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasks(state) {},
    createTask(state, { payload }) {},
    deleteTask(state, task) {},
  },
});

export default tasksSlice.reducer;
export const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} = tasksSlice.actions;
