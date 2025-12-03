'use client'

import Link from 'next/link'
import { Mail, Instagram, Linkedin, Github, Dribbble } from 'lucide-react'

interface FooterProps {
    data: {
        site: {
            title: string
            description: string
            email: string
        }
        navigation: {
            label: string
            href: string
        }[]
        social: {
            platform: string
            url: string
        }[]
    }
}

export default function Footer({ data }: FooterProps) {
    const currentYear = new Date().getFullYear()
    const { site, navigation, social } = data || {}

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-12 px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center gap-16">

                {/* Top: Brand Indicator */}
                <div className="space-y-4">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white">
                        Today / {site?.title || 'Kent'}
                    </div>
                </div>

                {/* Middle: Contact Icons (No Email Text) */}
                <div className="flex items-center gap-6">
                    {/* Email Icon */}
                    {site?.email && (
                        <a
                            href={`mailto:${site.email}`}
                            className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all group"
                            title="Email"
                        >
                            <Mail size={20} />
                        </a>
                    )}

                    {/* Social Icons */}
                    {social?.map(item => {
                        const Icon = getIcon(item.platform)
                        // Skip Email in social loop if it's already handled above, or just handle all here if 'Email' is in social list
                        if (item.platform.toLowerCase() === 'email') return null

                        return (
                            <a
                                key={item.platform}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all"
                                title={item.platform}
                            >
                                <Icon size={20} />
                            </a>
                        )
                    })}
                </div>

                {/* Bottom: Sitemap & Copyright */}
                <div className="w-full pt-12 border-t border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    <div className="flex gap-8">
                        {navigation?.map(item => {
                            if (item.label === 'Contact') return null
                            return (
                                <Link key={item.href} href={item.href} className="hover:text-black dark:hover:text-white transition-colors">
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>
                    <p>© {currentYear} {site?.title}. All rights reserved.</p>
                </div>
            </div>
        </footer>
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
