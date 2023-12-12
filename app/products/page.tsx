import { getBlogPosts } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={'/products/1'}>{post.fields.title}</Link>
            <h2>{post.fields.description}</h2>
            <h2>{post.fields.price}</h2>
            <Image
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
