import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const category = await prisma.category.upsert({
      where: { name: 'Electronics' },
      update: {},
      create: {
        name: 'Electronics',
      },
    });
    console.log('Category ID:', category.id);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.();
  }
}

main();
