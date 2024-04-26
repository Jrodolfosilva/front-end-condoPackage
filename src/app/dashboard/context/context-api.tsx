"use client"

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
interface ITokens{
    token:string,
    refresh:string
}

export const ContextUserConnected =  createContext<IUserData | null>(null)

export function ContextAPI({children}:{children:React.ReactNode}){
    
const route = useRouter()
const [user, setUser] = useState<IUserData | null>(null)
const [load,setLoad] = useState(true)

useEffect(()=>{

    const validateTokenAccess = async ()=>{
        const dataUserInLocalStorage:string|null = localStorage.getItem('usuário') 

        if(!dataUserInLocalStorage){
            setTimeout(()=>{route.push('/login')},5000)
            alert("Você precisa fazer o login")
            
            return
        }

        let parseUserData:IUserData = JSON.parse(dataUserInLocalStorage)

        try {
            const verifyTokenAccess =  await fetch('http://localhost:5000/auth/token',{
                method: "POST",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${parseUserData.token.acess}`
                }
            })
        
            if(verifyTokenAccess.status === 200){
                setUser(parseUserData)
                setLoad(false)
                return
            }

            if(verifyTokenAccess.status !== 200){

                const verifyTokenRefresh =  await fetch('http://localhost:5000/auth/refresh',{
                    method: "POST",
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': `Bearer ${parseUserData.token.refresh}`
                    }
                })

                if(verifyTokenRefresh.status === 200){
                    alert("token de refresh foi validado e imprimido no console")
                    const res:ITokens = await verifyTokenRefresh.json()

                    parseUserData.token.acess =res.token
                    parseUserData.token.refresh = res.refresh

                    localStorage.setItem('usuário',JSON.stringify(parseUserData))
                    setUser(parseUserData)
                    setLoad(false)

                    console.log("O token foi revalidado e inserido no contexto e localstorage")
                }

                if(verifyTokenRefresh.status !== 200){
                    localStorage.removeItem("usuário")
                    alert("Inatividade: Você precisar se Logar novamente")
                    route.push("/login")
                }

              
            }

        } catch (error) {
                alert("Não foi possivel, conectar ao servidor. Procure o suporte!")
                route.push("/login")
        }

    }

    validateTokenAccess()
 

   
},[])




    return(
        <ContextUserConnected.Provider value={user}>
            {!load?children:"Você não está autorizado!...."}
        </ContextUserConnected.Provider>
    )
}




/*
Preciso  verificar ao recarregar a págnas:

- se tem dados do usuário salvo no localstorage
- se os dados do localstorage tem um token valido 
- se o token de acesso não for validado tentar refresh api token
- se conseguir fazer o refresh salvo os tokens no loexocalstorage
- se não tiver dados no localstorage ou não refresh: Não exibir conteúdo e redirecionar para home(telinha de aviso)


*/