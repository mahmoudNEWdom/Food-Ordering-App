import Menu from '@/components/menu';
import { db } from '@/lib/prisma';
import { getProductsByCategory } from '@/server/db/products';
import React from 'react';

const MenuPage = async () => {    
    const Categories = await getProductsByCategory();
    return (
        <main>
            {Categories.map((category) => (
                <section key={category.id}>
                    <div className='container text-center'>
                        <h1 className='text-primary font-bold text-4xl italic mb-6'>{category.name}</h1>
                        <Menu items={category.products} />
                    </div>
                </section>
                  
            ))}
        </main>
    );

}

export default MenuPage;
