import { useState } from "react";
import ShopControl from '../components/ShopAdmin'
import ShopForm from "../components/ShopForm";

function MyShop(){
    const [user,setuser]=useState(false);


    return (
    <div>
      {!user && <ShopForm/>}
      {user && <ShopControl/>}
    </div>
  );
}

export default MyShop;