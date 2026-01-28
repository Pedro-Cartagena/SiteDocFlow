import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 bg-gray-50" id="contato">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 lg:p-16"
                        >
                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                                Entre em Contato
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                                Pronto para resolver sua 
                                <span className="text-blue-600"> documentação?</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Nossa equipe está pronta para atender você. 
                                Entre em contato e solicite um orçamento sem compromisso.
                            </p>

                            <div className="space-y-4 mb-8">
                                <a 
                                    href="https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor." 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900">WhatsApp</p>
                                        <p className="text-gray-600 text-sm">(12) 98852-9510</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                                </a>

                                <a 
                                    href="mailto:suportedocflow@gmail.com" 
                                    className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900">E-mail</p>
                                        <p className="text-gray-600 text-sm">suportedocflow@gmail.com</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Visual Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 lg:p-16 flex flex-col justify-center"
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl font-bold text-white">D</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    DocFlow
                                </h3>
                                <p className="text-blue-100 mb-8">
                                    Serviços veicular DETRAN
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                                    <h4 className="font-bold text-white mb-4">Horário de Atendimento</h4>
                                    <div className="space-y-2 text-blue-100">
                                        <div className="flex justify-between">
                                            <span>Segunda a Sexta</span>
                                            <span className="text-white font-medium">08h às 18h</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sábado</span>
                                            <span className="text-white font-medium">Fechado</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Domingo e Feriados</span>
                                            <span className="text-white/60">Fechado</span>
                                        </div>
                                    </div>
                                </div>

                                <Button asChild size="lg" className="mt-8 bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-xl w-full border-none">
                                    <a 
                                        href="https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor." 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center !text-white" 
                                    >
                                    Solicitar Orçamento
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}