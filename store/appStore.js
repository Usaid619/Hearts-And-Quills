import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice"
import userSlice from "./slices/userSlice"

const appStore = configureStore({
    reducer:{
    config:configSlice,
    user:userSlice,
    },
})

export default appStore