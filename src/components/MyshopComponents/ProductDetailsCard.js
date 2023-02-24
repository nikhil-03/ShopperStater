import { useEffect, useState } from "react";
import { useFetchProductsQuery } from "../../store";

function ProductDetailCard({props}){
   
    const {data,error,isFetching} = useFetchProductsQuery(props.shopid);
    
    // console.log(data , error , isFetching);

    const [productCategories,setproductCategories]=useState(["Grocery , ","Vegetable"])
    const [brands,setBrands]=useState(["Parle , ", "Cadbury"])
    const [productCount,setProductCount]=useState(0);
    const [totalprice,setTotalprice]=useState(0);

   
  
    if(error){
       console.log(error);
    }else if(isFetching){
      console.log("Data is being fetched");
    }else{
      // console.log(data);
    }

    useEffect(()=>{
      // const TotalProduct = () =>{
        data?.map((x,y)=>setProductCount(y))
        let total=0;
        data?.forEach(item => {
           total+=item?.quantityinstock*parseFloat(item?.buyprice?.slice(1));
          //  console.log(item);
        });
        setTotalprice(total?.toFixed(2))
      // }
      // TotalProduct();
    },[isFetching])
    // console.log(data.length)
    // setProductCount(data.length)
    return (
        <div className="px-12 py-8 bg-gradient-to-r from-red-500 to-orange-500 max-w-md rounded overflow-hidden shadow-lg">
            <div className="pr-6 py-4">
              <div className="font-bold text-white text-2xl mb-2">Your Product Details</div>
              <hr className="p-1"/>
              <ul className="text-slate-100 list-none text-m">
                 <li>Product Categories : {productCategories}</li>
                 <li>Brands : {brands}</li>
                 <li>Product Count : {productCount}</li>
                 <li>Valuation $ : {totalprice}</li>
              </ul>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
          </div>
    )
}

export default ProductDetailCard;