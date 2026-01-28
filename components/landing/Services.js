import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { 
    Car, 
    FileCheck, 
    RefreshCw, 
    Shield, 
    Truck, 
    FileText,
    ArrowRight,
    DockIcon
} from 'lucide-react';

const services = [
    {
        icon: RefreshCw,
        title: "Transferência de Veicular",
        description: "Realizamos transferência veicular de forma rápida e segura.",
        color: "bg-blue-600",
        link: "https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    },
    {
        icon: DockIcon,
        title: "Serviços CNH",
        description: "Suspenssão, Cassação, Recursos de Multa",
        color: "bg-blue-500",
        link:"https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    },
    {
        icon: FileCheck,
        title: "Serviços Licenciamento",
        description: "Emissão de CRLV(licenciamento), ATPV(tranferência veicular) e pagamentos de débitos veicular.",
        color: "bg-blue-500",
        link:"https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    },
    {
        icon: Shield,
        title: "Serviços PoupaTempo",
        description: "Agendamentos de: CNH, RG, PID, Transferência Veicular. GOV.br",
        color: "bg-gray-700",
        link:"https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    },
    {
        icon: Car,
        title: "Primeiro Emplacamento",
        description: "Documentação completa para veículos zero km, do início ao fim.",
        color: "bg-blue-600",
        link:"https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    },
    {
        icon: FileText,
        title: "Despachante Geral",
        description: "CNH, certidões, reconhecimento de firma e outros serviços documentais.",
        color: "bg-blue-500",
        link:"https://wa.me/5512988529510?text=Olá! Gostaria de falar com um consultor."
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="servicos">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                        O que fazemos
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Oferecemos soluções completas em documentação veicular e despachante, 
                        sempre com agilidade e transparência.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                        {/* O link envolve o Card inteiro */}
                            <a 
                                href={service.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block h-full no-underline"
                            >
                                <Card className="group p-8 h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 cursor-pointer rounded-2xl">
                                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                    
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm">Saiba mais</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}