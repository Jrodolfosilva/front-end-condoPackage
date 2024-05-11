
'use client'

import { useContext } from "react"
import { ContextUserConnected } from "./context/context-api"
import style from "./page.module.css"

export default function DashboardPainel (){

    const userConnected = useContext(ContextUserConnected)
    return(
        <section className={style.container_panel_dashboard}>
           <div className={style.container_content_overview}>
                <h2>Overview</h2>
                <ul>
                    <li>
                        <p>Unidades Atendidas</p>
                        <h5>860</h5>
                        <span>Encomendas</span>
                    </li>
                    <li>
                        <p>Recebimentos</p>
                        <h5>860</h5>
                        <span>Encomendas</span>

                    </li>
                    <li>
                        <p>Entregues</p>
                        <h5>860</h5>
                        <span>Encomendas</span>
                    </li>
                </ul>
           </div>
           <div className={style.container_content_historic}>
              <div>
                  <h2>Histórico de encomendas </h2>
                  <button>Ver mais</button>
              </div>
              <div>
                
              </div>
                
           </div>
            

        </section>
    )
}