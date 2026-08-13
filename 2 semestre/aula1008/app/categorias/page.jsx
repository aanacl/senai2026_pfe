import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const categorias = [
    {
        titulo: "Esportes",
        slug: "esportes",
        descricao: "Acompanhe tudo sobre torneios, campeonatos, futebol, vôlei e atividades esportivas no SESI.",
        imagem: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 24,
        corBadge: "bg-red-500/10 text-red-600 dark:bg-red-900/30 dark:text-red-400 border border-red-500/20"
    },
    {
        titulo: "Tecnologia & Inovação",
        slug: "tecnologia",
        descricao: "Projetos de robótica, programação, inteligência artificial e feiras de ciências industriais.",
        imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 18,
        corBadge: "bg-blue-500/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-500/20"
    },
    {
        titulo: "Educação Profissional",
        slug: "educacao",
        descricao: "Cursos técnicos, vestibulares, bolsas de estudo e qualificação para o mercado de trabalho.",
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 32,
        corBadge: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-500/20"
    },
    {
        titulo: "Cultura & Arte",
        slug: "cultura",
        descricao: "Exposições, peças teatrais, oficinas musicais e eventos culturais promovidos na comunidade.",
        imagem: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 15,
        corBadge: "bg-purple-500/10 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-500/20"
    },
    {
        titulo: "Saúde & Bem-Estar",
        slug: "saude",
        descricao: "Dicas de saúde preventiva, qualidade de vida no trabalho e programas de bem-estar.",
        imagem: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 12,
        corBadge: "bg-teal-500/10 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 border border-teal-500/20"
    },
    {
        titulo: "Economia & Indústria",
        slug: "economia",
        descricao: "Indicadores econômicos, tendências industriais e oportunidades de carreira no setor produtivo.",
        imagem: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
        qtdNoticias: 20,
        corBadge: "bg-amber-500/10 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-500/20"
    }
];

export default function Categorias() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
            <Header />

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header Title Section */}
                <div className="mb-10 text-center sm:text-left">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 mb-2">
                        Explorar
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Categorias de Notícias
                    </h1>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                        Navegue por nossas seções temáticas e fique atualizado com o conteúdo exclusivo do SESI News.
                    </p>
                </div>

                {/* Grid of Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) => (
                        <Link
                            key={categoria.slug}
                            href={`/categorias/${categoria.slug}`}
                            className="block group"
                        >
                            <div className="h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                        style={{ backgroundImage: `url(${categoria.imagem})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    
                                    <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium shadow">
                                        {categoria.qtdNoticias} matérias
                                    </span>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoria.corBadge}`}>
                                            {categoria.titulo}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
                                            {categoria.titulo}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {categoria.descricao}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                                        <span>Ver notícias da categoria</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}