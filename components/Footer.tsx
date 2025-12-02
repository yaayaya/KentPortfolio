'use client'

import Link from 'next/link'
import globalData from '@/content/settings/global.json'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-100 py-20 px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="lg:col-span-2">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-xl font-bold tracking-tighter uppercase">
                            Kent 梁家誠
                        </span>
                    </Link>
                    <p className="text-gray-500 max-w-sm leading-relaxed">
                        Digital Artist / Designer based in Taipei.
                        Exploring the boundaries between tools and objects.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Sitemap</h4>
                    <ul className="space-y-3">
                        {globalData.navigation.map(item => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-sm hover:text-gray-500 transition-colors uppercase tracking-wider">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social / Contact */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Connect</h4>
                    <ul className="space-y-3">
                        <li>
                            <a href="mailto:kent@example.com" className="text-sm hover:text-gray-500 transition-colors uppercase tracking-wider">
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-gray-500 transition-colors uppercase tracking-wider">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-gray-500 transition-colors uppercase tracking-wider">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
                <p>© {currentYear} Kent 梁家誠. All rights reserved.</p>
                <p>Designed & Built by Kent</p>
            </div>
        </footer>
    )
}
