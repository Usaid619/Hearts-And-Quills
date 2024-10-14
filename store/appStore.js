import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./slices/configurations"

const appStore = configureStore({
    reducer:{
    configurations:configSlice
    },
})

export default appStore