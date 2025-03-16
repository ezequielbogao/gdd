import { configureStore } from "@reduxjs/toolkit";
import deudoresReducer from "@slices/deudoresSlice";

export const store = configureStore({
    reducer: {
        deudores: deudoresReducer,
    },
});
