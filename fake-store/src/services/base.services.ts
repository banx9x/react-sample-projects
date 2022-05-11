import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api/',
});

export default baseQuery;
