'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import globalData from '@/content/settings/global.json'

interface MobileMenuProps {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
        >
            {/* Header inside menu */}
            <div className="flex items-center justify-between px-6 py-8">
                <span className="text-xl font-bold tracking-tighter uppercase">Menu</span>
                <button
                    onClick={onClose}
                    className="w-12 h-12 flex items-center justify-center hover:opacity-50 transition-opacity"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-8">
                {globalData.navigation.map((item, index) => {
                    const isContact = item.label === 'Contact'

                    if (isContact) {
                        return (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-4xl font-light uppercase tracking-tight hover:text-gray-500 transition-colors block"
                                >
                                    {item.label}
                                </a>
                            </motion.div>
                        )
                    }

                    return (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                onClick={onClose}
                                className="text-4xl font-light uppercase tracking-tight hover:text-gray-500 transition-colors block"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    )
                })}
            </div>

            {/* Footer Info */}
            <div className="px-6 py-8 border-t border-gray-100 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Social</span>
                    <div className="flex gap-4 text-sm font-medium">
                        <a href="#">IG</a>
                        <a href="#">LN</a>
                    </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                    © 2025 Kent
                </p>
            </div>
        </motion.div>
    )
}
