'use client';

import { Button } from '@/components/ui/button';
import { deliveryFee, getSubTotal } from '@/lib/cart';
import { formatCurrency } from '@/lib/formatters';
import {
  removeItemFromCart,
  selectCartItems,
} from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ShoppingCart, Trash2, CreditCard, Package2, Receipt, ReceiptCent } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useEffect } from 'react';

function CartItems() {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const subTotal = getSubTotal(cart);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='max-w-3xl mx-auto p-4'>
      {cart && cart.length > 0 ? (
        <>

          <ul className='space-y-4 mb-8'>
            {cart.map((item) => (
              <li
                key={item.id}
                className='bg-card rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-border'
              >
          <div className='flex items-center gap-2 mb-6'>
            <Receipt className='h-6 w-6 text-primary' />
            <h2 className='text-2xl font-bold py-2'>Your Order</h2>
          </div>
                <div className='flex flex-col md:flex-row gap-6'>
                  {/* Larger image */}
                  <div className='relative w-full md:w-48 h-48 bg-muted rounded-md overflow-hidden'>
                    <Image
                      src={item.image}
                      className='object-cover'
                      alt={item.name}
                      fill
                      sizes='(max-width: 768px) 100vw, 192px'
                      priority
                    />
                  </div>

                  <div className='flex-1 flex flex-col'>
                    <div className='flex justify-between items-start'>
                      <h4 className='font-semibold text-lg text-foreground'>{item.name}</h4>
                      <span className='inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary'>
                        x{item.quantity}
                      </span>
                    </div>

                    <div className='mt-2 space-y-1'>
                      {item.size && (
                        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                          <span className='font-medium'>Size:</span>
                          <span>{item.size.name}</span>
                        </div>
                      )}

                      {item.extras && item.extras.length > 0 && (
                        <div className='text-sm text-muted-foreground'>
                          <span className='font-medium'>Extras:</span>
                          <div className='flex flex-wrap gap-1 mt-1'>
                            {item.extras.map((extra) => (
                              <span
                                key={extra.id}
                                className='inline-block bg-muted rounded px-2 py-0.5 text-xs'
                              >
                                {extra.name} ({formatCurrency(extra.price)})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className='mt-auto pt-3 flex items-center justify-between border-t border-border'>
                      <strong className='text-lg text-primary'>
                        {formatCurrency(item.basePrice)}
                      </strong>

                      <Button
                        onClick={() =>
                          dispatch(removeItemFromCart({ id: item.id }))
                        }
                        variant='outline'
                        size='sm'
                        className='text-destructive hover:bg-destructive/10 hover:border-destructive/20 transition-colors'
                        icon={<Trash2 className='h-4 w-4' />}
                      >
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className='bg-card rounded-lg shadow-md p-6 border border-border'>
            <h3 className='font-semibold text-lg mb-4 text-foreground'>Order Summary</h3>
            <Separator className='my-3' />

            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <Receipt className='h-4 w-4' />
                  <span>Subtotal</span>
                </div>
                <strong className='text-foreground'>{formatCurrency(subTotal)}</strong>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <Package2 className='h-4 w-4' />
                  <span>Delivery</span>
                </div>
                <strong className='text-foreground'>{formatCurrency(deliveryFee)}</strong>
              </div>

              <Separator className='my-3' />

              <div className='flex justify-between items-center text-lg font-bold'>
                <span className='text-foreground'>Total</span>
                <span className='text-primary'>
                  {formatCurrency(subTotal + deliveryFee)}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='text-center py-16 px-4'>
          <div className='mx-auto h-28 w-28 flex items-center justify-center rounded-full bg-muted mb-6'>
            <ShoppingCart className='h-14 w-14 text-muted-foreground' />
          </div>
          <h3 className='text-2xl font-semibold mb-3 text-foreground'>Your cart is empty</h3>
          <p className='text-muted-foreground mb-8 max-w-md mx-auto'>
            Looks like you haven't added any items yet. 
            Browse our menu to find something delicious!
          </p>
          <Link href="/menu">
            <Button className='bg-primary hover:bg-primary/90 px-6 py-6 text-base font-medium' size='lg' icon={<ShoppingCart className='mr-2 h-5 w-5' />}>
              
              Browse Menu
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartItems;