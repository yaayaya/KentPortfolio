'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

interface NavItem {
    label: string
    href: string
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
]

/**
 * 頂部導航元件 - 完美復刻原網站
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 防止背景滾動
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <motion.header
                className={cn(
                    'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
                        : 'bg-transparent'
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo - 桌面版和手機版 */}
                        <Link
                            href="/"
                            className="text-base lg:text-lg font-medium tracking-tight hover:opacity-70 transition-opacity relative z-50"
                        >
                            Home
                        </Link>

                        {/* 桌面版導航 - 只在大螢幕顯示 */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navItems.slice(1).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[15px] font-normal hover:opacity-70 transition-opacity"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="mailto:kent.liang@example.com"
                                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                                aria-label="Email"
                                title="kent.liang@example.com"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </a>
                        </nav>

                        {/* 手機版漢堡按鈕 - 只在小螢幕顯示 */}
                        <button
                            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center group"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="開啟選單"
                        >
                            {/* 高級黑圓形背景 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-full transition-all group-hover:scale-110 group-hover:shadow-lg" />

                            {/* 白色橫線 */}
                            <div className="relative flex flex-col items-center justify-center gap-[4px]">
                                <span className="w-[16px] h-[2px] bg-white rounded-full transition-all group-hover:w-[18px]" />
                                <span className="w-[16px] h-[2px] bg-white rounded-full transition-all group-hover:w-[18px]" />
                                <span className="w-[16px] h-[2px] bg-white rounded-full transition-all group-hover:w-[18px]" />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* 手機版選單 */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navItems={navItems}
            />
        </>
    )
}
