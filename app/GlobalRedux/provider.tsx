"use client";

import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { moviesApi } from "./api/movieSlice";
import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ApiProvider api={moviesApi}>{children}</ApiProvider>
    </Provider>
  );
}
