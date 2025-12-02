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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
        >
            {/* Header inside menu */}
            <div className="flex items-center justify-between px-6 py-8">
                <span className="text-xl font-bold tracking-tighter uppercase">Menu</span>
                <button onClick={onClose} className="p-2 hover:opacity-50 transition-opacity">
                    <X size={32} strokeWidth={1} />
                </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-8">
                {globalData.navigation.map((item, index) => (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className="text-4xl font-light uppercase tracking-tight hover:text-gray-500 transition-colors"
                        >
                            {item.label}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Footer Info */}
            <div className="px-6 py-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                    © 2025 Kent 梁家誠
                </p>
            </div>
        </motion.div>
    )
}
