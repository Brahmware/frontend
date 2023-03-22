import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({

    name: 'me',
    initialState: {
        email: '',
        fullName: {
            firstName: '',
            middleName: '',
            lastName: ''
        },
        profilePicture: '',
        roles: [],
    },

    reducers: {

        setMyData: (state, action) => {
            const { email, fullName, profilePicture, roles } = action.payload;
            state.email = email;
            state.fullName = fullName;
            state.profilePicture = profilePicture;
            state.roles = roles;
        },

    }
});

export const { setMyData } = mySlice.actions;
export default mySlice.reducer;

export const selectMyData = (state) => state.me;