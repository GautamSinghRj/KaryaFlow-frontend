import {configureStore} from "@reduxjs/toolkit";
import tokenReducer from "../features/tokenSlice.js";


export const store = configureStore(
    {reducer: {token:tokenReducer}
});