import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import About from '@/components/landing/About';
import WhyUs from '@/components/landing/WhyUs';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from "../components/landing/WhatsAppButton";

export default function Home() {
    return (
        <div className="min-h-screen bg-white relative">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <WhyUs />
            <Testimonials />
            <CTA />
            <Footer />

            <WhatsAppButton />
        </div>
    );
}