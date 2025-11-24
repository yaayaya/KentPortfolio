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
                                href="mailto:manolo.bevia@gmail.com"
                                className="text-[15px] font-normal hover:opacity-70 transition-opacity"
                            >
                                manolo.bevia@gmail.com
                            </a>
                        </nav>

                        {/* 手機版漢堡按鈕 - 只在小螢幕顯示 */}
                        <button
                            className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center group"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="開啟選單"
                        >
                            {/* 紫色圓形背景 */}
                            <div className="absolute inset-0 bg-[#7F66DA] rounded-full transition-transform group-hover:scale-110" />

                            {/* 白色橫線 */}
                            <div className="relative flex flex-col items-center justify-center gap-[3px]">
                                <span className="w-[14px] h-[2px] bg-white rounded-full" />
                                <span className="w-[14px] h-[2px] bg-white rounded-full" />
                                <span className="w-[14px] h-[2px] bg-white rounded-full" />
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
