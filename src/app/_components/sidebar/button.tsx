'use client'
import { useRouter } from "next/navigation"
import style from "./sidebar.module.css"
import IconLogout from "./icon-nav/icon-logout"


export default function ButtonSair(){
const route = useRouter()
function logout(){

    localStorage.removeItem('token')
    localStorage.removeItem('refresh')

    alert('clicou')


}

    return(
            <button className={style.buttonSair} onClick={logout}>
                <IconLogout/>
                Sair
            </button>
        
    )
}