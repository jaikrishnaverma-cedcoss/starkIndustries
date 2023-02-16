import { configureStore } from "@reduxjs/toolkit";
import MySlice from './Slice'

export const Store = configureStore({
    reducer: MySlice
})
