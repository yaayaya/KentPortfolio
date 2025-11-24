'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface NavItem {
    label: string
    href: string
}

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    navItems: NavItem[]
}

/**
 * 手機版選單元件 - 完美復刻原網站
 */
export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* 背景遮罩 */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-50 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* 選單內容 */}
                    <motion.div
                        className="fixed inset-y-0 right-0 w-full bg-white z-50 lg:hidden overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 300,
                        }}
                    >
                        <div className="min-h-full flex flex-col">
                            {/* 頂部關閉按鈕 */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                                    aria-label="關閉選單"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* 選單項目 */}
                            <nav className="flex-1 px-8 pb-12">
                                <motion.ul
                                    className="space-y-8"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.15,
                                            },
                                        },
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <motion.li
                                            key={item.href}
                                            variants={{
                                                hidden: { opacity: 0, x: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    },
                                                },
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="block text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Email 連結 */}
                                <motion.div
                                    className="mt-12"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                >
                                    <a
                                        href="mailto:manolo.bevia@gmail.com"
                                        className="block text-lg hover:opacity-70 transition-opacity"
                                        onClick={onClose}
                                    >
                                        manolo.bevia@gmail.com
                                    </a>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
