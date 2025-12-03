import type { Metadata } from 'next'
import { Suspense } from 'react'
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

import { ThemeProvider } from '@/components/ThemeProvider'

// ... imports

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    let globalData = {} as any
    try {
        const globalRes = await client.queries.global({ relativePath: 'global.json' })
        globalData = globalRes.data.global
    } catch (error) {
        console.warn('Failed to fetch global data, using defaults')
    }

    const sanitizedData = {
        site: {
            title: globalData.site?.title || 'Kent',
            description: globalData.site?.description || '',
            email: globalData.site?.email || '',
        },
        navigation: (globalData.navigation as any[])
            ?.filter((item: any) => item !== null)
            .map((item: any) => ({
                label: item.label || '',
                href: item.href || '',
            })) || [],
        social: (globalData.social as any[])
            ?.filter((item: any) => item !== null)
            .map((item: any) => ({
                platform: item.platform || '',
                url: item.url || '',
            })) || [],
        headerToggle: {
            leftText: globalData.headerToggle?.leftText || '梁家誠',
            rightText: globalData.headerToggle?.rightText || 'Kent Design',
            leftColor: globalData.headerToggle?.leftColor || '#1a1a1a',
            rightColor: globalData.headerToggle?.rightColor || '#ffffff',
            leftTextColor: globalData.headerToggle?.leftTextColor || '#ffffff',
            rightTextColor: globalData.headerToggle?.rightTextColor || '#000000',
        },
    }

    return (
        <html lang="zh-TW" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <Suspense fallback={<div className="h-24" />}>
                        <Header data={sanitizedData} />
                    </Suspense>
                    <main className="min-h-screen pt-20">{children}</main>
                    <Footer data={sanitizedData} />
                </ThemeProvider>
            </body>
        </html>
    )
}
