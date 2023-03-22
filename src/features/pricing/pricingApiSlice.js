import { apiSlice } from "../../app/api/apiSlice";

export const pricingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllPricings: builder.mutation({
            query: () => ({
                url: '/pricings',
                method: 'GET',
            }),
        }),

        getPricing: builder.mutation({
            query: (pricingname) => ({
                url: `/pricings/${pricingname}`,
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

        addNewPricing: builder.mutation({
            query: () => ({
                url: `/pricings`,
                method: 'POST'
            }),
        }),

        updatePricing: builder.mutation({
            query: (pricingname) => ({
                url: `/pricings/${pricingname}`,
                method: 'PATCH'
            }),
        }),

        deletePricing: builder.mutation({
            query: (pricingname) => ({
                url: `/pricings/${pricingname}`,
                method: 'DELETE'
            }),
        })
    })
});

export const {
    useGetAllPricingsMutation,
    useGetPricingMutation,
    useAddNewPricingMutation,
    useUpdatePricingMutation,
    useDeletePricingMutation,
} = pricingApiSlice;