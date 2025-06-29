import React from 'react';
import Menuitem from './Menuitem';
import { ProductWithRelations } from '@/Types/product';

const Menu = ({ items }: { items: ProductWithRelations[] }) => {
    return (
         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item: ProductWithRelations) => (
                   <Menuitem key={item.id} item={item} />
                ))}
            </ul>
    );
}

export default Menu ;
