import Image from "next/image";
import style from "./sidebar.module.css"
import IconPainel from "./icon-nav/icon-painel";
import IconNotify from "./icon-nav/icon-notify";
import IconPackage from "./icon-nav/icon-packages";
import IconResident from "./icon-nav/icon.resident";
import Link from "next/link";
import ButtonSair from "./button";

export default function SideBar (){

    return(
        <section className={style.container_sideBar}>

            <div>
                <Image
                    src="/logo-notify.svg"
                    width={120}
                    height={60}
                    alt=""
                />
                <nav >
                    <ul>
                        <li>
                            <Link href="/dashboard">
                            <IconPainel/>
                            <span>Painel</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/encomendas">
                            <IconPackage/>
                            <span>Encomendas</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/moradores">
                            <IconResident/>
                            <span>Moradores</span>
                            </Link>
                        </li>
                        <li>
                        <Link href="/dashboard/notificacao">
                            <IconNotify/>
                                <span>Notificar</span>
                        </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            <ButtonSair/>
        </section>
    )
}