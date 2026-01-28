import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, ThumbsUp } from 'lucide-react';

const stats = [
    { icon: Users, value: "5.000+", label: "Clientes Satisfeitos" },
    { icon: Clock, value: "10+", label: "Anos de Experiência" },
    { icon: Award, value: "98%", label: "Taxa de Aprovação" },
    { icon: ThumbsUp, value: "24h", label: "Resposta Rápida" }
];

export default function About() {
    return (
        <section className="py-24 bg-gray-50" id="sobre">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                            Sobre a DocFlow
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                            Simplificamos a 
                            <span className="text-blue-600"> burocracia</span> para você
                        </h2>
                        
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                A DocFlow nasceu com um propósito, tornar os processos 
                                documentais mais simples, rápidos e acessíveis para todos.
                            </p>
                            <p>
                                Com mais de uma década de experiência no mercado, nossa equipe 
                                de especialistas está preparada para cuidar de toda a sua 
                                documentação veicular e pessoal.
                            </p>
                            <p>
                                Utilizamos tecnologia de ponta para acompanhar cada etapa do 
                                seu processo, garantindo transparência e segurança do início ao fim.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm"
                                >
                                    <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
                                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Image Placeholder */}
                            <div className="rounded-3xl aspect-square overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                                    alt="Profissional DocFlow - Atendimento Personalizado"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ThumbsUp className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Confiança Garantida</p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Mais de 5.000 clientes confiam em nosso trabalho
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}