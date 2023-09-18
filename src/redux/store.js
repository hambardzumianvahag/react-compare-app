import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "./slices/fruitStore";
export const store = configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});
