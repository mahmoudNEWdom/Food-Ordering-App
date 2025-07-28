"use client";
import React, { useState } from 'react';
import Link from '../link';
import { Pages, Routes } from '@/constans/enums';
import { Button, buttonVariants } from '../ui/button';
import {Menu} from "lucide-react"
import CartButton from './cart-Button';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const links = [
        {id:crypto.randomUUID(), title: 'Menu', href: Routes.MENU},
        {id:crypto.randomUUID(), title: 'About', href: Routes.ABOUT},
        {id:crypto.randomUUID(), title: 'Contact', href: Routes.CONTACT},
        {id:crypto.randomUUID(), title: 'Login', href: `${Routes.AUTH}/${Pages.LOGIN}` },
    ]

    return (
        <nav className="bg-background py-4 px-4 md:px-8 relative">
            <div className="container mx-auto flex justify-between items-center">
                <Button 
                    variant="secondary" 
                    size="sm" 
                    className='lg:hidden z-40 bg-primary text-white hover:bg-primary/90' 
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <Menu className='!w-6 !h-6 '/>
                </Button>
                
                <div 
                    className={`
                        fixed lg:relative top-0 left-0 h-full lg:h-auto w-[250px] lg:w-auto 
                        bg-background lg:bg-transparent z-30 shadow-lg lg:shadow-none
                        transform transition-transform duration-300 ease-in-out
                        ${openMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                        pt-16 lg:pt-0
                    `}
                >
                    <ul className="container flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-8 p-4 lg:p-0">
                        {links.map(link => (
                            <li key={link.id} className="text-center">
                                <Link 
                                    href={`/${link.href}`}
                                    className={`${ 
                                        link.href === `${Routes.AUTH}/${Pages.LOGIN}` 
                                        ? `${buttonVariants({size : 'lg'})} !px-8 !rounded-full` 
                                        : 'text-foreground hover:text-primary transition-colors font-medium link-hover'
                                    }`}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Overlay with blur effect for mobile menu */}
                {openMenu && (
                    <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-md z-20 lg:hidden transition-all duration-300" 
                        onClick={() => setOpenMenu(false)}
                    />
                )}
            <CartButton />
            </div>

        </nav>
    );
}

export default Navbar;
