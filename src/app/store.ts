import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "app/service/dummyData";
import counterReducer from "app/features/counter/CounterSlice"; // You can give the import ay name

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath] : productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)