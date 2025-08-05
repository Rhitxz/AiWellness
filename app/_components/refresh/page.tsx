"use client"
import { useRouter } from "next/navigation";

export default function Refresh(){
const router = useRouter();
return(
    <div onClick={()=>router.refresh()} className="cursor-pointer">
        New tip
    </div>
)
}