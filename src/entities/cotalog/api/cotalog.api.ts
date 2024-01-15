import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICotalogList } from "../types/index.interface";

export const cotalogAPI = createApi({
  reducerPath: "cotalogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/cotalog`,
  }),
  endpoints: (build) => ({
    getCotalogs: build.query<ICotalogList, unknown>({
      query: () => ({
        url: `/all`
      })
    })
  })
})

export const { useGetCotalogsQuery, useLazyGetCotalogsQuery} = cotalogAPI