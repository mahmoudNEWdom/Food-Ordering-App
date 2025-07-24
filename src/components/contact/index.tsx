import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage = () => {
    return (
        <section className="bg-background py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Contact Us</h1>
                    <p className="text-muted-foreground">We'd love to hear from you</p>
                </div>
                
                {/* Main content - Map and Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Map - Cairo location */}
                    <div className="animate-fade-up bg-card rounded-lg shadow-md overflow-hidden border border-border/30">
                        <div className="bg-primary text-primary-foreground p-3 flex items-center">
                            <MapPin className="mr-2" size={18} />
                            <h2 className="font-medium">Our Location</h2>
                        </div>
                        <div className="w-full h-[300px] overflow-hidden">
                            {/* Cairo, Egypt Google Map */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564059371!2d31.214612042695316!3d30.059453600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%20Festival%20City%20Mall!5e0!3m2!1sen!2sus!4v1690294231138!5m2!1sen!2sus"
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Restaurant Location in Cairo"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Contact Info - Cairo */}
                    <div className="animate-fade-up animation-delay-150 bg-card rounded-lg shadow-md overflow-hidden border border-border/30">
                        <div className="bg-primary text-primary-foreground p-3">
                            <h2 className="font-medium">Contact Information</h2>
                        </div>
                        <div className="p-5">
                            <div className="space-y-5">
                                {/* Address */}
                                <div className="flex">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-3 animate-bounce-slow">
                                        <MapPin className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-muted-foreground text-sm">Cairo Festival City Mall</p>
                                        <p className="text-muted-foreground text-sm">New Cairo, Cairo Governorate, Egypt</p>
                                    </div>
                                </div>
                                
                                {/* Phone */}
                                <div className="flex">
                                    <div className="w-10 h-10 rounded-full bg-chart-4/10 flex-shrink-0 flex items-center justify-center mr-3 animate-bounce-slow">
                                        <Phone className="text-chart-4" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-primary font-medium">+20 2 2617 5000</p>
                                    </div>
                                </div>
                                
                                {/* Email */}
                                <div className="flex">
                                    <div className="w-10 h-10 rounded-full bg-chart-1/10 flex-shrink-0 flex items-center justify-center mr-3 animate-bounce-slow">
                                        <Mail className="text-chart-1" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-chart-3">hello@tastyfood-cairo.com</p>
                                    </div>
                                </div>
                                
                                {/* Hours */}
                                <div className="flex">
                                    <div className="w-10 h-10 rounded-full bg-chart-5/10 flex-shrink-0 flex items-center justify-center mr-3 animate-bounce-slow">
                                        <Clock className="text-chart-5" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Hours</h3>
                                        <p className="text-muted-foreground text-sm">Sun-Thu: 10am - 11pm</p>
                                        <p className="text-muted-foreground text-sm">Fri-Sat: 10am - 12am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-10 text-center">
                    <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                    
                    <div className="flex justify-center gap-15">
                        <div className="animate-fade-up animation-delay-300">
                            <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 flex items-center justify-center hover:bg-[#E1306C]/20 cursor-pointer hover:scale-110 transition-transform">
                                <Instagram className="w-6 h-6 text-[#E1306C]" />
                            </div>
                        </div>
                        
                        <div className="animate-fade-up animation-delay-500">
                            <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center hover:bg-[#1877F2]/20 cursor-pointer hover:scale-110 transition-transform">
                                <Facebook className="w-6 h-6 text-[#1877F2]" />
                            </div>
                        </div>
                        
                        <div className="animate-fade-up animation-delay-700">
                            <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center hover:bg-[#1DA1F2]/20 cursor-pointer hover:scale-110 transition-transform">
                                <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactPage;
