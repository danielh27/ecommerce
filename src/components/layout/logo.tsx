import Image from "next/image";


export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/default-logo.svg" alt="Logo" width={100} height={35} />
    </div>
  )
}