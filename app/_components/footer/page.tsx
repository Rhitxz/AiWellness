import { useRouter } from "next/navigation";

export default function footer(){
    const router = useRouter();
    return (
        <div onClick={()=>router.push("/mainpage")}>
Return to main page 
        </div>
    )
}