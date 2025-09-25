import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice=createSlice({
    name:'token',
    initialState:null,
    reducers:{
        creation:(state,action)=>action.payload,
        deletion:()=>null
    }
});

export const {creation,deletion} =tokenSlice.actions;
export default tokenSlice.reducer;