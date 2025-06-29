import MainHeading from '@/components/main-heading';
import React from 'react';
import Menu from '@/components/menu';
import { db } from '@/lib/prisma';

async function BestSellers() {
    const bestsellers = await db.product.findMany({
        include: {
            sizes: true,
            extras: true,
        },
    });

    return (
        <section>
        <div className='container'>
            <div className="text-center mb-10">
                <MainHeading
                title={"Best Sellers"}
                SubTitle={"Popular Dishes"}
            />
           <Menu items={bestsellers} />
            </div>

        </div>
        </section>
    );
}

export default BestSellers;
