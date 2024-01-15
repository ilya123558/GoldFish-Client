import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IRegistration, ILogin } from "../types/index.interface";


export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/auth`
  }),
  endpoints: (build) => ({
    isAuth: build.query<any, unknown>({
      query: () => ({
        url: `/`,
        credentials: 'include'
      })
    }),
    registration: build.mutation<{userId: string}, IRegistration>({
      query: data => ({
        url: `/registration`,
        method: 'POST',
        body: data
      })
    }),
    login: build.mutation<{userEmail: string}, ILogin>({
      query: data => ({
        url: `/login`,
        method: 'POST',
        body: data,
        credentials: 'include'
      })
    })
  })
})

export const {
  useIsAuthQuery,
  useLazyIsAuthQuery,
  useRegistrationMutation,
  useLoginMutation
} = authAPI