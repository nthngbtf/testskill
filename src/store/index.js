import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from "./apis/userApi";
import { employeeApi } from "./apis/employeeApi";
import { timeRecordApi } from "./apis/timeRecordApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [timeRecordApi.reducerPath]: timeRecordApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(employeeApi.middleware)
      .concat(timeRecordApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchUserQuery } from "./apis/userApi";
export { useFetchEmployeeQuery } from "./apis/employeeApi";
export {
  useFetchRecordQuery,
  useAddPunchInMutation,
} from "./apis/timeRecordApi";
