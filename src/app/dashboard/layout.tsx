import SideBar from "../_components/sidebar/sidebar"
import style from "./layout.module.css"

export default function LayoutDash({children}:{children: React.ReactNode}){

    return(
       <div className={style.container_layout_dash}>
            <SideBar/>
            <div>   
                <header>Top bar</header>
                <main>{children}</main>
            </div>
            
            
       </div>
    )
}