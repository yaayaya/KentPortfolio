'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import globalData from '@/content/settings/global.json'
import MobileMenu from './MobileMenu'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    // 監聽滾動事件
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                    isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
                )}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <span className="text-xl lg:text-2xl font-bold tracking-tighter uppercase">
                            Kent 梁家誠
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {globalData.navigation.map((item) => {
                            const isActive = pathname === item.href
                            const isContact = item.label === 'Contact'

                            if (isContact) {
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                )
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={clsx(
                                        'text-xs font-medium uppercase tracking-[0.2em] transition-colors relative',
                                        isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                                    )}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-black"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile Menu Button - Refined Design */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden relative z-50 p-2 group w-12 h-12 flex items-center justify-center"
                        aria-label="Open Menu"
                    >
                        <div className="flex flex-col gap-[6px] items-end w-6">
                            <span className="w-full h-[1.5px] bg-black transition-all duration-300 group-hover:w-4"></span>
                            <span className="w-4 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
                )}
            </AnimatePresence>
        </>
    )
}
