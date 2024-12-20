import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1, 
        value: 0
    },
    {
        id: 2, 
        value: 0
    }
]

export const counterTotalSlice = createSlice({
    name: 'counterTotal', 
    initialState, 
    reducers: {
        increment: (state, action)=> {
            const counterId = state.findIndex((s)=> s.id === action.payload)
            state[counterId].value++
        }, 
        decrement: (state, action)=> {
            const counterId = state.findIndex((s)=> s.id === action.payload)
            state[counterId].value--
        }, 

    }
})

export const {increment, decrement} = counterTotalSlice.actions

export default counterTotalSlice.reducer
