import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory, ICotalogList } from "../types/index.interface";

export const cotalogAPI = createApi({
  reducerPath: "cotalogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_URL}/api/cotalog`,
  }),
  tagTypes: ['Cotalogs', 'Categories'],
  endpoints: (build) => ({
    getCotalogs: build.query<ICotalogList, unknown>({
      query: () => ({
        url: ``
      }),
      providesTags: () => ['Cotalogs']
    }),
    getCategories: build.query<ICategory, string>({
      query: (cotalog) => ({
        url: `/${cotalog}`
      }),
      providesTags: () => ['Categories']
    })
  })
})

export const {useGetCategoriesQuery, useLazyGetCategoriesQuery, useLazyGetCotalogsQuery} = cotalogAPI