import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: { fullError: null, property: null, message: null },
    reducers: {
        setError: (state, action) => {
            const { error, property, message } = action.payload;
            state.fullError = error;
            state.property = property;
            state.message = message;
        },
        clearError: (state) => {
            state.fullError = null;
            state.property = null;
            state.message = null;
        }
    },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;

export const selectCurrentError = (state) => state.error.fullError;
export const selectCurrentErrorProperty = (state) => state.error.property;
export const selectCurrentErrorMessage = (state) => state.error.message;