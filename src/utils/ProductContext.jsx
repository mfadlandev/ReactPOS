import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./apiClient";
// Buat konteks
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  //pagination
  const getProducts = async ({
    page = 1,
    limit = 10,
    category_id = "",
    keyword = "",
  }) => {
    const res = await apiClient.get(
      `/products?page=${page}&limit=${limit}&category_id=${category_id}&keyword=${keyword}`,
    );
    return res.data.data;
  };

  const queryClient = useQueryClient();
  //GET ALL PRODUCTS
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await apiClient.get("/products");
      return res.data.data;
    },
  });
  // SHOW PRODUCT DETAIL
  const getProductById = async (id) => {
    const res = await apiClient.get(`/products/${id}`);
    return res.data.data;
  };
  //store product
  const addProduct = async (formData) => {
    try {
      const response = await apiClient.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      queryClient.invalidateQueries(["products"]);
      return response;
    } catch (error) {
      console.log("Gagal saat menambahkan produk");
      throw error;
    }
  };
  // UPDATE PRODUCT
  const updateProduct = async (id, formData) => {
    try {
      const response = await apiClient.post(
        `/products/${id}?_method=PUT`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      queryClient.invalidateQueries(["products"]);
      return response;
    } catch (error) {
      console.log("Gagal saat update produk");
      throw error;
    }
  };
  // DELETE PRODUCT
  const deleteProduct = useMutation({
    mutationFn: async (id) => await apiClient.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const getCategories = async () => {
    const res = await apiClient.get("/categories");
    return res.data;
  };
  // Export PROVIDER
  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        isError,
        getProductById,
        addProduct,
        updateProduct,
        deleteProduct,
        getCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);
