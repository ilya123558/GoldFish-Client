import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IOrder } from "../types/index.interface";

export const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/order`,
  }),
  tagTypes: ['Order'],
  endpoints: (build) => ({
    getAllOrders: build.query<IOrder[], unknown>({
      query: () => ({
        url: `/get-all`,
        credentials: 'include'
      }),
      providesTags: ['Order']
    }),
    createOrder: build.mutation<unknown, { price: number }>({
      query: (data) => ({
        url: `/create`,
        method: 'POST',
        body: data,
        credentials: 'include'
      }),
      invalidatesTags: ['Order']
    }),
    updatePaidValueInOrder: build.mutation<unknown, { id: string }>({
      query: ({ id }) => ({
        url: `/update`,
        method: 'PUT',
        body: { id },
        credentials: 'include'
      }),
      invalidatesTags: ['Order']
    })
  })
})

export const {
  useGetAllOrdersQuery,
  useCreateOrderMutation,
  useUpdatePaidValueInOrderMutation
} = orderAPI