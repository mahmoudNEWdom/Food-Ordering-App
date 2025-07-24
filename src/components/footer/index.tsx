import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-t border-border/30 bg-background py-6 px-4 mt-8">
            <div className="max-w-5xl mx-auto">
                {/* Simple two-column footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and copyright */}
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h3 className="font-bold text-lg mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Tasty Food</h3>
                        <p className="text-sm text-muted-foreground">
                            &copy; {currentYear} All rights reserved
                        </p>
                    </div>
                    
                    {/* Quick Links - horizontal on desktop */}
                    <div className="flex items-center gap-6">
                        <Link href="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <Heart className="h-3 w-3 ml-1 text-chart-1" fill="currentColor" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
