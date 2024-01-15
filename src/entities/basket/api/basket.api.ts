import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBasket, IResetBasket, IUpdateBasket } from "../types/index.interface";

export const basketAPI = createApi({
  reducerPath: "basketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/basket`,
    
  }),
  tagTypes: ['Basket'],
  endpoints: (build) => ({
    getAllProductsInBasket: build.query<IBasket[], { basketId: string }>({
      query: ({ basketId }) => ({
        url: `/all-products?basketId=${basketId}`
      }),
      providesTags: ['Basket']
    }),
    getTotalPriceFromBasket: build.query<number, { basketId: string }>({
      query: ({ basketId }) => ({
        url: `/get-total-price?basketId=${basketId}`
      }),
      providesTags: ['Basket']
    }),
    addProductInBasket: build.mutation<IBasket, IUpdateBasket>({
      query: (data) => ({
        url: `/add-product`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Basket']
    }),
    incProductInBasket: build.mutation<IBasket, IUpdateBasket>({
      query: (data) => ({
        url: `/inc`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Basket']
    }),
    decProductInBasket: build.mutation<IBasket, IUpdateBasket>({
      query: (data) => ({
        url: `/dec`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Basket']
    }),
    deleteProductInBasket: build.mutation<IBasket, IUpdateBasket>({
      query: (data) => ({
        url: `/delete`,
        method: 'DELETE',
        body: data
      }),
      invalidatesTags: ['Basket']
    }),
    resetBasket: build.mutation<IBasket, IResetBasket>({
      query: (data) => ({
        url: `/delete-all`,
        method: 'DELETE',
        body: data
      }),
      invalidatesTags: ['Basket']
    }),
  })
})

export const {
  useGetAllProductsInBasketQuery,
  useLazyGetAllProductsInBasketQuery,
  useGetTotalPriceFromBasketQuery,
  useLazyGetTotalPriceFromBasketQuery,
  useAddProductInBasketMutation,
  useIncProductInBasketMutation,
  useDecProductInBasketMutation,
  useDeleteProductInBasketMutation,
  useResetBasketMutation
} = basketAPI