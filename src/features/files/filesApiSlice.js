import { apiSlice } from "../../app/api/apiSlice";

export const fileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        uploadNewFile: builder.mutation({
            query: (file) => {
                return ({
                    url: `/backend_controller/upload_file`,
                    method: 'POST',
                    body: file
                })
            },
        })
    })
});

export const { useUploadNewFileMutation } = fileApiSlice;