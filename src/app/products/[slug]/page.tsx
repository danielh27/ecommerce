import Hero from "@/components/product/hero";
import { getProduct } from "@/lib/spree";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  
  return (
    <section className="container mx-auto px-3 sm:px-5 py-8">
      <Hero product={product} />
    </section>
  )
}