"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

const noticiasEsportes = [
    {
        id: 1,
        titulo: "Equipe de Vôlei do SESI vence clássico estadual em partida emocionante",
        resumo: "Com virada histórica no 5º set, o time garantiu vaga antecipada nos playoffs do campeonato nacional com grande atuação coletiva.",
        categoria: "Vôlei",
        data: "13 de Agosto, 2026",
        tempoLeitura: "4 min de leitura",
        autor: "Lucas Ribeiro",
        imagem: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop",
        destaque: true,
    },
    {
        id: 2,
        titulo: "Alunos do SESI conquistam medalhas de ouro no Campeonato de Atletismo",
        resumo: "Jovens atletas se destacaram nas provas de corrida de 100m e salto em altura, quebrando recordes regionais.",
        categoria: "Atletismo",
        data: "12 de Agosto, 2026",
        tempoLeitura: "3 min de leitura",
        autor: "Mariana Souza",
        imagem: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
        destaque: false,
    },
    {
        id: 3,
        titulo: "Novo Centro Esportivo do SESI abre inscrições para natação e basquete",
        resumo: "Complexo conta com piscinas olímpicas aquecidas e quadras poliesportivas de última geração para comunidade e atletas.",
        categoria: "Infraestrutura",
        data: "10 de Agosto, 2026",
        tempoLeitura: "5 min de leitura",
        autor: "Carlos Eduardo",
        imagem: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
        destaque: false,
    },
    {
        id: 4,
        titulo: "Final do Torneio Interescolar de Futebol reúne mais de 3 mil torcedores",
        resumo: "Uma festa do esporte estudantil marcou a decisão do título em um jogo disputado do início ao fim.",
        categoria: "Futebol",
        data: "08 de Agosto, 2026",
        tempoLeitura: "3 min de leitura",
        autor: "Lucas Ribeiro",
        imagem: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
        destaque: false,
    },
];

export default function Esportes() {
    const [filtro, setFiltro] = useState("Todos");

    const principal = noticiasEsportes.find((n) => n.destaque) || noticiasEsportes[0];
    const secundarias = noticiasEsportes.filter((n) => {
        if (n.id === principal.id) return false;
        if (filtro === "Todos") return true;
        return n.categoria.toLowerCase() === filtro.toLowerCase();
    });

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
            <Header />

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-6">
                    <Link href="/" className="hover:text-red-600 transition-colors">Início</Link>
                    <span>/</span>
                    <Link href="/categorias" className="hover:text-red-600 transition-colors">Categorias</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-slate-200 font-semibold">Esportes</span>
                </nav>

                {/* Page Title & Filter Tags */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white mb-2 shadow-sm">
                            Editoria Esportiva
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            Esportes & Atividades
                        </h1>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                        {["Todos", "Futebol", "Vôlei", "Basquete", "Atletismo"].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setFiltro(tag)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                                    filtro === tag
                                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-red-500"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Article Card */}
                <div className="mb-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-700/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group hover:shadow-xl transition-shadow duration-300">
                        <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                style={{ backgroundImage: `url(${principal.imagem})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:hidden" />
                            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
                                Destaque
                            </span>
                        </div>

                        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                    <span className="font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                                        {principal.categoria}
                                    </span>
                                    <span>•</span>
                                    <span>{principal.data}</span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-4">
                                    {principal.titulo}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                    {principal.resumo}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Por <strong className="text-slate-900 dark:text-white">{principal.autor}</strong>
                                </span>
                                <span className="text-slate-500 dark:text-slate-400">{principal.tempoLeitura}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary News Grid */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                        Mais Notícias de Esportes
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {secundarias.map((noticia) => (
                            <article
                                key={noticia.id}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg border border-slate-200/80 dark:border-slate-700/60 overflow-hidden flex flex-col group transition-all duration-300 transform group-hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${noticia.imagem})` }}
                                    />
                                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                        {noticia.categoria}
                                    </span>
                                </div>

                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                                            {noticia.data} • {noticia.tempoLeitura}
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2 leading-snug">
                                            {noticia.titulo}
                                        </h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                                            {noticia.resumo}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-red-600 dark:text-red-400">
                                        Ler matéria completa →
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}