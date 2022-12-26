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
            localStorage.setItem('accessToken', action.payload.token)
            localStorage.setItem('firstname', action.payload.first_name)
            localStorage.setItem('lastname', action.payload.last_name)
            state.user = action.payload
        },

        logout: (state) => {
            state.isAuthenticated = false
            localStorage.clear()
            state.user = {}
        }
    }
})

export const { login, logout } = authSlice.actions;


export default authSlice.reducer

