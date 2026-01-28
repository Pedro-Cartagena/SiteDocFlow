import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
    const benefits = [
        "Agilidade nos processos",
        "Atendimento personalizado",
        "Documentação sem burocracia"
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-200/40 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Sua documentação
                            <span className="block text-blue-600 mt-2">sem complicação</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            A DocFlow cuida de toda a burocracia para você. 
                            Documentos veiculares, transferências e licenciamentos 
                            com rapidez e segurança.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                                <a 
                                    href="https://wa.me/5512988529510?text=Olá! Gostaria de falar com um especialista." 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Fale Conosco
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                            <Button 
                                asChild
                                size="lg" 
                                variant="outline" 
                                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-6 text-lg rounded-xl transition-all"
                            >
                                <a
                                    href="#servicos"
                                >
                                    Nossos Serviços
                                </a>                                
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-2 text-gray-700"
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                    <div className="relative">
                    {/* Main Card */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                            /* O LINK ATUALIZADO ESTÁ AQUI ABAIXO */
                            src="https://images.unsplash.com/photo-1624555130858-7ea5b8192c49?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=800&h=800"
                            alt="Equipe DocFlow - Atendimento Profissional"
                                        className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent" />
                    </div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-15 -left-6 bg-blue-600 text-white rounded-2xl p-5 shadow-xl"
                            >
                                <p className="text-3xl font-bold">+5.000</p>
                                <p className="text-blue-100 text-sm">Clientes atendidos</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                            >
                                <p className="text-2xl font-bold text-gray-900">98%</p>
                                <p className="text-gray-500 text-xs">Satisfação</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}