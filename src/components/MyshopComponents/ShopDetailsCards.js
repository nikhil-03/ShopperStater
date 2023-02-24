import { useState } from "react";

function CardDetailCard({props}){
    // const [username,setUsername]=useState("Nikhil")
    // const [mobile,setMobile]=useState("7979047466")
    // const [address,setAddress]=useState("JE-1, Road-5 ,Vastu vihar, chira chas, Bokaro Steel city")
    return (
        <div className="px-12 py-8 bg-gradient-to-r from-pink-500 to-rose-500 max-w-md rounded overflow-hidden shadow-lg">
            <div className="pr-6 py-4">
              <div className="font-bold text-white text-2xl mb-2">Your shop Details</div>
              <hr className="p-1"/>
              <ul className="text-slate-100 list-none text-m">
                 <li>Name : {props.email}</li>
                 <li>Mob No : {props.mobileno}</li>
                 <li>Address : {props.address}</li>
                 <li>PINCODE : {props.pincode}</li>

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

export default CardDetailCard;