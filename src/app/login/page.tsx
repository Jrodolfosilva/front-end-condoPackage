
'use client'
import style from './login.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


interface IuserLogin {
    password: string,
    email: string,
    
}

interface ImessageLogin{
    msg:string,
    token:{
        acess:string,
        refresh: string
    },
    user:{
        name:string,
        phone:string,
        email:string,
        address:string
    }

}



export default function FormLogin (){
      

    const route = useRouter() 
    const { register, handleSubmit,formState} = useForm<IuserLogin>()

    const submit:SubmitHandler<IuserLogin > = async(data)=>{

        await new Promise(Resolve=>setTimeout(Resolve,3000))
        console.log(data)

        await fetch('http://localhost:5000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(async(resp)=>{
            const msg:ImessageLogin =  await resp.json()
            console.log(msg)
            if(resp.status===200){
                localStorage.setItem('usuário',JSON.stringify(msg))
               

                route.push('/dashboard')

            }
            if(resp.status !== 200){
                alert(`${msg.msg}`)
            }
        })
        .catch((error)=>{
            alert(`Não foi possivel conecta-se ao servidor, procure o suporte ou tente mais tarde`)
        })


    }
   
    return(
        <section  className={style.container_form}>
             <form onSubmit={handleSubmit(submit)} >
                <h2>Acessar Conta</h2>
                <p>Insira suas credenciais abaixo:</p>

               
                <label htmlFor="email">
                    <input type="email" {...register('email')} id="email" placeholder='Email'required />
                </label>
                <label htmlFor="password">
                    <input type="password" {...register('password')} id="password" placeholder='Senha' />
                </label>
                <label htmlFor="submit">
                    <input type="submit" value={formState.isSubmitting?'Acessando...':"Acessar Conta"} disabled={formState.isSubmitting} />
                </label>
                <span>Você ainda não tem uma conta? <Link href="/register">Criar conta</Link></span>
        </form>

        </section>
       
    )
}