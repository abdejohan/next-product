import { getProduct } from '@/utils';
import Image from 'next/image';

const ProductPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const product = await getProduct(id);
  console.log('id: ', product);

  return (
    <>
      <h1>this is one single product page</h1>
      <h2>{product.fields.title}</h2>
      <h2>{product.fields.description}</h2>
      <h2>{product.fields.price}</h2>
      <Image
        src={'https:' + product.fields.productImage.fields.file.url}
        width={500}
        height={500}
      />
    </>
  );
};

export default ProductPage;
