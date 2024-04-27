'use client'

import Image from "next/image"
import {useForm, SubmitHandler} from "react-hook-form"
import style from "./header.module.css"

type Search = {
    search: string
}


export default function Header(){



const {register,handleSubmit} = useForm<Search>()

const submit:SubmitHandler<Search> = (data)=>{
 
    
    
}

    return (
        <header className={style.container_header}>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="search">
                        <input type="text" {...register('search')} id="search" placeholder="Buscar pelo número da Encomenda" />
                        <button type="submit">
                            <Image 
                            width={24}
                            height={24}
                            alt=""
                            src="/search.svg"/>
                        </button>
                    </label>

                </form>
            </div>
            <div>
                <Image
                src="/notify.svg"
                width={24}
                height={24}
                alt=""
                />
            </div>
        </header>
    )
}