"use client";
import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { ProductWithRelations } from '@/Types/product';
import { Extra, Size, SizeName } from '@/generated/prisma';
import { useAppSelector } from '@/redux/hooks';
import { selectCartItems } from '@/redux/features/cart/cartSlice';

const Menuitem = ({ item }: { item: ProductWithRelations }) => {
    const cart = useAppSelector(selectCartItems)
    const defaultSize = cart.find((e) => e.id === item.id)?.size ||
    item.sizes.find((size) => size.name === SizeName.SMALL);
    const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
    const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
    return (
        <div className="rounded-md shadow-2xl hover:transform hover:scale-103 transition-transform duration-300 ease-in-out">
            <div className="p-4">
                <div className="flex justify-center mb-6">
                    <Image
                        src={item.image}
                        width={180}
                        height={180}
                        alt={item.name}
                        className="rounded-md object-cover"
                    />
                </div>
                
                <div className="flex justify-between px-10 items-center mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{formatCurrency(item.basePrice)}</span>
                </div>

                <p className="text-foreground text-sm mb-4 line-clamp-2">{item.description}</p>

                <Dialog >
                    <DialogTrigger asChild>
                        <Button className='w-4/6'>View details</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
                        <DialogHeader className="text-center flex items-center flex-col">
                            <Image src={item.image} width={200} height={200} alt={item.name} className="rounded-md mb-2" />
                            <DialogTitle>{item.name}</DialogTitle>
                            <DialogDescription>{item.description}</DialogDescription>
                        </DialogHeader>
                        <div className='space-y-6 py-4'>
                            <div>
                                <Label htmlFor="size" className='text-center font-medium block mb-3'>Pick your Size</Label>
                                <PickSize
                                    sizes={item.sizes}
                                    item={item}
                                    selectedSize={selectedSize}
                                    setSelectedSize={setSelectedSize}
                                />
                            </div>
                            <div>
                                <Label htmlFor="extras" className='text-center font-medium block mb-3'>Any Extras ?</Label>
                                <Extras
                                    extras={item.extras}
                                    selectedExtras={selectedExtras}
                                    setSelectedExtras={setSelectedExtras}
                                />
                            </div>
                        </div>
                            <DialogFooter >
                                    <Button type='submit' className='w-80'  >
                                        Add to cart
                                    </Button>

                            </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
        </div>

);
}
export default Menuitem;

function PickSize({
  sizes,
  item,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  selectedSize: Size;
  item: ProductWithRelations;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup defaultValue='comfortable'>
      {sizes.map((size) => (
        <div
          key={size.id}
          className='flex items-center space-x-2 border border-gray-100 rounded-md p-4'
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === size.id}
            onClick={() => setSelectedSize(size)}
            id={size.id}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
function Extras({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    if (selectedExtras.find((e) => e.id === extra.id)) {
      const filteredSelectedExtras = selectedExtras.filter(
        (item) => item.id !== extra.id
      );
      setSelectedExtras(filteredSelectedExtras);
    } else {
      setSelectedExtras((prev) => [...prev, extra]);
    }
  };
  return extras.map((extra) => (
    <div
      key={extra.id}
      className='flex items-center space-x-2 border border-gray-100 rounded-md p-4'
    >
      <Checkbox
        id={extra.id}
        onClick={() => handleExtra(extra)}
        checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
      />
      <Label
        htmlFor={extra.id}
        className='text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
}