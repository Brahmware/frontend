import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../../features/auth/authSlice";
import errorReducer from "../../features/errors/errorSlice";
import usersReducer from "../../features/users/usersSlice";
import myReducer from "../../features/me/mySlice";
import contactReducer from "../../features/contact/contactSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        error: errorReducer,
        users: usersReducer,
        me: myReducer,
        contact: contactReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});