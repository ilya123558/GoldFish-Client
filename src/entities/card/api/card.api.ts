import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICard, ICardList, ISort } from "../types";

export const cardAPI = createApi({
  reducerPath: "cardAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/product`,
  }),
  tagTypes: ['Card'],
  endpoints: (build) => ({
    getCardById: build.query<ICard, string | number>({
      query: (cardId) => ({
        url: `/${cardId}`
      })
    }),
    getCards: build.query<ICardList, unknown>({
      query: () => ({
        url: `/all`
      })
    }),
    getCardsByIds: build.query<ICardList, (string | number)[]>({
      query: (cardIdList) => ({
        url: `/all-by-ids?productIdList=${cardIdList}`
      })
    }),
    getCardsByCategory: build.query<ICardList, string>({
      query: (categoryUrl) => ({
        url: `/all-by-category?categoryUrl=${categoryUrl}`
      })
    }),
    getCardsDiscount: build.query<ICardList, unknown>({
      query: () => ({
        url: `all-discount`
      })
    }),
    getCardsLimited: build.query<ICardList, unknown>({
      query: () => ({
        url: `all-limited`
      })
    }),
    getCardsRecommendation: build.query<ICardList, number | null>({
      query: (limit) => ({
        url: `/recommendation?limit=${limit ? limit : 3}`
      })
    }),
    getCardsRecommendationByCategory: build.query<ICardList, { categoryUrl: string, cardId: string | number }>({
      query: ({ categoryUrl, cardId }) => ({
        url: `/recommendation-by-category?categoryUrl=${categoryUrl}&productId=${cardId}`
      })
    }),
    getCardsSorted: build.mutation<ICardList, ISort>({
      query: (sort) => ({
        url: `/sort`,
        method: "POST",
        body: sort
      }),
      invalidatesTags: ['Card']
    }),
  })
})

export const {
  useGetCardByIdQuery,
  useGetCardsQuery,
  useGetCardsByIdsQuery,
  useGetCardsByCategoryQuery,
  useGetCardsDiscountQuery,
  useGetCardsLimitedQuery,
  useGetCardsRecommendationQuery,
  useGetCardsRecommendationByCategoryQuery,
  useLazyGetCardByIdQuery,
  useLazyGetCardsQuery,
  useLazyGetCardsByIdsQuery,
  useLazyGetCardsByCategoryQuery,
  useLazyGetCardsDiscountQuery,
  useLazyGetCardsLimitedQuery,
  useLazyGetCardsRecommendationQuery,
  useLazyGetCardsRecommendationByCategoryQuery,
  useGetCardsSortedMutation
} = cardAPI