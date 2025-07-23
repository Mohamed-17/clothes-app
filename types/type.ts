import { Prisma } from "@/lib/generated/prisma";

export type ProductRelastions = Prisma.ProductGetPayload<{
  include: {
    size: true;
    colors: true;
  };
}>;
