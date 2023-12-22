import Link from "next/link"
import Logo from "../logo"

export default function Navbar() {
  return (
    <header className="bg-slate-300 flex justify-between py-2 px-4">
      <Link href="/">
        <Logo />
      </Link>
      
      <nav>
        <ul className="h-full gap-2 flex items-center">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <p>Menu</p>
            </Link>
          </li>
          <li>
            <Link href="/menu/promociones">
              <p>Promociones</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}