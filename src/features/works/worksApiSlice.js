import { apiSlice } from "../../app/api/apiSlice";

export const workApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllWorks: builder.mutation({
            query: () => ({
                url: '/works',
                method: 'GET',
            }),
        }),

        getWork: builder.mutation({
            query: (workname) => ({
                url: `/works/${workname}`,
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

        addNewWork: builder.mutation({
            query: () => ({
                url: `/works`,
                method: 'POST'
            }),
        }),

        updateWork: builder.mutation({
            query: (workname) => ({
                url: `/works/${workname}`,
                method: 'PATCH'
            }),
        }),

        deleteWork: builder.mutation({
            query: (workname) => ({
                url: `/works/${workname}`,
                method: 'DELETE'
            }),
        })
    })
});

export const {
    useGetAllWorksMutation,
    useGetWorkMutation,
    useAddNewWorkMutation,
    useUpdateWorkMutation,
    useDeleteWorkMutation,
} = workApiSlice;