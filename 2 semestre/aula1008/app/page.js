import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const noticiasDestaque = [
    {
        id: 1,
        titulo: "SESI lança programa de bolsas para Cursos de Tecnologia e Robótica",
        resumo: "Iniciativa oferece mais de 500 vagas gratuitas para jovens estudantes interessados em programação, IA e automação industrial.",
        categoria: "Tecnologia",
        categoriaCor: "bg-blue-600",
        data: "13 de Agosto, 2026",
        tempoLeitura: "4 min",
        imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        destaquePrincipal: true
    },
    {
        id: 2,
        titulo: "Equipe de Vôlei do SESI garante vaga nos playoffs com vitória espetacular",
        resumo: "Com virada no último set, o time da casa assegurou a classificação no campeonato estadual.",
        categoria: "Esportes",
        categoriaCor: "bg-red-600",
        data: "13 de Agosto, 2026",
        tempoLeitura: "3 min",
        imagem: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop",
        destaquePrincipal: false
    },
    {
        id: 3,
        titulo: "Feira de Inovação Industrial apresenta projetos sustentáveis desenvolvidos por alunos",
        resumo: "Soluções ecológicas para energia limpa e reciclagem foram premiadas em evento nacional.",
        categoria: "Educação",
        categoriaCor: "bg-emerald-600",
        data: "12 de Agosto, 2026",
        tempoLeitura: "5 min",
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        destaquePrincipal: false
    }
];

const ultimasNoticias = [
    {
        id: 4,
        titulo: "Exposição de Arte Contemporânea no Centro Cultural SESI abre nesta sexta-feira",
        resumo: "Obras de artistas renomados e oficinas gratuitas de pintura para toda a família.",
        categoria: "Cultura",
        categoriaCor: "bg-purple-600",
        data: "11 de Agosto, 2026",
        imagem: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        titulo: "Inscrições abertas para o Torneio Interescolar de Natação do SESI",
        resumo: "Competição reunirá atletas de 15 cidades com provas individuais e de revezamento.",
        categoria: "Esportes",
        categoriaCor: "bg-red-600",
        data: "10 de Agosto, 2026",
        imagem: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        titulo: "Programa de Saúde e Qualidade de Vida beneficia mais de 10 mil trabalhadores",
        resumo: "Ações integradas de nutrição, ergonomia e atividades físicas nas indústrias da região.",
        categoria: "Saúde",
        categoriaCor: "bg-teal-600",
        data: "09 de Agosto, 2026",
        imagem: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    }
];

export default function Home() {
    const noticiaPrincipal = noticiasDestaque.find(n => n.destaquePrincipal) || noticiasDestaque[0];
    const noticiasSecundarias = noticiasDestaque.filter(n => !n.destaquePrincipal);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <Header />

            {/* Breaking News Ticker */}
            <div className="bg-red-600 text-white text-xs font-semibold py-2 px-4 shadow-inner">
                <div className="max-w-7xl mx-auto flex items-center space-x-3">
                    <span className="bg-slate-950 text-red-400 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                        URGENTE
                    </span>
                    <p className="truncate">
                        Inscrições abertas para novos cursos técnicos gratuitos no SESI. Clique aqui e saiba mais!
                    </p>
                </div>
            </div>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                {/* Hero Section Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Big Feature */}
                    <div className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-lg bg-slate-900 border border-slate-800 min-h-[380px] lg:min-h-[460px] flex flex-col justify-end">
                        <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            style={{ backgroundImage: `url(${noticiaPrincipal.imagem})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                        <div className="relative p-6 sm:p-8 space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className={`${noticiaPrincipal.categoriaCor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow`}>
                                    {noticiaPrincipal.categoria}
                                </span>
                                <span className="text-xs text-slate-300 font-medium">
                                    {noticiaPrincipal.data} • {noticiaPrincipal.tempoLeitura}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight group-hover:text-red-400 transition-colors">
                                {noticiaPrincipal.titulo}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-300 line-clamp-2 leading-relaxed">
                                {noticiaPrincipal.resumo}
                            </p>

                            <div className="pt-2">
                                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-red-400 group-hover:text-red-300">
                                    Ler notícia completa
                                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Stacked Highlights */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                            Destaques da Semana
                        </h2>
                        {noticiasSecundarias.map((noticia) => (
                            <div
                                key={noticia.id}
                                className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between flex-1 cursor-pointer"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400">
                                        <span className={`w-2 h-2 rounded-full ${noticia.categoriaCor}`} />
                                        <span className="font-semibold text-slate-700 dark:text-slate-300 uppercase">{noticia.categoria}</span>
                                        <span>•</span>
                                        <span>{noticia.data}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                                        {noticia.titulo}
                                    </h3>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-2">
                                    {noticia.resumo}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Categories Bar */}
                <section className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Navegue por Editorias
                        </h3>
                        <Link href="/categorias" className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline">
                            Ver todas →
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {[
                            { title: "Esportes", href: "/categorias/esportes", icon: "⚽" },
                            { title: "Tecnologia", href: "/categorias", icon: "🤖" },
                            { title: "Educação", href: "/categorias", icon: "🎓" },
                            { title: "Cultura", href: "/categorias", icon: "🎨" },
                            { title: "Saúde", href: "/categorias", icon: "🩺" },
                            { title: "Economia", href: "/categorias", icon: "📈" },
                        ].map((cat) => (
                            <Link
                                key={cat.title}
                                href={cat.href}
                                className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-red-950/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 font-medium text-xs transition-colors group"
                            >
                                <span className="text-base">{cat.icon}</span>
                                <span className="group-hover:text-red-600 dark:group-hover:text-red-400 font-semibold">{cat.title}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Latest News Feed */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Últimas Notícias
                        </h2>
                        <span className="text-xs text-slate-500 font-medium">Atualizado em tempo real</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ultimasNoticias.map((item) => (
                            <article
                                key={item.id}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md border border-slate-200/80 dark:border-slate-700/60 overflow-hidden flex flex-col group transition-all duration-300"
                            >
                                <div className="relative h-44 overflow-hidden bg-slate-200 dark:bg-slate-700">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${item.imagem})` }}
                                    />
                                    <span className={`absolute top-3 left-3 ${item.categoriaCor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow`}>
                                        {item.categoria}
                                    </span>
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <span className="text-[11px] text-slate-400 font-medium">{item.data}</span>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                                            {item.titulo}
                                        </h3>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {item.resumo}
                                        </p>
                                    </div>
                                    <div className="mt-4 text-xs font-semibold text-red-600 dark:text-red-400">
                                        Ler mais →
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}