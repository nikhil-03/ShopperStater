import useSort from "../../../hooks/use-sort";
import ShowTable from "./ShowTable";
import {GoArrowSmallDown,GoArrowSmallUp} from 'react-icons/go';

function SortableTable(props){
    const {config,data,id} = props;
    const { sortOrder,sortBy,sortedData,setSortColumn }= useSort(
        data,
        config
      );
    const updatedConfig = config?.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header:()=>(
                <th
                   className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                   onClick={() => setSortColumn(column.label)}
                 > 
                  <div className="flex items-center">
                   {getIcons(column.label, sortBy, sortOrder)}
                   {column.label}
                  </div>
                 </th> 
            ),
        };
    });
    return <ShowTable {...props} data={sortedData} config={updatedConfig} id={id} /> 
}
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  }

  export default SortableTable;