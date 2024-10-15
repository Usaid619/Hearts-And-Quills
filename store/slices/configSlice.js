import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
    sessionTime:5
    },
    reducers:{
        addSessionTime : (state,action) =>{
        state.sessionTime = action.payload 
        }
    }
})

export const {addSessionTime} = configSlice.actions

export default configSlice.reducer