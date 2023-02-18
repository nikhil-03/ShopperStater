import { useState } from "react"
import { useAddUserMutation, useFetchUserQuery } from "../store";
import { v4 as uuidv4 } from 'uuid';


function LoginPage(props){
   const [username,setUsername]=useState('');
   const [password,setPassword]=useState('');
   const [register,setRegister]=useState(true);
   const [isSeller,setIsSeller]=useState('Sell Online');
   
   const [addUser,results]=useAddUserMutation();
   const {data,error,isFetching}=useFetchUserQuery([username,password]);

   const handleAddUser=(event)=>{
      if(!register){
        addUser([username,password,isSeller,uuidv4()]);
        event.preventDefault();
        console.log(results);
      }else{
         console.log(data);
      }
   }
   const handleLogin=()=>{
    props.nav('/createshop');
   }


    return(
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
    <div className="container py-12 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-6/12 px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="/log-image.png"
                      alt="logo"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Developer Team</h4>
                  </div>
                  <form onClick={handleAddUser}>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-4">
                    <select onChange={(e)=>setIsSeller(e.target.value)} className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Sell Online</option>
                        <option>Buy Online</option>
                    </select>
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      {register && <button
                        className="bg-gradient-to-r from-[#ee7724] via-[#d8363a]  to-[#b44593] inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleLogin}
                      >
                        Log in
                      </button>}
                      {!register && <button
                        className="bg-gradient-to-r from-[#ee7724] via-[#d8363a]  to-[#b44593] inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
                      </button>}
                      <a className="text-gray-500" href="#!">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <button
                        type="button"
                        onClick={(e)=>setRegister(!register)}
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        CREATE!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-[#ee7724] via-[#d8363a]  to-[#b44593]"
                
                >
                <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                  <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                  <p className="text-sm">
                    I'm here to create a whole new application which will enable every shopkeeper 
                    to sell online. They will have to connect this Web App with their database.
                    I will keep adding many features to make Shoopers and Buyers life easy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}


export default LoginPage;