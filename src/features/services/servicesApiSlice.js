import { apiSlice } from "../../app/api/apiSlice";

export const serviceApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllServices: builder.mutation({
            query: () => ({
                url: '/services',
                method: 'GET',
            }),
        }),

        getService: builder.mutation({
            query: (servicename) => ({
                url: `/services/${servicename}`,
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

        addNewService: builder.mutation({
            query: () => ({
                url: `/services`,
                method: 'POST'
            }),
        }),

        updateService: builder.mutation({
            query: (servicename) => ({
                url: `/services/${servicename}`,
                method: 'PATCH'
            }),
        }),

        deleteService: builder.mutation({
            query: (servicename) => ({
                url: `/services/${servicename}`,
                method: 'DELETE'
            }),
        })
    })
});

export const {
    useGetAllServicesMutation,
    useGetServiceMutation,
    useAddNewServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApiSlice;