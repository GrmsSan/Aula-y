"use client"
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { api } from "@/constants/api";

interface IData {
    name: string;
    image: string;
    id: string;
}

const AxiosPage = () =>{
const [data, setData] = useState<IData[]>([])

    useEffect(() =>{
        api.get(`/character`).then((res) => {
            setData(res.data.results)

        }).catch((error)=>{
            console.log("erro")
        })
    }, [])

    return(
        <>
        <h1>Axios page client size</h1>
        <Suspense fallback={<div>Loading...</div>}>
         {data.map((item, index) => (
            <div key={index}>
            <h2>{item.name}</h2>
            <Image src={item.name} alt={item.name} width={200} height={200}/>
            <p>{item.species}</p>
            <p>{item.status}</p>
            <p>{item.gender}</p>
            </div>
         ))}
        </Suspense>
        
        </>
    )

}

export default AxiosPage