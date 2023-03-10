import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const timeRecordApi = createApi({
  reducerPath: "timerecord",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  tagTypes: ["Punch"],
  endpoints(builder) {
    return {
      addPunchIn: builder.mutation({
        invalidatesTags: ["Punch"],
        query: (data) => {
          return {
            url: "/time_records",
            method: "POST",
            body: {
              time: data.time,
              emp_num: data.emp_num,
              date: data.date,

              type: data.type,
            },
          };
        },
      }),

      addPunchOut: builder.mutation({
        invalidatesTags: ["Punch"],
        query: (data) => {
          return {
            url: `/time_records/${data.id}`,
            method: "PATCH",
            body: {
              clock_out: data.clock_out,
            },
          };
        },
      }),
      fetchRecord: builder.query({
        providesTags: (result, error, employee) => {
          const tags = result.map((punch) => {
            return { type: "Punch", id: punch.id };
          });
          tags.push({ type: "EmpyloyePunch", id: employee.emp_num });
          return tags;
        },
        query: (employee) => {
          return {
            url: "/time_records",
            params: {
              emp_num: employee.emp_num,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchRecordQuery, useAddPunchInMutation } = timeRecordApi;

export { timeRecordApi };
