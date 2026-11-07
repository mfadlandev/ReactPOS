
  import { createContext, useContext, useState } from "react";
  import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
  import apiClient from "../utils/apiClient";

  // Buat konteks
  const ProductContext = createContext();

  export const ProductProvider = ({ children }) => {
    const queryClient = useQueryClient();

    // PARAMETER PAGINATION DAN FILTER
    const [productParams, setProductParams] = useState({
      page: 1,
      limit: 8,
      category_id: "",
      keyword: "",
    });

    // GET PRODUCTS
    const getProducts = async ({
      page = 1,
      limit = 8,
      category_id = "",
      keyword = "",
    }) => {
      const res = await apiClient.get("/products", {
        params: {
          page,
          limit,
          category_id,
          keyword,
        },
      });

      return res.data;
    };

    // GET ALL PRODUCTS + PAGINATION
    const {
      data: productResponse,
      isLoading,
      isError,
      isFetching,
    } = useQuery({
      queryKey: ["products", productParams],
      queryFn: () => getProducts(productParams),
      placeholderData: (previousData) => previousData,
    });

    const products = productResponse?.data ?? [];
    const pagination = productResponse?.meta;

    // SHOW PRODUCT DETAIL
    const getProductById = async (id) => {
      const res = await apiClient.get(`/products/${id}`);
      return res.data.data;
    };

    // STORE PRODUCT
    const addProduct = async (formData) => {
      try {
        const response = await apiClient.post("/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        queryClient.invalidateQueries({ queryKey: ["products"] });
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

        queryClient.invalidateQueries({ queryKey: ["products"] });
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
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });

    // GET CATEGORIES
    const getCategories = async () => {
      const res = await apiClient.get("/categories");
      return res.data;
    };

    return (
      <ProductContext.Provider
        value={{
          products,
          pagination,
          isLoading,
          isError,
          isFetching,
          productParams,
          setProductParams,
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


  // eslint-disable-next-line react-refresh/only-export-components
  export const useProducts = () => useContext(ProductContext);
