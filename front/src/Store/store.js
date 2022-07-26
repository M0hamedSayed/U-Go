import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import sideNavSlice from "./Slices/sideNavSlice";

const store = configureStore({
    reducer: { auth: authSlice, sideNav: sideNavSlice },
    devTools: true
});

export default store;