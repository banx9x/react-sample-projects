import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './base.services';

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery,
  endpoints: (builder) => ({
    getNewArivals: builder.query({
      query: () => 'new-arivals',
    }),

    getAllProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export default productApi;
export const { useGetNewArivalsQuery, useGetAllProductsQuery } = productApi;
