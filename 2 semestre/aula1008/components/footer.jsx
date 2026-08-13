"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand column */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center space-x-2">
                            <div className="bg-red-600 text-white font-black text-lg px-2 py-0.5 rounded tracking-wider">
                                SESI
                            </div>
                            <span className="text-lg font-bold text-white tracking-tight">NEWS</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Seu portal de informação confiável sobre esportes, tecnologia, educação e novidades do ecossistema SESI.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navegação</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-red-400 transition-colors">Início</Link></li>
                            <li><Link href="/categorias" className="hover:text-red-400 transition-colors">Todas as Categorias</Link></li>
                            <li><Link href="/categorias/esportes" className="hover:text-red-400 transition-colors">Esportes</Link></li>
                        </ul>
                    </div>

                    {/* Categorias */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Editorias</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/categorias/esportes" className="hover:text-red-400 transition-colors">Esportes e Lazer</Link></li>
                            <li><Link href="/categorias" className="hover:text-red-400 transition-colors">Tecnologia & Inovação</Link></li>
                            <li><Link href="/categorias" className="hover:text-red-400 transition-colors">Educação Profissional</Link></li>
                            <li><Link href="/categorias" className="hover:text-red-400 transition-colors">Cultura & Arte</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Boletim Informativo</h4>
                        <p className="text-xs text-slate-400 mb-3">Receba as principais notícias diariamente no seu e-mail.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                            <input
                                type="email"
                                placeholder="Seu e-mail..."
                                className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-500 text-white font-medium text-xs py-2 rounded-lg transition-colors shadow-sm"
                            >
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
                    <p>© 2026 SESI News. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <span className="hover:text-slate-400 cursor-pointer">Termos de Uso</span>
                        <span className="hover:text-slate-400 cursor-pointer">Privacidade</span>
                        <span className="hover:text-slate-400 cursor-pointer">Contato</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}