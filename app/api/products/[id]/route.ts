import { getProduct } from "@/utils";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";

const mySchema = z.string().min(5);

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const zoded = mySchema.safeParse(params.id);
    if (!zoded.success) {
      return NextResponse.json("Zodd error")
    }
    const prisma = new PrismaClient();
    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });
    return Response.json(product);
  } catch (error) {
    console.log(error);
  }
}
