import AppleStoreIconSVG from "@/components/icons/appleStoreIconSVG";
import FooterSection from "./footerSection";
import GooglePlayIconSVG from "@/components/icons/googlePlayIconSVG";
import Socials from "./socials";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 px-10 w-100 bg-neutral-800 text-white divide-y md:divide-none">
        <div className="w-full py-6">
          <h1 className="mb-4 font-bold">Ecommerce Footer Title</h1>
          <div className="text-sm">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias, atque, expedita aliquam enim velit obcaecati unde asperiores harum labore, odit quasi voluptatum doloribus! Itaque placeat et esse veritatis fugiat.</p>
          </div>
        </div>
        <FooterSection title="Ecommerce Contact">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </FooterSection>
        <FooterSection title="Ecommerce Politics">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </FooterSection>
        <FooterSection title="Ecommerce Download">
            <div className="flex justify-center md:justify-start gap-4">
              <AppleStoreIconSVG />
              <GooglePlayIconSVG />
            </div>
        </FooterSection>
      </div>
      <Socials />
      <Copyright />
    </footer>
  )
}