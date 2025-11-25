import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          category ? { category: { name: category } } : {},
          search
            ? {
                OR: [
                  { name: { contains: search } },
                  { description: { contains: search } },
                ],
              }
            : {},
        ],
      },
      include: {
        category: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, image, categoryId } = body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        categoryId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Error creating product" }, { status: 500 });
  }
}