import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './modules/tasks';

const rootReducer = combineReducers({
  tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
