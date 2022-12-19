import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    user: {}
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            // localStorage.setItem('accessToken', action.payload.token)
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false
            localStorage.removeItem('accessToken')
            state.user = {}
        }
    }
})

export const { login, logout } = authSlice.actions;


export default authSlice.reducer

