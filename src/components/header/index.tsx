import { Routes } from '@/constans/enums';
import Link from '../link';
import React from 'react';
import Navbar from './Navbar';
import pizza from '../../../public/assets/images/pizzaIcon.png';
import Image from 'next/image';
const Header = () => {
    return (
        <header>
        <div className='container flex items-center justify-between py-4 mx-auto'>
        <Link href={Routes.ROOT}><Image src={pizza} width={60} height={60} alt="Pizza" /></Link>
        <Navbar/>
        </div>
        </header>
    );
}

export default Header;
