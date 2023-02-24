import { useState } from "react";
import { useThunk } from "../hooks/use-thunk";
import { addShop, fetchShops } from "../store";
import axios from "axios";


function ShopForm(props){
   
//    const [doFetchShops,isLoadingShops,loadingShopsError]=useThunk(fetchShops);
   const [doCreateShop,isCreatingShop,creatingShopError]=useThunk(addShop);
   const [name,setName]=useState('');
   const [address,setAddress]=useState('');
   const [mobile,setMobile]=useState('');
   const [lat,setLat]=useState('');
   const [long,setLong]=useState('');
   const [pincode,setPincode]=useState('');
   const [nameofplace,setNameofplace]=useState('');
   const [district,setDistrict]=useState('');
   const [state,setState]=useState('');
   const [namear,setnamear]=useState([]);
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

   const handleShopAdd=(event)=>{
       event.preventDefault();
       doCreateShop({email,password,name,address,mobile,lat,long,pincode,nameofplace,district,state})
       setName('');
       setAddress('');
       setMobile('');
       setLat(''); setLong('');
       props.nav('/login');
   }
   const showposition=(position)=>{
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
   }
   const getGeolocation=()=>{
       if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(showposition)
       }
       else{
        console.log("Geolocation is not supported by this browser.");
       }
   }
   const getDetails = async()=>{
    const response = await axios.get(`http://localhost:4000/getPincodeData/${pincode}`);
    // console.log(response.data.PostOffice);
    setDistrict(response.data.PostOffice[0].District)
    setNameofplace(response.data.PostOffice[0].Circle)
    setState(response.data.PostOffice[0].State)
    response.data.PostOffice.map((namep,index)=>{
        setnamear(namear=>[...namear,namep.Name]);
        return namear;
    })
   }
   
   const handleChangeName=(event)=>{
     setName(event.target.value);
   }
   const handleChangeAddress=(event)=>{
     setAddress(event.target.value)
   }
   const handleChangeMobile=(event)=>{
    setMobile(event.target.value)
  }
  const handlePincodeChange=(event)=>{
    setPincode(event.target.value)
  }
  const handlePlaceName=(event)=>{
    setNameofplace(event.target.value)
  }
  const handleStateName=(event)=>{
    setState(event.target.value)
  }
  const handleDistrictName=(event)=>{
    setDistrict(event.target.value)
  }
  const handleOnClickPincode=()=>{
    setnamear([])
  }
 


    return <div className=" bg-gradient-to-r from-[#642b73] to-[#c6426e]">
        <h1 className=" pt-6 pl-10 pb-6 font-medium leading-tight text-5xl mt-0 mb-2 text-gray-50"> Create your own Online Shop </h1>
        <hr className=" w-84 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"></hr>
        <form className="px-48 pb-24 w-full" onSubmit={handleShopAdd}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              NAME OF SHOP
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" value={name} onChange={handleChangeName}/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
                TYPE OF SHOP
              </label>
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>General</option>
                 <option>Grocery</option>
                 <option>Medical</option>
                 <option>Electric & Electronics</option>
            </select> 
           </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
                password
              </label>
              <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
           </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              Mobile Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" value={mobile} onChange={handleChangeMobile}/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
                Address
              </label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-50 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={address} onChange={handleChangeAddress} placeholder="Write your address here..."></textarea>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
           </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 pb-20">
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              Latitude
            </label>
            <input onClick={getGeolocation} value={lat} onChange={getGeolocation} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Enter Here..."/>
           </div>
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
             <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
               Longitude
             </label>
             <input onClick={getGeolocation} value={long} onChange={getGeolocation} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Enter Here..."/>
           </div>
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              PinCode
            </label>
            <input onChange={handlePincodeChange} onClick={handleOnClickPincode} value={pincode} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Enter Here..."/>
          </div>
         </div>
         <div className="flex flex-wrap -mx-3 mb-2 pb-20">
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
             PLACE NAME
            </label>
            <select placeholder="Enter pincode first" onClick={getDetails} onChange={handlePlaceName} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            {
              namear.map((option,ind) => (
                <option key={ind} value={ind}>{option}</option>
            ))}
            </select> 
           </div>
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
             <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
               DISTRICT
             </label>
             <input onChange={handleDistrictName} value={district} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Enter Here..."/>
           </div>
           <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-50 text-lg font-bold mb-2">
              STATE
            </label>
            <input onChange={handleStateName} value={state} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Enter Here..."/>
          </div>
         </div>

           <button className="bg-transparent hover:bg-[#c6426e] text-gray-100 font-semibold hover:text-white py-4 px-8 border border-gray-500 hover:border-transparent rounded">Create My Shop</button> 
        </form>
    </div>
}

export default ShopForm;