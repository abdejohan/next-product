import { getProduct } from "@/utils";
import { PrismaClient } from '@prisma/client'

export async function GET(request:Request, {params}: {params: {id: string}}) {
    
  
const prisma = new PrismaClient()

const product = prisma.product.findUnique({where: {id: params.id}})
    // const product = (await getProduct(id)) as any;
    // const data = await res.json()
    return Response.json(product)
  }