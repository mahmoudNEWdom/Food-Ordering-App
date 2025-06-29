import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import React from 'react';
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

// const Sizes = [{
//     id : crypto.randomUUID(),
//     name : "small",
//     price : 10.99,
// },
// {
//     id : crypto.randomUUID(),
//     name : "medium",
//     price : 12.99,
// }, {
//     id : crypto.randomUUID(),
//     name : "large",
//     price : 14.99,
// }]

// const Extras = [{
//     id : crypto.randomUUID(),
//     name : "Extra Cheese",
//     price : 1.99,
// }, {
//     id : crypto.randomUUID(),
//     name : "Extra Sauce",
//     price : 0.99,
// }, {
//     id : crypto.randomUUID(),
//     name : "Extra Toppings",
//     price : 2.49,
// }]

const Menuitem = ({ item }: { item: ProductWithRelations }) => {
    return (
        <div className="rounded-md shadow-2xl hover:transform hover:scale-103 transition-transform duration-300 ease-in-out">
            <div className="p-4">
                <div className="flex justify-center mb-4">
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
                                <RadioGroup defaultValue="small" className="space-y-3">
                                    {item.sizes.map((size) => (
                                        <div className="flex items-center justify-between rounded-md hover:bg-muted/50 transition-colors" key={size.id}>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value={size.name} id={size.id} />
                                                <Label htmlFor={size.id} className="capitalize font-medium">{size.name}</Label>
                                            </div>
                                            <span className="font-bold text-primary">{formatCurrency(size.price + item.basePrice)}</span>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                            <div>
                                <Label htmlFor="extras" className='text-center font-medium block mb-3'>Any Extras ?</Label>
                                <div className="space-y-3">
                                    {item.extras.map((extra) => (
                                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors" key={extra.id}>
                                            <div className="flex items-center gap-3">
                                                <Checkbox id={extra.id} />
                                                <Label htmlFor={extra.id} className="capitalize font-medium">{extra.name}</Label>
                                            </div>
                                            <span className="font-bold text-primary">{formatCurrency(extra.price)}</span>
                                        </div>
                                    ))}
                                </div>
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