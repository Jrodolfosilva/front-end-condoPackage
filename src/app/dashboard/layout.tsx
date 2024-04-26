import SideBar from "../_components/sidebar/sidebar"
import { ContextAPI } from "./context/context-api"
import style from "./layout.module.css"

export default function LayoutDash({children}:{children: React.ReactNode}){

    return(
        
        <ContextAPI>
            <div className={style.container_layout_dash}>
            <SideBar/>
            <div>   
                <header>Top bar</header>
                <main>{children}</main>
            </div>
            
            
            </div>
        </ContextAPI>
       
    )
}