'use client'

import { useRouter } from "next/navigation";
import {createContext,useEffect, useState } from "react";

interface IUserData {
    msg:string,
    user:{
        name:string,
        email:string,
        phone:string,
        address:string
    },
    token:{
        acess:string
        refresh: string
    }

}

export const ContextUserConnected =  createContext<IUserData | null>(null)



export function ContextAPI({children}:{children:React.ReactNode}){
    
const route = useRouter()
const [user, setUser] = useState<IUserData | null>(null)
const userConect:string|null = localStorage.getItem('usuário') //vai da erro pq esse trecho é executado SSR e dpois hidrativo no SSC


async function verifyToken(tokenUser:string) {
   await fetch('http://localhost:5000/auth/token',{
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${tokenUser}`
        }
    })
    .then((res)=>{

        if(res.status !== 200){


            alert('Não foi possivel conecta-se ao servidor')

        setTimeout(()=>{
            route.push('/login')
        },3000)
            //chamo a função de Refresh token - se ele tambem for diferente de 200 eu redireciono para /login
            //e limpo o usuário do localstorege 

            return
        }
       
        
        ///adicionar ou atualizar nosso user com os novos token
        

    })
    .catch((error)=>{

        alert('Não foi possivel conecta-se ao servidor')

        setTimeout(()=>{
            route.push('/login')
        },3000)
        
    })

    
}

useEffect(()=>{
    
    if(!userConect){

        setTimeout(()=>{route.push('/login')},5000)

        return
        
    }
   
    const parseToken:IUserData = JSON.parse(userConect)

    verifyToken(parseToken.token.acess)
        //Verifico se o token é valido se não for verifico o refresh e gero um novo
        // salvo no state user os dados e pass para o contexto
    setUser(parseToken)
    

   
},[])




    return(
        <ContextUserConnected.Provider value={user}>
            {userConect?children:"Você precisa está logado..."}
        </ContextUserConnected.Provider>
    )
}