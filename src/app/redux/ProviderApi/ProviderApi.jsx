"use client";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { cartApi } from "../slices/ApiSlice/cartApiSlice";
const ProviderApi = ({ children }) => {
  return <ApiProvider api={cartApi}>{children}</ApiProvider>;
};

export default ProviderApi;
