import { combineReducers, getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./sliceStore/mainSlice";
import tableSlice from "./sliceStore/tableSlice";

// Главный reducer
const rootReducer = combineReducers({
    main: mainSlice,
    table: tableSlice,
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