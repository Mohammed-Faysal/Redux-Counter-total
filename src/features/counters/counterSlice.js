import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        count: 0
    }, 
    reducers: {
        increment: (state) => {
           state.count++
        }, 
        incBy: (state, action) => {
           state.count = state.count + action.payload
        }, 
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const {increment, incBy, decrement, reset} = counterSlice.actions

export default counterSlice.reducer