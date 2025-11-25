import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const productCount = await prisma.product.count();
  const orderCount = await prisma.order.count();
  const userCount = await prisma.user.count();
  const totalSales = await prisma.order.aggregate({
    _sum: {
      total: true,
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total Sales</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            ${totalSales._sum.total?.toFixed(2) || "0.00"}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total Orders</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{orderCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total Products</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{productCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total Users</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{userCount}</p>
        </div>
      </div>
    </div>
  );
}