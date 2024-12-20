import { configureStore } from "@reduxjs/toolkit";
import counterProvider from './../features/counters/counterSlice';
import counterTotalProvider from "../features/countersTotal/counterTotalSlice";

const store = configureStore({
    reducer: {
        singleCounter: counterProvider, 
        countersTotal: counterTotalProvider
    }
})

export default store