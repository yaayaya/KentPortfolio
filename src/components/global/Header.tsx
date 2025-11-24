"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { staggerContainerFast, slideInRight } from "@/lib/animations";

const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight hover:text-muted-foreground transition-colors"
                >
                    Kent Portfolio
                </Link>

                {/* 桌面版導航 */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-base font-normal transition-colors duration-300",
                                pathname.startsWith(link.href)
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* 行動版選單按鈕 */}
                <button
                    className="md:hidden p-2 hover:opacity-70 transition-opacity"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* 行動版全螢幕選單 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-20 bg-background z-40"
                    >
                        <motion.nav
                            variants={staggerContainerFast}
                            initial="initial"
                            animate="animate"
                            className="flex flex-col items-center justify-center h-full gap-12 p-8"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    variants={slideInRight}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={clsx(
                                            "text-4xl font-medium transition-colors duration-300 relative group",
                                            pathname.startsWith(link.href)
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
