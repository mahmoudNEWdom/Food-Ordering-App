'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getTotalAmount } from '@/lib/cart';
import { formatCurrency } from '@/lib/formatters';
import { selectCartItems } from '@/redux/features/cart/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { CreditCard } from 'lucide-react';

function CheckoutForm() {
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);

  return (
    <div className='w-full max-w-3xl mx-auto p-2 sm:p-4'>
      <div className='bg-card rounded-lg shadow-md border border-border p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground flex items-center gap-2 sm:gap-3'>
          <CreditCard className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
          Checkout
        </h2>

        <form className='space-y-4'>
          <div className='space-y-4'>
            
            <div className='space-y-2 sm:space-y-3'>
              <Label htmlFor='phone' className='text-foreground'>
                Phone
              </Label>
              <Input
                id='phone'
                placeholder='Enter your phone'
                type='tel'
                name='phone'
                className='w-full'
                required
              />
            </div>

            <div className='space-y-2 sm:space-y-3'>
              <Label htmlFor='address' className='text-foreground'>
                Street address
              </Label>
              <Textarea
                id='address'
                placeholder='Enter your address'
                name='address'
                className='resize-none w-full'
                required
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='space-y-2 sm:space-y-3'>
                <Label htmlFor='postal-code' className='text-foreground'>
                  Postal code
                </Label>
                <Input
                  type='text'
                  id='postal-code'
                  placeholder='Enter postal code'
                  name='postal-code'
                  required
                />
              </div>

              <div className='space-y-2 sm:space-y-3'>
                <Label htmlFor='city' className='text-foreground'>
                  City
                </Label>
                <Input
                  type='text'
                  id='city'
                  placeholder='Enter your city'
                  name='city'
                  required
                />
              </div>
            </div>

            <div className='space-y-2 sm:space-y-3'>
              <Label htmlFor='country' className='text-foreground'>
                Country
              </Label>
              <Input
                type='text'
                id='country'
                placeholder='Enter your country'
                name='country'
                required
              />
            </div>

            <Button
              className='w-full my-4 sm:my-7 bg-primary hover:bg-primary/90'
              size='lg'
              type='submit'
              icon={<CreditCard className='mr-2 h-5 w-5' />}
            >
              Pay {formatCurrency(totalAmount)}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;