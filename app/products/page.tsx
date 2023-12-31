import { getProducts } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: any;
};

const ProductPage = async () => {
  const posts = await getProducts();

  return (
    <div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.sys.id}>
            <Link href={`/products/${post.sys.id}`}>{post.fields.title}</Link>
            <h2>{post.fields.description}</h2>
            <h2>{post.fields.price}</h2>
            <Image
              alt="product image"
              src={'https:' + post.fields.productImage.fields.file.url}
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
