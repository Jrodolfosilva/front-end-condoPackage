"use client"

import Image from "next/image";
import style from "./sidebar.module.css"
import IconPainel from "./icon-nav/icon-painel";
import IconNotify from "./icon-nav/icon-notify";
import IconPackage from "./icon-nav/icon-packages";
import IconResident from "./icon-nav/icon.resident";
import Link from "next/link";
import ButtonSair from "./button";

export default function SideBar (){
    function HandleTagActive(currentTarget:EventTarget & HTMLAnchorElement){

        const menuAncor =  document.querySelectorAll("#menu > li > a")
        menuAncor.forEach((a)=>a.classList.remove('active'))

        currentTarget.classList.add('active')
    }

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
                    <ul id="menu">
                        <li>
                            <Link href="/dashboard" className="active" onClick={({currentTarget})=>HandleTagActive(currentTarget)} >
                            <IconPainel/>
                            <span>Painel</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/encomendas" onClick={({currentTarget})=>HandleTagActive(currentTarget)}>
                            <IconPackage/>
                            <span>Encomendas</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/moradores" onClick={({currentTarget})=>HandleTagActive(currentTarget)}>
                            <IconResident/>
                            <span>Moradores</span>
                            </Link>
                        </li>
                        <li>
                        <Link href="/dashboard/notificacao" onClick={({currentTarget})=>HandleTagActive(currentTarget)}>
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