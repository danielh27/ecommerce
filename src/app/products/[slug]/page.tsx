import GobackButton from "@/components/goback-button";
import Form from "@/components/product/form";
import Hero from "@/components/product/hero";
import { getProduct } from "@/lib/spree";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  
  return (
    <div className="sm:max-w-screen-xl mx-auto px-3 sm:px-5 py-8">
      <div className="mb-5">
        <GobackButton />
      </div>
      
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-5">
        <div className="h-fit col-span-3 sm:col-span-2 sm:sticky top-5">
          <Hero product={product} />
        </div>
        
        <div className="col-span-3">
          <Form product={product} />
        </div>
      </section>
    </div>
  )
}