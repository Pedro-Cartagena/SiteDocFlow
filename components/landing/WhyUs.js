import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    Shield, 
    HeadphonesIcon, 
    CreditCard,
    MapPin,
    Clock
} from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Agilidade",
        description: "Processos otimizados para entregar sua documentação no menor tempo possível."
    },
    {
        icon: Shield,
        title: "Segurança",
        description: "Seus dados e documentos protegidos com os mais altos padrões de segurança."
    },
    {
        icon: HeadphonesIcon,
        title: "Suporte Dedicado",
        description: "Atendimento humanizado e personalizado em todas as etapas do processo."
    },
    {
        icon: CreditCard,
        title: "Facilidade de Pagamento",
        description: "Diversas formas de pagamento para sua conveniência, incluindo parcelamento."
    },
    {
        icon: MapPin,
        title: "Atendimento Online",
        description: "Resolva tudo sem sair de casa. Enviamos e recebemos documentos digitalmente."
    },
    {
        icon: Clock,
        title: "Transparência Total",
        description: "Acompanhe o status do seu processo em tempo real pelo nosso sistema."
    }
];

export default function WhyUs() {
    return (
        <section className="py-24 bg-white" id="diferenciais">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                        Por que nos escolher
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Nossos Diferenciais
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Combinamos experiência, tecnologia e atendimento de excelência 
                        para oferecer o melhor serviço de despachante.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}