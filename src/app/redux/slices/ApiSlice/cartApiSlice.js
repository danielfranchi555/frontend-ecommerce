import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/cart" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    //Query getProducts
    getProducts: builder.query({
      query: (id_user) => `/get-products/${id_user}`,
      providesTags: ["Products"],
    }),
    //Query addProduct
    addProduct: builder.mutation({
      query: (object) => ({
        url: "/add-product",
        method: "POST",
        body: object,
      }),
      invalidatesTags: ["Products"],
    }),
    //Query RemoveProduct
    removeProduct: builder.mutation({
      query: (object) => ({
        url: "/remove-product",
        method: "DELETE",
        body: object,
      }),
      invalidatesTags: ["Products"],
    }),
    //Query removeAll
    removeAll: builder.query({
      query: (user_id, cart_items) => `/remove-all-products`,
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
} = cartApi;
