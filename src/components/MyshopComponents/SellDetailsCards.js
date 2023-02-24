// 
import { useState } from "react";

function SellDetailCard(){
    const [productSold,setProductSold]=useState(8)
    const [Todaysold,setTodaysold]=useState(58500)
    const [Todayordercount,setTodayordercount]=useState(4)
    const [Monthordercount,setMonthordercount]=useState(27)

    return (
        <div className="px-12 py-8 bg-gradient-to-r from-fuchsia-600 to-pink-600 max-w-md rounded overflow-hidden shadow-lg">
            <div className="pr-6 py-4">
              <div className="font-bold text-white text-2xl mb-2">Your Selling Details</div>
              <hr className="p-1"/>
              <ul className="text-slate-100 list-none text-m">
                 <li>Product Sold : {productSold}</li>
                 <li>Today's Business :Rs: {Todaysold}</li>
                 <li>Today's Order Count : {Todayordercount}</li>
                 <li>Month's Order Count : {Monthordercount}</li>

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

export default SellDetailCard;