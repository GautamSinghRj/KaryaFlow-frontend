import {createSlice} from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'username',
    initialState:null,
    reducers:{
        set:(state,action)=>action.payload,
        remove:()=>null
    }
});

export const{set,remove}=userSlice.actions;
export default userSlice.reducer;