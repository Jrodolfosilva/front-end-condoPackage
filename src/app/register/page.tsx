
'use client'
import React from 'react'; 
import style from './register.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

interface IuserRegister {
    name: string,
    phone: string,
    email: string,
    address: string,
    password: string,
    confirmPassword: string,
}



export default function FormRegister (){
      
    const {handleSubmit,register,formState} = useForm()


    const route = useRouter() 
    
   
    const Submit: SubmitHandler<FieldValues> = async(data) => {

        await new Promise((Resolve)=>setTimeout(Resolve,3000))

            if(data.password !== data.confirmPassword){
               
                console.log('senhas não conferem')
                return
            }
       
        await fetch('http://localhost:5000/auth/register',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async(resp)=>{
            const msg = await resp.json()
            
            if(resp.status == 200){
                route.push('/login')
            }

            if(resp.status !== 200){
                alert(msg.msg)
            }
           
        })
        .catch((error)=>{
            console.log(error)
            alert('Não foi possível criar sua conta, entre em contato com o suporte!')
            
        })

       
        
    }



    return(
        <section  className={style.container_form}>
            <form onSubmit={handleSubmit(Submit)}>
                <h2>Criar Conta</h2>
                <p>Esse serviço faz parte de uma iniciativa totalmente gratuita</p>
                <label htmlFor="name">
                    <input 
                    type="text" id="name" placeholder='Nome do Condomínio' {...register("name",{required:true, })} />
                </label>
                <label htmlFor="email">
                    <input type="email" {...register("email",{required:true})} id="email" placeholder='Email'required />
                </label>
                <label htmlFor="address">
                    <input type="text" {...register("address",{required:true})}  id='address' placeholder='Endereço do Condomínio' />
                </label>
                <label htmlFor="phone">
                    <input type="text" {...register("phone",{required:true})}  id="phone" placeholder='(11) 9 9999 - 9999'  />
                </label>
                <label htmlFor="password">
                    <input type="password" {...register("password",{required:true,minLength:8})}  id="password" placeholder='Senha' />
                </label>
                <label htmlFor="confirmPassword">
                    <input type="password" {...register("confirmPassword",{required:true,minLength:8})} id="confirmPassword" placeholder='Confirme sua senha' />
                </label>
                <label htmlFor="submit">
                        <input type='submit' name='submit' disabled={formState.isSubmitting} value="Acessar Conta" />
                </label>
                <span>Ao clicar em “Criar conta”, você concorda com os 
                    <Link href="/termos"> Termos de Uso e Política de Privacidade </Link>
                     da plataforma.
                </span>
                <span>
                    Já tem cadastro?
                        <Link href='/login'> Entre com sua conta</Link>
                </span>
        </form>

        </section>
       
    )
}