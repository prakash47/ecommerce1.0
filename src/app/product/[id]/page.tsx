import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-2xl text-blue-600 font-semibold mb-6">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {product.description}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}