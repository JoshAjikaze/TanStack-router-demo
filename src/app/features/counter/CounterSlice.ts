import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 1 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            if (state.value != 0){
                state.value -= 1
            }
        },

        // payloadIncrement: (state, payload:number) => {
        //     state.value += (payload | 0)
        // }

    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;