import { apiSlice } from "../../app/api/apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllJobs: builder.mutation({
            query: () => ({
                url: '/careers',
                method: 'GET',
            }),
        }),

        getJob: builder.mutation({
            query: (jobId) => ({
                url: `/careers/${jobId}`,
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

        addNewJob: builder.mutation({
            query: () => ({
                url: `/careers`,
                method: 'POST'
            }),
        }),

        updateJob: builder.mutation({
            query: (jobId) => ({
                url: `/careers/${jobId}`,
                method: 'PATCH'
            }),
        }),

        deleteJob: builder.mutation({
            query: (jobId) => ({
                url: `/careers/${jobId}`,
                method: 'DELETE'
            }),
        })
    })
});

export const {
    useGetAllJobsMutation,
    useGetJobMutation,
    useAddNewJobMutation,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobApiSlice;