"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: "Início", path: "/" },
        { name: "Categorias", path: "/categorias" },
        { name: "Esportes", path: "/categorias/esportes" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-red-600 text-white font-black text-xl px-2.5 py-1 rounded-md tracking-wider shadow-md group-hover:bg-red-500 transition-colors">
                            SESI
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white">
                            NEWS
                        </span>
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-red-600/90 text-white shadow-sm"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Search / Action Button */}
                    <div className="flex items-center space-x-3">
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Buscar notícias..."
                                className="bg-slate-800/80 text-sm text-slate-200 placeholder-slate-400 rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-slate-800 transition-all border border-slate-700/60 w-44 focus:w-60"
                            />
                            <svg
                                className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        
                        <button className="bg-red-600 hover:bg-red-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm">
                            Ao Vivo
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Row */}
                <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-800 text-sm">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-3 py-1 rounded-md text-xs font-medium ${
                                    isActive
                                        ? "text-red-500 font-bold"
                                        : "text-slate-400 hover:text-slate-200"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}