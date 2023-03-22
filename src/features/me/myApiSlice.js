import { apiSlice } from "../../app/api/apiSlice";
import { ALT } from "../../utils/keywards";
import { setError } from "../errors/errorSlice";
import { setMyData } from "./mySlice";

export const myApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMyData: builder.mutation({
            query: ({ username }) => ({
                url: `/me/${username}`,
                method: 'GET'
            }),

            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setMyData({ ...data }));
                }

                catch (error) {
                    dispatch(setError({
                        error: error?.error,
                        property: ALT,
                        message: error?.error?.data?.message
                    }));
                };
            },
        }),
    }),
});