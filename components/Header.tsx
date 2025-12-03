'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import MobileMenu from './MobileMenu'

interface HeaderProps {
    data: {
        navigation: {
            label: string
            href: string
        }[]
        social: {
            platform: string
            url: string
        }[]
        headerToggle: {
            leftText: string
            rightText: string
            leftColor: string
            rightColor: string
            leftTextColor: string
            rightTextColor: string
        }
    }
}

export default function Header({ data }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const navigation = data?.navigation || []
    const social = data?.social || []
    const toggle = data?.headerToggle || {
        leftText: '梁家誠',
        rightText: 'Kent Design',
        leftColor: '#1a1a1a',
        rightColor: '#ffffff',
        leftTextColor: '#ffffff',
        rightTextColor: '#000000'
    }

    // Handle hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Sync URL param with theme
    useEffect(() => {
        if (!mounted) return
        const themeParam = searchParams.get('theme')
        if (themeParam === 'dark' || themeParam === 'light') {
            if (theme !== themeParam) {
                setTheme(themeParam)
            }
        }
    }, [searchParams, mounted, setTheme, theme])

    // 監聽滾動事件
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)

        // Update URL
        const params = new URLSearchParams(searchParams.toString())
        params.set('theme', newTheme)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    if (!mounted) return null

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                    isScrolled ? 'py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
                )}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                    {/* Theme Toggle (Logo Replacement) */}
                    <button
                        onClick={handleThemeToggle}
                        className="relative z-50 group flex items-center justify-center"
                        aria-label="Toggle Theme"
                    >
                        <div className="relative flex items-center border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full p-1 h-10 transition-colors duration-300 hover:border-black dark:hover:border-white">

                            {/* Left Option */}
                            <div className="relative z-10 px-4 py-1">
                                <span className={clsx(
                                    "text-sm font-bold tracking-wider transition-colors duration-300",
                                    theme === 'dark' ? "text-white" : "text-black/60 hover:text-black"
                                )}>
                                    {toggle.leftText}
                                </span>
                                {theme === 'dark' && (
                                    <motion.div
                                        layoutId="toggle-pill"
                                        className="absolute inset-0 bg-black rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ backgroundColor: toggle.leftColor }}
                                    />
                                )}
                            </div>

                            {/* Right Option */}
                            <div className="relative z-10 px-4 py-1">
                                <span className={clsx(
                                    "text-sm font-bold tracking-wider transition-colors duration-300",
                                    theme === 'light' ? "text-black" : "text-white/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                                )}>
                                    {toggle.rightText}
                                </span>
                                {theme === 'light' && (
                                    <motion.div
                                        layoutId="toggle-pill"
                                        className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ backgroundColor: toggle.rightColor }}
                                    />
                                )}
                            </div>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={clsx(
                                        'text-xs font-medium uppercase tracking-[0.2em] transition-colors relative',
                                        isActive ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
                                    )}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-black dark:bg-white"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden relative z-50 p-2 group w-12 h-12 flex items-center justify-center"
                        aria-label="Open Menu"
                    >
                        <div className="flex flex-col gap-[6px] items-end w-6">
                            <span className={clsx("w-full h-[1.5px] bg-black dark:bg-white transition-all duration-300 group-hover:w-4", isMobileMenuOpen && "rotate-45 translate-y-[8px]")}></span>
                            <span className={clsx("w-4 h-[1.5px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full", isMobileMenuOpen && "opacity-0")}></span>
                            <span className={clsx("w-2 h-[1.5px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full", isMobileMenuOpen && "-rotate-45 -translate-y-[8px]")}></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        onClose={() => setIsMobileMenuOpen(false)}
                        navigation={navigation}
                        social={social}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
