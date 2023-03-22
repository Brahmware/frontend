import { createSlice } from "@reduxjs/toolkit";

export const userSchema = {
    username: '',
    email: '',
    fullName: {
        firstName: '',
        middleName: '',
        lastName: ''
    },
    profilePicture: '',
    roles: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        allUsers: [],
        editable: {}
    },
    reducers: {
        setEditable: (state, action) => {
            const { username } = action.payload;
            state.editable = state.allUsers?.find(user => user.username === username);
        },
        setAllUsers: (state, action) => {
            const { users } = action.payload;
            state.allUsers = users;
        }
    }
});

export const { setEditable, setAllUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const selectAllUsers = (state) => state.users.allUsers;
export const selectedUser = (state) => state.users.editable;

