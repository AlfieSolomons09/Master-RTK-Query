import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
    reducer: {
        [myApi.reducerPath]: myApi.reducer,
        [myreducer.name] : myreducer.reducer
    },
    middleware: (mid) => mid().concat(myApi.middleware),
})