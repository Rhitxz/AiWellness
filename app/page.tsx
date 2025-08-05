'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
 const router = useRouter();
 function gotonew(){
  router.push("/new")
 }
  return (
  <div>
    <button onClick={gotonew}>

    HI there 
    </button>
  </div>
  );
}
