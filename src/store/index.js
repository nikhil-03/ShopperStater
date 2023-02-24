import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";
import { productsApi } from "./apis/productApi";
import { shopsReducer } from "./slices/shopSlice";


export const store=configureStore({
    reducer:{
        shops:shopsReducer,
        [userApi.reducerPath]:userApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(productsApi.middleware);
    }
})

export * from './thunks/addShop';
export * from './thunks/fetchShop';
export {useAddUserMutation, useFetchUserQuery} from './apis/userApi';
export { useAddProductMutation,useFetchProductsQuery} from './apis/productApi'
