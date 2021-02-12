import { combineReducers, getDefaultMiddleware, createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

export const store = createStore({
    reducer: rootReducer,
    middleware: middleware
});