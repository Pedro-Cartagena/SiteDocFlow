import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ana Paula Silva",
        role: "Empresária",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        content: "Excelente serviço! Fiz a transferência do meu carro em tempo recorde. Atendimento muito profissional e preços justos. Recomendo a todos!",
        rating: 5
    },
    {
        name: "João Pedro",
        role: "Motoboy",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        content: "A DocFlow me ajudou com toda a documentação da minha moto. O sistema de acompanhamento online é fantástico, muito transparente.",
        rating: 5
    },
    {
        name: "Roberto Mendes",
        role: "Motorista de aplicativo",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        content: "Precisei regularizar várias pendências do meu veículo e a equipe resolveu tudo rapidamente. Muito satisfeito com o serviço!",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-200 font-semibold text-sm tracking-wider uppercase">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                        O que dizem nossos clientes
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        A satisfação dos nossos clientes é nossa maior recompensa. 
                        Veja o que eles têm a dizer.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-0 rounded-2xl hover:bg-white/15 transition-colors duration-300">
                                <Quote className="w-10 h-10 text-blue-300 mb-4" />
                                
                                <p className="text-white/90 leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <img 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                                    />
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-blue-200 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}