import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartTog : false },
    reducers: {
        toggle(state) {
            state.cartTog = !state.cartTog;
        }
    }

})

export const uiActions = uiSlice.actions;

export default uiSlice;