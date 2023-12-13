import { getProduct } from "@/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {

  
  const product = (await getProduct(id)) as any;
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await response.json();

  if(data === "Zodd error") {
    notFound();
  }

  return (
    <>
      <h1>this is one single product page</h1>
      <h2>{product.fields.title}</h2>
      <h2>{product.fields.description}</h2>
      <h2>Price: {product.fields.price}</h2>
      <h2>Quantity: {data.quantity}</h2>
      <Image
        alt="product image"
        src={"https:" + product.fields.productImage.fields.file.url}
        width={500}
        height={500}
      />
    </>
  );
};

export default ProductPage;
