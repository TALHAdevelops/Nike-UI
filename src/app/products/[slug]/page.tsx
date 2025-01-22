
import Footer from '@/app/components/Footer';
import { client } from '@/sanity/lib/client';
import ProductDetails from '../../components/Productdetail'; // Client-side component

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = `*[_type == 'product']{
    "slug": slug.current
  }`;

  const slugs = await client.fetch(query);

  return slugs.map(({ slug }: { slug: string }) => ({ slug }));
}

export default async function Page({ params }: Props) {
  const query = `*[_type == 'product' && slug.current == "${params.slug}"]{
    productName,
    description,
    category,
    status,
    colors,
    image,
    price
  }`;

  const products = await client.fetch(query);

  if (!products || products.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <ProductDetails product={products[0]} />
      <Footer />
    </div>
  );
}
