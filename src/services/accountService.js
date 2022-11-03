import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: builder => ({
    register: builder.mutation({
      query: data => ({
        url: '/submit',
        method: 'POST',
        body: data,
        responseHandler: 'text',
      }),
    }),
  }),
});

export const { useRegisterMutation } = accountApi;
