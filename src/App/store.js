import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/checkSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
