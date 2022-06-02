import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  //unique string to identify the api
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  //endpoint: function that returns object with different fetch Methods i.e get , post del etc.
  //endpoint: function that returns object that has fetchMethods just like apiService.js file
  endpoints: (builder) => ({
    //! getAllPost
    getAllPost: builder.query<{}, IPosts[]>({
      query: () => ({
        //?  "baseUrl+"posts"
        url: 'posts',
        method: 'GET',
      }),
    }),
  }),
});

// export generated hooks
//! use+getAllPost.titleCase()+Query
export const { useGetAllPostQuery } = postApi;
