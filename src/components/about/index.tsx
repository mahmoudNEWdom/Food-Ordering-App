"use client";
import { CheckCircle, Clock, Leaf } from 'lucide-react';
import React, { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        // Enhanced animation for SVGs
        const svgs = document.querySelectorAll('.animate-svg');
        svgs.forEach((svg, index) => {
            setTimeout(() => {
                svg.classList.remove('opacity-0', 'translate-y-5');
                svg.classList.add('opacity-100', 'translate-y-0');
            }, index * 200);
        });

        // Floating animation for some elements
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach((element) => {
            let random = Math.random() * 1000;
            element.animate(
                [
                    { transform: 'translateY(0px)' },
                    { transform: 'translateY(-10px)' },
                    { transform: 'translateY(0px)' }
                ],
                {
                    duration: 3000 + random,
                    iterations: Infinity,
                    easing: 'ease-in-out'
                }
            );
        });
    }, []);

    return (
        <section className="bg-background py-12 px-4 min-h-screen relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">About Our Restaurant</h1>
                    <p className="text-xl text-muted-foreground mb-10">Fresh ingredients. Authentic flavors. Delivered to you.</p>
                    
                    <div className="flex justify-center flex-wrap gap-8 my-8">
                        {/* Plate SVG - Enhanced with primary color */}
                        <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                            <svg className="w-20 h-20 transition-transform hover:translate-y-[-5px] hover:rotate-6 duration-300" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="oklch(0.95 0.01 90)" stroke="var(--border)" strokeWidth="2" />
                                <circle cx="50" cy="50" r="35" fill="#fff" stroke="var(--border)" strokeWidth="1" />
                                <path d="M30,45 C40,35 60,35 70,45" fill="none" stroke="var(--primary)" strokeWidth="3" />
                                <path className="opacity-30" d="M35,50 C40,45 60,45 65,50" fill="none" stroke="var(--accent)" strokeWidth="2" />
                            </svg>
                        </div>
                        
                        {/* Fork SVG - Enhanced with secondary color */}
                        <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                            <svg className="w-20 h-20 transition-transform hover:translate-y-[-5px] hover:rotate-12 duration-300" viewBox="0 0 100 100">
                                <path d="M40,20 L40,60 Q50,70 60,60 L60,20" fill="none" stroke="var(--chart-4)" strokeWidth="3" strokeLinecap="round" />
                                <path d="M50,60 L50,80" fill="none" stroke="var(--chart-4)" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        
                        {/* Chef Hat SVG - Enhanced with accent color */}
                        <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                            <svg className="w-20 h-20 transition-transform hover:translate-y-[-5px] hover:rotate-3 duration-300" viewBox="0 0 100 100">
                                <path d="M30,70 C30,40 40,30 50,30 C60,30 70,40 70,70" fill="#fff" stroke="var(--chart-1)" strokeWidth="2" />
                                <path d="M25,70 L75,70" fill="none" stroke="var(--chart-1)" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Content cards with enhanced design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Our Story Card */}
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-xl duration-300 border border-border/30">
                        <div className="bg-primary text-primary-foreground p-4 text-xl font-semibold relative">
                            <h2>Our Story</h2>
                            
                        </div>
                        <div className="p-6 text-card-foreground">
                            <p className="mb-4">
                                Founded in 2015, we started with a simple idea: to bring delicious, 
                                authentic food straight to your doorstep. What began as a small family 
                                kitchen has grown into one of the city's favorite dining experiences.
                            </p>
                            <p>
                                Our passion for quality ingredients and exceptional flavors guides 
                                everything we do. Each dish is crafted with care, blending traditional 
                                recipes with modern techniques.
                            </p>
                        </div>
                    </div>
                    
                    {/* Our Commitment Card */}
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-xl duration-300 border border-border/30">
                        <div className="bg-primary text-primary-foreground p-4 text-xl font-semibold relative">
                            <h2>Our Commitment</h2>
                        </div>
                        <div className="p-6 text-card-foreground">
                            {/* Quality */}
                            <div className="flex items-center mb-6 md:flex-row flex-col md:items-start group">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out md:mr-4 mb-2 md:mb-0 flex-shrink-0 floating">
                                    <div className="w-10 h-10 rounded-full bg-[oklch(0.9_0.05_145)] flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-secondary transition-transform group-hover:scale-110 duration-300" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p><span className="font-bold text-primary">Quality Ingredients</span> - We source only the freshest, locally grown produce and highest quality meats.</p>
                            </div>
                            
                            {/* Delivery */}
                            <div className="flex items-center mb-6 md:flex-row flex-col md:items-start group">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out md:mr-4 mb-2 md:mb-0 flex-shrink-0 floating">
                                    <div className="w-10 h-10 rounded-full bg-[oklch(0.9_0.05_40)] flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-chart-1 transition-transform group-hover:scale-110 duration-300" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p><span className="font-bold text-chart-1">Fast Delivery</span> - Our efficient delivery system ensures your food arrives hot and fresh.</p>
                            </div>
                            
                            {/* Eco-Friendly */}
                            <div className="flex items-center md:flex-row flex-col md:items-start group">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out md:mr-4 mb-2 md:mb-0 flex-shrink-0 floating">
                                    <div className="w-10 h-10 rounded-full bg-[oklch(0.9_0.05_65)] flex items-center justify-center">
                                        <Leaf className="w-6 h-6 text-chart-3 transition-transform group-hover:scale-110 duration-300" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p><span className="font-bold text-chart-3">Eco-Friendly</span> - We use sustainable packaging and practices to reduce our environmental impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Team Section - Enhanced with interactive cards */}
                <div className="text-center mt-14 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
                    <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                    <p className="text-muted-foreground mb-10">The talented people behind our delicious meals</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Team Member 1 - Chef */}
                        <div className="bg-card rounded-lg shadow-md p-6 w-full max-w-[280px] transition-all hover:translate-y-[-5px] hover:shadow-lg duration-300 group border border-border/20">
                            <div className="flex justify-center mb-4 relative">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-chart-1/30 to-chart-4/30 p-1">
                                        <svg className="w-full h-full transition-transform group-hover:rotate-6 duration-300" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="oklch(0.95 0.05 65)" />
                                            <circle cx="50" cy="40" r="20" fill="var(--chart-3)" />
                                            <path d="M25,85 C25,65 75,65 75,85" fill="var(--chart-3)" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">Chef</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Head Chef</h3>
                            <p className="text-muted-foreground">Culinary expert with 15 years of experience</p>
                        </div>
                        
                        {/* Team Member 2 - Delivery */}
                        <div className="bg-card rounded-lg shadow-md p-6 w-full max-w-[280px] transition-all hover:translate-y-[-5px] hover:shadow-lg duration-300 group border border-border/20">
                            <div className="flex justify-center mb-4 relative">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-chart-2/30 to-chart-1/30 p-1">
                                        <svg className="w-full h-full transition-transform group-hover:rotate-6 duration-300" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="oklch(0.95 0.05 145)" />
                                            <circle cx="50" cy="40" r="20" fill="var(--secondary)" />
                                            <path d="M25,85 C25,65 75,65 75,85" fill="var(--secondary)" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">Fast</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">Delivery Manager</h3>
                            <p className="text-muted-foreground">Ensuring your food arrives promptly</p>
                        </div>
                        
                        {/* Team Member 3 - Service */}
                        <div className="bg-card rounded-lg shadow-md p-6 w-full max-w-[280px] transition-all hover:translate-y-[-5px] hover:shadow-lg duration-300 group border border-border/20">
                            <div className="flex justify-center mb-4 relative">
                                <div className="animate-svg opacity-0 translate-y-5 transition-all duration-500 ease-out floating">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-chart-5/30 to-chart-2/30 p-1">
                                        <svg className="w-full h-full transition-transform group-hover:rotate-6 duration-300" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="oklch(0.95 0.05 290)" />
                                            <circle cx="50" cy="40" r="20" fill="var(--chart-5)" />
                                            <path d="M25,85 C25,65 75,65 75,85" fill="var(--chart-5)" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">Care</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Customer Experience Lead</h3>
                            <p className="text-muted-foreground">Dedicated to your satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
