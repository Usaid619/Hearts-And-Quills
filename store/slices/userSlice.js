import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
    loggedUser:null
    },
    reducers:{
    addLoggedUser: (state,action) =>{
    return action.payload
    },

    removeLoggedUser: () =>{
    return null
    }
    }
})

export const {addLoggedUser,removeLoggedUser} = userSlice.actions

export default userSlice.reducer