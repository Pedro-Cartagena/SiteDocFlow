import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from 'lucide-react';

const navLinks = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6967d6ebda56513f67aceb3f/697ecc3c0_LogoSfundoCz.png"
                                alt="DocFlow"
                                className="h-12 w-auto"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`font-medium transition-colors hover:text-blue-600 ${
                                        isScrolled ? 'text-gray-700' : 'text-gray-700'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl">
                                <a 
                                    href="https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor." 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Fale Conosco
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-900" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-900" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-20 z-40 bg-white shadow-xl lg:hidden"
                    >
                        <div className="container mx-auto px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-medium text-gray-700 hover:text-blue-600 py-2 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl">
                                <a 
                                    href="https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor." 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Fale Conosco
                                </a>
                            </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}