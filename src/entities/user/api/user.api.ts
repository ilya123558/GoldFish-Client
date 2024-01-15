import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser, IUserAndBasketId } from '../types';
import { IUpdateUserValue } from "../types/api.interface";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/user`
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUser: build.query<IUser, unknown>({
      query: () => ({
        url: `/`,
        credentials: 'include'
      }),
      providesTags: ['User']
    }),
    getUserAndBasketId: build.query<IUserAndBasketId, unknown>({
      query: () => ({
        url: `/get-ids`,
        credentials: 'include'
      }),
      providesTags: ['User']
    }),
    updateUserStateValue: build.mutation<string, IUpdateUserValue>({
      query: ({ key, value }) => ({
        url: `/update/${key}`,
        method: 'POST',
        body: { [key]: value },
        credentials: 'include'
      }),
      invalidatesTags: ['User']
    }),
  })
})

export const {
  useGetUserQuery,
  useGetUserAndBasketIdQuery,
  useLazyGetUserQuery,
  useLazyGetUserAndBasketIdQuery,
  useUpdateUserStateValueMutation
} = userAPI
