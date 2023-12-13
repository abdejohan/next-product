import { getProduct } from '@/utils';
import { PrismaClient } from '@prisma/client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const prisma = new PrismaClient();
    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });
    return Response.json(product);
  } catch (error) {
    console.log(error);
  }
}
