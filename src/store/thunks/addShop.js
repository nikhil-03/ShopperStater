import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';



const addShop = createAsyncThunk('shops/add',async(data)=>{
    const response = await axios.post('http://localhost:4000/shops',{
        id:uuidv4(),
        email:data.email,
        password:data.password,
        name:data.name,
        address:data.address,
        lat:data.lat,
        long:data.long,
        nameofplace:data.nameofplace,
        mobile:data.mobile,
        pincode:data.pincode,
        district:data.district,
        state:data.state

    });
    return response.data;
})

export {addShop};
