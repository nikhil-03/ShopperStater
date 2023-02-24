import { Fragment, useEffect, useState } from "react";
import { useFetchProductsQuery } from "../../../store";

function ShowTable({data,config,keyFn,id}){
  // const {newdData,error,isFetching}=useFetchProductsQuery(id);
  // console.log(useFetchProductsQuery(id));
  const [searchval,Setsearchval]=useState('');

  const HandleOnchangeSearch=(e)=>{
    Setsearchval(e.target.value); 
    data=data.filter((product)=>{
      // console.log(product.productname);
     return product.productname.toLowerCase().includes(searchval.toLowerCase())
    })
    console.log(data);
}
//  useEffect(()=>{
//      renderedRows
//  },[searchval]) 
 
   const renderedHeaders=config?.map((column)=>{
    if(column?.header){
        return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th className="px-6 py-3" key={column.label}>{column.label}</th>;
   })
   const renderedRows = data?.map((rowData)=>{
    
    const renderedCells=config?.map((column)=>{
       return (
           <td className=" px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={column.label}>
               {column.render(rowData)}
           </td>
       )
    })
    return (
       <tr className="bg-slate-600 border-b  dark:border-gray-700 " key={keyFn(rowData)}>
       {renderedCells}
     </tr>
    )
  })


  


  //  console.log(renderedRows[0].props.children[1].props)
    return (<div>
    <div className="overflow-x mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
      <form  className="pb-4 py-4">   
       <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
         <input value={searchval} onChange={HandleOnchangeSearch}  type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products..." required/>
         <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
       </div>
     </form>
      <table className="table-auto overflow-y-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>{ renderedHeaders}</tr>
      </thead>
      <tbody className="h-fit">{renderedRows}</tbody>
      
    </table>
    </div>
    {/* <div className="px-96 items-center py-3">
      <button onClick={handleleftClick} className="ml-12 mr-32 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Prev</button>
      <button onClick={handleRightClick} className="ml-32 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Next</button>
    </div> */}
    </div>
    )
}

export default ShowTable;
