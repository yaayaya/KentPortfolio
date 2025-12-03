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
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                {/* Brand Column (Col 1-6) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full min-h-[200px]">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tighter uppercase">
                                {site?.title || 'Kent'}
                            </span>
                        </Link>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                            {site?.description}
                        </p>
                    </div>

                    <div className="hidden lg:block text-xs text-gray-400 uppercase tracking-widest mt-auto">
                        © {currentYear} {site?.title}. All rights reserved.
                    </div>
                </div>

                {/* Sitemap (Col 7-9) */}
                <div className="lg:col-span-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400">Sitemap</h4>
                    <ul className="space-y-4">
                        {navigation?.map(item => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-sm font-medium hover:text-gray-500 transition-colors uppercase tracking-wider">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social / Contact (Col 10-12) */}
                <div className="lg:col-span-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400">Connect</h4>
                    <div className="flex flex-wrap gap-4">
                        {social?.map(item => {
                            const Icon = getIcon(item.platform)
                            return (
                                <a
                                    key={item.platform}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all"
                                    title={item.platform}
                                >
                                    <Icon size={18} />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Mobile Copyright */}
                <div className="lg:hidden text-xs text-gray-400 uppercase tracking-widest pt-8 border-t border-gray-100">
                    © {currentYear} {site?.title}. All rights reserved.
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
