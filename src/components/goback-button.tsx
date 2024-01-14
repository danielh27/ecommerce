"use client"

import { useRouter } from "next/navigation";
import ArrowIconSVG from "./icons/arrowIconSVG";

const GobackButton = () => {
  const router = useRouter();
  
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => router.back()}>
      
      <span className="rotate-90">
        <ArrowIconSVG />
      </span>
      
      <span className="font-semibold">Atrás</span>
    </button>
  )
}

export default GobackButton;