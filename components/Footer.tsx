'use client'

import Link from 'next/link'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import globalData from '@/content/settings/global.json'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-100 py-20 px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* Brand & Intro (Col 1-5) */}
                <div className="lg:col-span-5 space-y-8">
                    <Link href="/" className="inline-block">
                        <span className="text-2xl font-bold tracking-tighter uppercase">
                            Kent 梁家誠
                        </span>
                    </Link>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        Digital Artist / Designer based in Taipei.
                        <br />
                        Exploring the boundaries between tools and objects through interactive installations and visual experiments.
                    </p>
                </div>

                {/* Sitemap (Col 6-8) */}
                <div className="lg:col-span-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400">Sitemap</h4>
                    <ul className="space-y-4">
                        {globalData.navigation.map(item => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-sm font-medium hover:text-gray-500 transition-colors uppercase tracking-wider">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social (Col 9-12) */}
                <div className="lg:col-span-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400">Contact</h4>

                    {/* Email Button - Removed Address, kept Icon */}
                    <a
                        href="mailto:kent@example.com"
                        className="group flex items-center gap-4 text-xl font-medium hover:text-gray-600 transition-colors mb-8"
                    >
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                            <Mail size={18} />
                        </div>
                        <span>kent@example.com</span>
                    </a>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
                <p>© {currentYear} Kent 梁家誠. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </div>
            </div>
        </footer>
    )
}
