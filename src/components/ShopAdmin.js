import axios from "axios";
import ShopDetailCard from "./MyshopComponents/ShopDetailsCards";
import Heading from "./MyshopComponents/heading";
import ProductDetailCard from "./MyshopComponents/ProductDetailsCard";
import SellDetailCard from "./MyshopComponents/SellDetailsCards";
import TablePage from "./MyshopComponents/Table";
import SidePanel from "./MyshopComponents/SidePanel";
import { useEffect, useState } from "react";

function ShopAdmin(){
    const [userData,setUserData]=useState([]);
   
      //  const handleLogin=()=>{
    useEffect(()=>{
      axios({
        method:'GET',
        withCredentials:true,
        url:'http://localhost:4000/user'
      })
      .then((res)=>{
          console.log(res.data.username[0]);  //data: "Success Autheticated"
         setUserData(res.data.username[0]);
      }
      ) 
    },[])  
    return (
      <div className="container mx-2 grid grid-cols-6 gap-4 mt-4">
        <div className="bg-gray-300 px-4 pb-10 rounded overflow-hidden shadow-lg">
          <SidePanel props={userData}/>
        </div>
        <div className="col-span-5">
           <Heading name={userData.name}/>
           <div className="grid grid-cols-3 gap-4">
            <ShopDetailCard props={userData}/>
            <ProductDetailCard props={userData}/>
            <SellDetailCard/>
           </div>
           <TablePage props={userData}/>
        </div>
    </div>
    )
}

export default ShopAdmin;