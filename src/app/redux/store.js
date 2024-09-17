const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./userSlice";
import counterReducer from "./counterSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});
