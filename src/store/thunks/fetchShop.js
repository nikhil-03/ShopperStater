import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchShops=createAsyncThunk('shops/fetch',async()=>{
    const response = await axios.get('http://localhost:500/shops');
    return response.data;
})

export {fetchShops}