
import Header from "./_components/header/header"
import SideBar from "./_components/sidebar/sidebar"
import { ContextAPI } from "./context/context-api"
import style from "./layout.module.css"

export default function LayoutDash({children}:{children: React.ReactNode}){

    return(
        
        <ContextAPI>
            <div className={style.container_layout_dash}>
                <SideBar/>
                <div style={{flexGrow:1}}>   
                    <Header/>
                    <main>{children}</main>
                </div>
            </div>
        </ContextAPI>
       
    )
}