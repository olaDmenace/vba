// import { createStore } from 'redux'

// const accessLevelReducer = (state, action) => { }

// const store = createStore();

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "react-redux";

import authSliceReducer from "./authSlice";



const store = configureStore({
    reducer: { auth: authSliceReducer }
})

export default store