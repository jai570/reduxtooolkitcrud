import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/StudentSLice";
const store = configureStore({
  reducer: {
    student: StudentReducer,
  },
});
export default store;
