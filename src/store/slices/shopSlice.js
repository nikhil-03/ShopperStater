import { createSlice } from "@reduxjs/toolkit";
import { addShop } from "../thunks/addShop";
import { fetchShops } from "../thunks/fetchShop";



const shopSlice=createSlice({
    name:'shops',
    initialState:{
        isLoading:false,
        data:[],
        error:null,
    },
    extraReducers(builder){
        builder.addCase(fetchShops.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchShops.fulfilled, (state, action) => {
           state.isLoading = false;
           state.data = action.payload;
        });
        builder.addCase(fetchShops.rejected, (state, action) => {
           state.isLoading = false;
           state.error = action.error;
        });
        builder.addCase(addShop.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addShop.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data.push(action.payload);
        });
        builder.addCase(addShop.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
        });
    }
})

export const shopsReducer=shopSlice.reducer;