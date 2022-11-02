import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const colorApi = createApi({
  reducerPath: 'colorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => `/colors`,
    }),
  }),
})

export const { useGetColorsQuery } = colorApi
