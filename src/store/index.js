import { combineReducers, getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./sliceStore/mainSlice";

// Главный reducer
const rootReducer = combineReducers({
    main: mainSlice
});

// Промежуточное ПО
const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

// Конфигурация хранилища
export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware
});