import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../reducers/appSlice";
const appStore =configureStore({
    reducer:{
        app:appSlice,
    }
})

export default appStore;