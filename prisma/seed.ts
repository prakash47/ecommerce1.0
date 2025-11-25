import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed Category and Products
    const category = await prisma.category.upsert({
      where: { name: "Electronics" },
      update: {},
      create: {
        name: "Electronics",
        products: {
          create: [
            {
              name: "Laptop",
              description: "A laptop",
              price: 1000,
              image: "https://placehold.co/600x400",
            },
          ],
        },
      },
    });
    console.log("Seeded Category:", category);

    // Seed Admin User
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const admin = await prisma.user.upsert({
      where: { email: "admin@example.com" },
      update: {},
      create: {
        email: "admin@example.com",
        name: "Admin User",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Seeded Admin:", admin);

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();