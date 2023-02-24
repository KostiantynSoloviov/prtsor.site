import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slice/pageSlice";

export default configureStore({
  reducer: {
    pageReducer: pageReducer,
  },
});
