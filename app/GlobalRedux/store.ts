"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";
import { moviesApi } from "./api/movieSlice";
import { tvApi } from "./api/tvSlice";
import { popularApi } from "./api/popularSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [tvApi.reducerPath]: tvApi.reducer,
    [popularApi.reducerPath]: popularApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      tvApi.middleware,
      popularApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
