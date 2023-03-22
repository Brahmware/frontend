import { createSlice } from "@reduxjs/toolkit";

export const contactSchema = {

    fullName: {
        firstName: '',
        middleName: '',
        lastName: ''
    },

    email: '',
    organization: '',
    subject: '',
    message: ''
};

export const emailSchema = {
    address: '',
    verified: false,
    emailOtp: '',
};

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactSchema,
    reducers: {

        setItemsForOTP: (state, action) => {
            const { fullname, email } = action.payload;
            state.contact = { ...state.contact, fullname, email };
        },

        setContact: (state, action) => {
            const { ...contact } = action.payload;
            state.contact = { ...contact };
        }
    }
});

export const { setItemsForOTP, setContact } = contactSlice.actions;
export default contactSlice.reducer;

export const selectCurrentContact = (state) => state.contact;
export const selectItemsForOTP = (state) => ({
    fullName: state.contact.fullName,
    email: state.contact.email,
});