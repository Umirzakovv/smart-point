import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { getLocalStorage } from 'shared/lib';

const baseUrl = import.meta.env.VITE_APP_URL_DEV;

const baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const rawResult = await fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getLocalStorage('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  return rawResult;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [''],
});
