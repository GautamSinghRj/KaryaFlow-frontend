import {configureStore} from "@reduxjs/toolkit";
import tokenReducer from "../features/tokenSlice.js";
import userReducer from "../features/userSlice.js"

export const store = configureStore(
    {reducer: {token:tokenReducer,username:userReducer}
});