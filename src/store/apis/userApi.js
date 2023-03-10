import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        query: (user) => {
          return {
            url: "/user",
            params: {
              id: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchUserQuery } = userApi;

export { userApi };
