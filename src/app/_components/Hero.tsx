"use client";

import Image from 'next/image';
import React from 'react';
import { Languages, Routes } from '@/constans/enums';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import pizzaImage1 from '../../../public/assets/images/pizza1.png';
import pizzaImage2 from '../../../public/assets/images/pizza2.png';
import pizzaImage3 from '../../../public/assets/images/pizza3.png';
import pizzaImage5 from '../../../public/assets/images/pizza5.png';
import { CircleArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from '@/components/link';

const Hero = () => {
    return (
        <section className="section-gap">
          <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-auto'>
            <div className='space-y-5 text-center md:text-left'> 
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Slice into <span className="text-primary">happiness</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                Experience the best pizza in town, made with fresh ingredients and a passion for flavor.
              </p>
              
              <div className='flex items-center justify-center md:justify-start mt-6 gap-4'> 
                <Link href={`/${Routes.MENU}`}>
                  <Button 
                    size="lg"
                    icon={CircleArrowRight} 
                    iconPosition='right'
                  >
                    Order Now
                  </Button>
                </Link>
                
                <Link href={`/${Routes.MENU}`}>
                  <Button 
                    variant="link" 
                    icon={CircleArrowRight}
                    iconPosition='right'
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className='flex items-center justify-center'>
              <Swiper
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                grabCursor={true}
                modules={[EffectFade, Autoplay]}
                className="w-[280px] md:w-[320px] lg:w-[380px] h-[280px] md:h-[320px] lg:h-[380px]"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide className="flex items-center justify-center">
                  <Image 
                    src={pizzaImage1} 
                    alt="Delicious pizza" 
                    className="w-full h-full object-contain drop-shadow-xl"
                    priority
                  />
                </SwiperSlide>
                
                <SwiperSlide className="flex items-center justify-center">
                  <Image 
                    src={pizzaImage2} 
                    alt="Tasty pizza" 
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </SwiperSlide>
                
                <SwiperSlide className="flex items-center justify-center">
                  <Image 
                    src={pizzaImage3} 
                    alt="Gourmet pizza" 
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </SwiperSlide>
                
                <SwiperSlide className="flex items-center justify-center">
                  <Image 
                    src={pizzaImage5} 
                    alt="Special pizza" 
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
    );
}

export default Hero;
