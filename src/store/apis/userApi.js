import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const userApi = createApi({
    reducerPath:'users',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000'
    }),
    endpoints(builder){
        return {
            addUser:builder.mutation({
                invalidatesTags:(result,error,user)=>{
                    return [{type:'User',id:user.id}]
                }, 
               query:([username,password,isSeller,id])=>{
                // console.log(data,y,x);
                return {
                    url:'/user',
                    method:'POST',
                    body:{
                        username:username,
                        password:password,
                        type : isSeller,
                        id:id
                    }
                }
               }
            }),
            fetchUser:builder.query({
                query:(user)=>{
                    console.log(user);
                    return {
                        url:'/user',
                        params:{
                            userid:user.id,
                            type:user.type
                         },
                        method:'GET',
                        
                    }
                }
            })
        }
    }
})
export const {
    useAddUserMutation,
    useFetchUserQuery,
} = userApi;

export {userApi};