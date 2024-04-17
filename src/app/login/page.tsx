
'use client'
import style from './login.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


interface userLogin {
    name: string,
    email: string,
    
}



export default function FormLogin (){
      

    const route = useRouter() 
    const { register, handleSubmit,formState} = useForm()

    const submit:SubmitHandler<FieldValues> = async(data)=>{

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
            const msg =  await resp.json()
            console.log(msg)
            if(resp.status===200){
                localStorage.setItem('token',msg.token.acess)
                localStorage.setItem('refresh',msg.token.refresh)

                route.push('/')

            }
        })


    }
   
    return(
        <section  className={style.container_form}>
             <form onSubmit={handleSubmit(submit)} >
                <h2>Acessar Conta</h2>
                <p>Esse serviço faz parte de uma iniciativa totalmente gratuita :)</p>

               
                <label htmlFor="email">
                    <input type="email" {...register('email')} id="email" placeholder='Email'required />
                </label>
                <label htmlFor="password">
                    <input type="password" {...register('password')} id="password" placeholder='Senha' />
                </label>
                <label htmlFor="submit">
                    <input type="submit" value="Acessar Conta" disabled={formState.isSubmitting} />
                </label>
                <span>Você ainda não tem uma conta? <Link href="/register">Criar conta</Link></span>
        </form>

        </section>
       
    )
}