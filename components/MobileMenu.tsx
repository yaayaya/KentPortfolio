'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { X, Mail, Linkedin, Instagram, Github, Dribbble } from 'lucide-react'

interface MobileMenuProps {
    onClose: () => void
    navigation: {
        label: string
        href: string
    }[]
    social: {
        platform: string
        url: string
    }[]
}

export default function MobileMenu({ onClose, navigation, social }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col text-black dark:text-white"
        >
            {/* Header inside menu */}
            <div className="flex items-center justify-between px-6 py-8">
                <span className="text-xl font-bold tracking-tighter uppercase">Menu</span>
                <button
                    onClick={onClose}
                    className="w-12 h-12 flex items-center justify-center hover:opacity-50 transition-opacity bg-gray-100 dark:bg-white/10 rounded-full"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-6 items-center">
                {navigation.map((item, index) => (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className="text-4xl lg:text-6xl font-light uppercase tracking-tight hover:text-gray-500 dark:hover:text-gray-400 transition-colors block"
                        >
                            {item.label}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Social Section */}
            <div className="px-6 py-12 flex flex-col items-center gap-8">
                {/* Icons Row */}
                <div className="flex justify-center gap-6">
                    {social.map((item, index) => {
                        const Icon = getIcon(item.platform)
                        return (
                            <motion.a
                                key={item.platform}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                            >
                                <Icon size={20} />
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

function getIcon(platform: string) {
    switch (platform.toLowerCase()) {
        case 'email': return Mail
        case 'instagram': return Instagram
        case 'linkedin': return Linkedin
        case 'github': return Github
        case 'dribbble': return Dribbble
        default: return Mail
    }
}
