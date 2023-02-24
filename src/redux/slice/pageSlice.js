import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        view: "View",
    },
    reducers: {
        togglePageView(state, action) {
            state.view = action.payload
        }
    }
})

export const { togglePageView } = pageSlice.actions

export default pageSlice.reducer