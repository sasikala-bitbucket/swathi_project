import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "UserPerformance",
    "Dashboard",
    "ZohoAppRoleDetails",
    "ZomatoAppRoleDetails",
    "SwiggyAppRoleDetails",
    "MetaAppRoleDetails",
    "EmpDetails",
  ],
  endpoints: (builder) => ({
    getUserProvisioningData: builder.query({
      query: () => `client/userprovisioning`,
      providesTags: ["UserProvisioningData"],
    }),
    getLifecycleData: builder.query({
      query: () => `client/lifecyclemanagement`,
      providesTags: ["LifecycleData"],
    }),
    getEntitlementData: builder.query({
      query: () => `client/entitlementmanagement`,
      providesTags: ["EntitlementData"],
    }),
    getAccessCertification: builder.query({
      query: () => `client/accesscertification`,
      providesTags: ["AccessCerification"],
    }),
    getAccessReview: builder.query({
      query: () => `client/accessreview`,
      providesTags: ["AccessReview"],
    }),
    getUserById: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => `client/products`,
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => `client/customers`,
      providesTags: ["Customers"],
    }),
    getZohoAppRoleDetails: builder.query({
      query: () => `client/zohobigin`,
      providesTags: ["ZohoAppRoleDetails"],
    }),
    getZomatoAppRoleDetails: builder.query({
      query: () => `client/sharepoint`,
      providesTags: ["ZomatoAppRoleDetails"],
    }),
    getSwiggyAppRoleDetails: builder.query({
      query: () => `client/swiggy`,
      providesTags: ["SwiggyAppRoleDetails"],
    }),
    getMetaAppRoleDetails: builder.query({
      query: () => `client/meta`,
      providesTags: ["MetaAppRoleDetails"],
    }),
    getEmpDetails: builder.query({
      query: () => `client/empdetails`,
      providesTags: ["EmpDetails"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: {
          page,
          pageSize,
          sort,
          search,
        },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: builder.query({
      query: () => `client/geography`,
      providesTags: ["Geography"],
    }),
    getSales: builder.query({
      query: () => `sales/sales`,
      providesTags: ["Sales"],
    }),
    getAdmins: builder.query({
      query: () => `management/admins`,
      providesTags: ["Admins"],
    }),
    getUserPerformance: builder.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["UserPerformance"],
    }),
    getDashboard: builder.query({
      query: () => `general/dashboard`,
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetZohoAppRoleDetailsQuery,
  useGetZomatoAppRoleDetailsQuery,
  useGetMetaAppRoleDetailsQuery,
  useGetSwiggyAppRoleDetailsQuery,
  useGetEmpDetailsQuery,
  useGetAccessCertificationQuery,
  useGetAccessReviewQuery,
  useGetEntitlementDataQuery,
  useGetLifecycleDataQuery,
  useGetUserProvisioningDataQuery
} = api;
