'use client'

import Image from "next/image"

type Buttonprops={
    image: string
    name : string
}
export default function Button({image,name}:Buttonprops){
    return(
        <div className=" w-40 h-20 bg-white flex flex-col items-center">
            <Image src={image} alt="image" width={40} height={40}></Image>
             <div>{name}</div>   
        </div>
    )
}