import {  useFetchProductsQuery } from "../store";

function GetProduct(){
    const {data,error,isFetching}=useFetchProductsQuery(1)
    console.log(data , error,isFetching);
    return <div>
        data
    </div>
}


export default GetProduct;