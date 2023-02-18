import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";
import { shopsReducer } from "./slices/shopSlice";


export const store=configureStore({
    reducer:{
        shops:shopsReducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(userApi.middleware);
    }
})

export * from './thunks/addShop';
export * from './thunks/fetchShop';
export {useAddUserMutation, useFetchUserQuery} from './apis/userApi';