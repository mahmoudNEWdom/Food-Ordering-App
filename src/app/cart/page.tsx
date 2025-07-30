"use client";
import React from 'react';
import CartItems from './_components/cartItems';
import CheckOutForm from './_components/CheckOutForm';
import { useAppSelector } from '@/redux/hooks';
import { selectCartItems } from '@/redux/features/cart/cartSlice';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CartPage = () => {
    const cart = useAppSelector(selectCartItems);

    if (!cart || cart.length === 0) {
        return (
            <main className="container max-w-7xl mx-auto px-4 py-40">
                <div className="max-w-xl mx-auto text-center">
                    <div 
                        className="mx-auto h-32 w-32 flex items-center justify-center rounded-full bg-primary/10 mb-8"
                    >
                        <ShoppingCart className="h-16 w-16 text-primary" />
                    </div>
                    
                    <div
                    >
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Looks like you haven't added any items yet.
                            <br />
                            Browse our menu to find something delicious!
                        </p>
                        
                        <Link href="/menu">
                            <Button 
                                className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl" 
                                size="lg"
                                icon={<ShoppingCart className="mr-2 h-5 w-5" />}
                            >
                                Browse Menu
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <section className="py-12 md:py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <h1 className="text-primary text-center text-3xl md:text-4xl font-bold mb-10">
                        Your Cart
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 lg:order-1">
                            <CartItems />
                        </div>
                        <div className="lg:col-span-2 lg:order-2">
                            <CheckOutForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CartPage;
