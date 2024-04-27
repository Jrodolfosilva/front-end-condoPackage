'use client'
import { useRouter } from "next/navigation"
import style from "./sidebar.module.css"
import IconLogout from "./icon-nav/icon-logout"


export default function ButtonSair(){
const route = useRouter()
function logout(){

    localStorage.removeItem('usuário')
    

    route.push('/login')


}

    return(
            <button className={style.buttonSair} onClick={logout}>
                <IconLogout/>
                Sair
            </button>
        
    )
}