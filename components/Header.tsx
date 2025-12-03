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
                    <div className="flex items-center gap-6">
                        {/* Branding Text */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <span className="text-sm font-bold tracking-wider text-black dark:text-white transition-colors">
                                {toggle.leftText}
                            </span>
                            <span className="w-[1px] h-4 bg-gray-300 dark:bg-gray-700"></span>
                            <span className="text-sm font-bold tracking-wider text-black dark:text-white transition-colors">
                                {toggle.rightText}
                            </span>
                        </Link>

                        {/* Theme Toggle (Eclipse Style) */}
                        <label className="toggle-label relative group" aria-label="Toggle Theme">
                            <input
                                type="checkbox"
                                className="toggle-input"
                                checked={theme === 'dark'}
                                onChange={(e) => {
                                    const newTheme = e.target.checked ? 'dark' : 'light'

                                    // Update URL
                                    const params = new URLSearchParams(searchParams.toString())
                                    params.set('theme', newTheme)
                                    router.replace(`${pathname}?${params.toString()}`, { scroll: false })

                                    // Get coordinates for the transition center
                                    const rect = e.target.parentElement?.getBoundingClientRect()
                                    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
                                    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2

                                    document.documentElement.style.setProperty('--x', `${x}px`)
                                    document.documentElement.style.setProperty('--y', `${y}px`)

                                    if (!(document as any).startViewTransition) {
                                        setTheme(newTheme)
                                        return
                                    }

                                    (document as any).startViewTransition(() => {
                                        setTheme(newTheme)
                                    })
                                }}
                            />
                            <div className="toggle-div"></div>
                        </label>
                    </div>

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
