import React from 'react';
import { FileText, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Main Footer */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">DocFlow</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Simplificamos a burocracia para você. 
                            Despachante documentalista com mais de 10 anos de experiência.
                        </p>                        
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Serviços</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#servicos" className="hover:text-white transition-colors">Transferência de Veículos</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços CNH</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços Licenciamento</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços PoupaTempo</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Primeiro Emplacamento</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Despachante Geral</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
                            <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contato</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Rua Castor, 25, sala 162 - São José dos Campos, SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span>(12) 98852-9510</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span>suportedocflow@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} DocFlow - Serviços Veicular DETRAN. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-600 text-sm">
                        CPF: 387.884.738-64
                    </p>
                </div>
            </div>
        </footer>
    );
}