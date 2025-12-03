import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client } from '@/tina/__generated__/client'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Kent 梁家誠 | Digital Artist',
    description: 'Digital Artist / Designer based in Taipei.',
    keywords: ['Digital Art', 'Interactive Design', 'Installation', 'Portfolio', 'Kent 梁家誠'],
    authors: [{ name: 'Kent 梁家誠' }],
    openGraph: {
        title: 'Kent 梁家誠 | Digital Artist',
        description: 'Exploring the boundaries between tools and objects.',
        type: 'website',
    },
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const globalRes = await client.queries.global({ relativePath: 'global.json' })
    const globalData = globalRes.data.global

    return (
        <html lang="zh-TW" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased">
                <Header data={globalData} />
                <main className="min-h-screen pt-20">{children}</main>
                <Footer data={globalData} />
            </body>
        </html>
    )
}
