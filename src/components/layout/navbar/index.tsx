import Link from "next/link"
import Logo from "../logo"
import CouponIconSVG from "./couponIconSVG"
import CartIconSVG from "./cartIconSVG"
import AccountIconSVG from "./accountIconSVG"

export default function Navbar() {
  return (
    <header className="flex justify-between py-2 px-4">
      <div className="flex gap-10">
        <Link href="/">
          <Logo />
        </Link>
        
        <nav>
          <ul className="hidden md:flex h-full gap-2 items-center">
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
      </div>
      
      <div className="hidden md:flex gap-5 items-center">
        <Link href="/coupon">
          <CouponIconSVG />
        </Link>
        <Link href="/login">
          <AccountIconSVG />
        </Link>
        <Link href="/cart">
          <CartIconSVG />
        </Link>
      </div>
    </header>
  )
}