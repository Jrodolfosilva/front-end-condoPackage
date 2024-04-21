
'use client'

import { useContext } from "react"
import { ContextUserConnected } from "../context/context-api"

export default function DashboardPainel (){

    const userConnected = useContext(ContextUserConnected)
    return(
        <section style={{backgroundColor:"#F8FAFB",flexGrow:1}}>
            <h1>Dashboard Painel: {userConnected?.msg}</h1>
            
            <h1>Dashboard Nome: {userConnected?.user.name}</h1>
            <h1>Dashboard Email: {userConnected?.user.email}</h1>
            <h1>Dashboard Telefone: {userConnected?.user.phone}</h1>
            <h1>Dashboard Endereço: {userConnected?.user.address}</h1>
            <h1>Dashboard Token com ID: {userConnected?.token.acess}</h1>

        </section>
    )
}