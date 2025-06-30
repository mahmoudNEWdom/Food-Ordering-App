import MainHeading from '@/components/main-heading';
import React from 'react';
import Menu from '@/components/menu';
import { getBestSellers } from '@/server/db/products';

async function BestSellers() {
    const bestsellers = await getBestSellers(3);

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
