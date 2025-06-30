import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
    (limit?: number|undefined) => {
        const bestsellers = db.product.findMany({
            where:{
                orders: {
                    some: {}
            },
            },
            orderBy: {
                orders : {
                    _count: "desc"
                },
            },
            include: {
                sizes: true,
                extras: true,
            },
            take: limit
        },
      );
        return bestsellers;
    },
    ["BestSellers"],
    { revalidate: 3660 }
);