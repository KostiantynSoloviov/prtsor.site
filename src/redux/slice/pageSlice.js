import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        view: "View",
        menu: "Screenshots",
        color: true,
        width: ''
    },
    reducers: {
        togglePageView(state, action) {
            state.view = action.payload
        },
        togglePageMenu(state, action) {
            state.menu = action.payload
        },
        changeColor(state, action) {
            state.color = !state.color
        },
        changeWidth(state, action) {
            state.width = action.payload
        }
    }
})

export const { togglePageView, togglePageMenu, changeColor, changeWidth } = pageSlice.actions

export default pageSlice.reducer