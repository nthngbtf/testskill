import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeApi = createApi({
  reducerPath: "employee",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchEmployee: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((employee) => {
            return { type: "Employee", id: employee.emp_num };
          });
          tags.push({ type: "Employee", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/employee",
            params: {
              user_id: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchEmployeeQuery } = employeeApi;

export { employeeApi };
