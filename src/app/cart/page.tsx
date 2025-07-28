import React from 'react';
import CartItems from './_components/cartItems';
import CheckOutForm from './_components/CheckOutForm';

const CartPage = () => {
    return (
        <main>
            <section className='section-gap'>
                <div className='container'>
                    <h1 className='text-primary text-center text-4xl font-bold italic mb-10'>Your Cart</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <CartItems/>
                    <CheckOutForm />
                </div>
                </div>
            </section>
            
        </main>
    );
}

export default CartPage;
