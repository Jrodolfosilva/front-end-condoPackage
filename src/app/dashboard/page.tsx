
'use client'

import { useContext } from "react"
import { ContextUserConnected } from "./context/context-api"

export default function DashboardPainel (){

    const userConnected = useContext(ContextUserConnected)
    return(
        <section style={{backgroundColor:"#F8FAFB",flexGrow:1}}>
            

        </section>
    )
}