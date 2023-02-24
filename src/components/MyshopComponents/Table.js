import { useFetchProductsQuery } from "../../store";
import ShowTable from "./TableComponents/ShowTable";
import SortableTable from "./TableComponents/SortableTable";

function TablePage({props}){

   const {data,error,isFetching}=useFetchProductsQuery(props.shopid)
//    const data=[];
   const config=[
    {
        label:'ProductCode',
        render:(product)=>product.productcode,
    },
    {
        label:'ProductName',
        render:(product)=>product.productname,
        sortValue:(product)=>product.productname,
    },
    {
        label:'ProductVendor',
        render:(product)=>product.productvendor,
    },
    {
        label:'QuantityInStock',
        render:(product)=>product.quantityinstock,
        sortValue:(product)=>product.quantityinstock,
    },
    {
        label:'BuyPrice',
        render:(product)=>product.buyprice,
        sortValue:(product)=>product.buyprice,
    },
    {
        label:'MSRP',
        render:(product)=>product.msrp,
        sortValue:(product)=>product.msrp,
    }
   ]
   const keyFn = (product) => {
    return product.productcode;
  };
    return (<div>
       <SortableTable data={data} config={config} keyFn={keyFn} id={props.shopid}/>
    </div>
    )
}

export default TablePage;