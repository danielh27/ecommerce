import Link from "next/link";
import FacebookIconSVG from "@/components/icons/facebookIconSVG";
import InstagramIconSVG from "@/components/icons/instagramIconSVG";
import TwitterIconSVG from "@/components/icons/twitterIconSVG";

export default function Socials() {
  return (
    <div className="flex gap-5 py-3.5 mt-1 items-center justify-center bg-neutral-800">
      <Link href="https://www.facebook.com/">
        <FacebookIconSVG />
      </Link>
      <Link href="https://www.twitter.com/">
        <TwitterIconSVG />
      </Link>
      <Link href="https://www.instagram.com/">
        <InstagramIconSVG />
      </Link>
    </div>
  )
}