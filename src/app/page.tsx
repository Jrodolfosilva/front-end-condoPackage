'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const auth = localStorage.getItem('token')

export default function Dashboard() {
const router = useRouter()
  useEffect(()=>{
    if(!auth){
      router.push('/login')
    }
  },[])



  return (
    <main>
      {auth}
    </main>
  );
}
