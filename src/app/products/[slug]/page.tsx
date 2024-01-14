import Form from "@/components/product/form";
import Hero from "@/components/product/hero";
import { getProduct } from "@/lib/spree";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 container px-3 sm:px-5 py-8">
      <Hero product={product} />
      
      <Form product={product} />
    </section>
  )
}