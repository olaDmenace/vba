// import { createStore } from 'redux'

// const accessLevelReducer = (state, action) => { }

// const store = createStore();

import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./authSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";


const configPersist = {
    key: 'root',
    version: 1,
    storage
}



const persistedReducer = persistReducer(configPersist, authSliceReducer)

const store = configureStore({
    reducer: { auth: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)


export { store, persistor }