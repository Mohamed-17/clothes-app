import { cache } from "@/db/cache/cache";
import { db } from "@/db/prisma";

// get best sellers
export const bestSellers = cache(
  (limit) => {
    const products = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      take: limit | 3,
      include: {
        size: true,
        colors: true,
      },
    });
    return products;
  },
  ["best-sellers"],
  { revalidate: 1000 }
);
