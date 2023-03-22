import { apiSlice } from "../../app/api/apiSlice";
import { setAllUsers } from "./usersSlice";
import { setError } from "../errors/errorSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllUsers: builder.mutation({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAllUsers(
                        {
                            users: [...data]
                        }
                    ));
                }
                catch (error) {
                    console.log(error)
                    dispatch(setError({ fullError: error }));
                }
            }
        }),

        getUser: builder.mutation({
            query: (username) => ({
                url: `/users/${username}`,
                method: 'GET'
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        addNewUser: builder.mutation({
            query: (userdata) => ({
                url: `/users`,
                method: 'POST',
                body: { ...userdata }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        updateUser: builder.mutation({
            query: ({ username, ...updates }) => {
                return ({
                    url: `/users/${username}`,
                    method: 'PATCH',
                    body: { ...updates }
                })
            },
        }),

        deleteUser: builder.mutation({
            query: (username) => ({
                url: `/users/${username}`,
                method: 'DELETE'
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
});

export const {
    useGetAllUsersMutation,
    useGetUserMutation,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApiSlice;