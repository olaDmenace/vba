import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: isAuthenticated,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer

