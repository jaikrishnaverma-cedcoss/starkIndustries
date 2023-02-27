import { configureStore } from "@reduxjs/toolkit";
import MySlice from './Slice'
// store 
export const Store = configureStore({
    reducer: MySlice
})
