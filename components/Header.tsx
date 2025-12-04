'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
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
            leftSubtitle: string
            rightText: string
            rightSubtitle: string
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
    const { scrollY } = useScroll()

    const navigation = data?.navigation || []
    const social = data?.social || []
    const toggle = {
        leftText: data?.headerToggle?.leftText || '梁家誠',
        leftSubtitle: data?.headerToggle?.leftSubtitle || 'Art',
        rightText: data?.headerToggle?.rightText || 'Kent',
        rightSubtitle: data?.headerToggle?.rightSubtitle || 'Designer',
        leftColor: data?.headerToggle?.leftColor || '#1a1a1a',
        rightColor: data?.headerToggle?.rightColor || '#ffffff',
        leftTextColor: data?.headerToggle?.leftTextColor || '#ffffff',
        rightTextColor: data?.headerToggle?.rightTextColor || '#000000'
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted])

    // Optimized scroll handler using framer-motion
    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled)
        }
    })

    if (!mounted) return null

    const headerVariants = {
        top: {
            height: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
            borderBottomColor: 'rgba(0,0,0,0)'
        },
        scrolled: {
            height: '70px',
            backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottomColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
        }
    }

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-[100] flex items-center border-b"
                initial={isScrolled ? 'scrolled' : 'top'}
                animate={isScrolled ? 'scrolled' : 'top'}
                variants={headerVariants}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between w-full h-full">
                    <div className="flex items-center gap-3">
                        {/* Branding Text - Identity Switch */}
                        <Link href="/" className="flex items-center gap-2 group relative w-32 md:w-40">
                            <AnimatePresence mode="wait">
                                {theme === 'dark' ? (
                                    <motion.div
                                        key="dark-identity"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-wrap items-center gap-x-2 gap-y-0"
                                    >
                                        <span className="text-base md:text-lg font-bold tracking-wider text-white leading-none">
                                            {toggle.leftText}
                                        </span>
                                        <span className="w-[1px] h-4 bg-gray-700"></span>
                                        <span className="text-sm font-medium tracking-wider text-gray-400 leading-none">
                                            {toggle.leftSubtitle}
                                        </span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="light-identity"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-wrap items-center gap-x-2 gap-y-0"
                                    >
                                        <span className="text-base md:text-lg font-bold tracking-wider text-black leading-none">
                                            {toggle.rightText}
                                        </span>
                                        <span className="w-[1px] h-4 bg-gray-300"></span>
                                        <span className="text-sm font-medium tracking-wider text-gray-500 leading-none">
                                            {toggle.rightSubtitle}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                                        'text-xs font-medium uppercase tracking-[0.2em] transition-colors relative py-2',
                                        isActive ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
                                    )}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-black dark:bg-white"
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
            </motion.header>

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
