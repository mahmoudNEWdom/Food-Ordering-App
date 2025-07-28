import React from 'react';
import Link from '../link';
import { Routes } from '@/constans/enums';
import { ShoppingCartIcon } from 'lucide-react';

const CartButton = () => {
    // This would typically come from a cart context/state
    
    return (
        <Link 
            href={`${Routes.CART}`} 
            className="group relative flex items-center p-2  hover:bg-gray-100 rounded-full transition-all duration-300 ease-in-out"
        >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 transition-all duration-300 ease-out origin-center group-hover:rotate-[15deg] group-hover:text-orange-500" />

                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center min-w-[20px] h-5  shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    2
                </span>

        </Link>
    );
}

export default CartButton;
