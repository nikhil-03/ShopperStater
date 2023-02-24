import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi=createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000'
    }),
    keepUnusedDataFor:360000,
    endpoints(builder){
        return{
            addProduct: builder.mutation({
                // invalidatesTags:(resust,error,arg)=>{

                // },
                
                query:(data)=>{
                    return{
                        url:`/product`,
                        method:'POST',
                        body:{
                            id:data[0].id,
                            productname:data[0].productname,
                            supplierid:data[0].supplierid,
                            unitprice:data[0].unitprice,
                            package	:data[0].package,
                            isdiscontinued:data[0].isdiscontinued,
                        }
                    }
                }
            }),
            fetchProducts: builder.query({
                // providesTags:(result,error,user)=>{

                // },
                query:(product)=>{
                    console.log("Stor->", product);
                    return{
                        url:'/product',
                        params:{
                            productId:product,
                        },
                        method:'GET'
                    }
                }
            })
        }
    }
})
export const {
    useAddProductMutation,
    useFetchProductsQuery,
} = productsApi;

export {productsApi};