"use client"
import { useRouter } from "next/navigation"

export default function NewMood(){
    const router = useRouter();
    return (
        <div onClick={()=>router.push("/mainpage")}>
            New Mood
        </div>
    )
}