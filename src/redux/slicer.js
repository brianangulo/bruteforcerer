import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "slicer",
    initialState: {
        password: "",
    },
    reducers: {
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { setPassword } = slice.actions

export default slice.reducer