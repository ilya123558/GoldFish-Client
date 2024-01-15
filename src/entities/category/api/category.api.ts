import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategoryList } from "../types/index.interface";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/category`,
  }),
  endpoints: (build) => ({
    getCategoriesByCotalog: build.query<ICategoryList, string>({
      query: (cotalogUrl) => ({
        url: `/all-by-cotalog?cotalogUrl=${cotalogUrl}`
      })
    })
  })
})

export const {useGetCategoriesByCotalogQuery, useLazyGetCategoriesByCotalogQuery} = categoryAPI