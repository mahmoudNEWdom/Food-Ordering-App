"use client";
import { selectCartItems } from '@/redux/features/cart/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { log } from 'console';

import React from 'react';

const CartItems = () => {

const cart = useAppSelector(selectCartItems);
console.log('Cart Items:', cart);

    return (

        <div>
            <h2 className='text-primary text-2xl font-bold mb-4'>Items in your cart</h2>
            {/* Map through cart items and display them */}
        </div>
    );
}

export default CartItems;
