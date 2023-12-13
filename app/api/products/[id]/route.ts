import { getProduct } from "@/utils";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log("hello!!");

    // const prisma = new PrismaClient();

    // const product = await prisma.product.findUnique({ where: { id: params.id } });
    // const product = (await getProduct(id)) as any;
    // const data = await res.json()
    console.log("api route");
    return Response.json('product');
  } catch (error) {
    console.log("error!!", error);
  }
}
