import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    title: 'Manolo Beviá | 產品設計師 將想法轉化為體驗',
    description: '我協助團隊將模糊的想法轉化為專注、可用的介面。工作範圍涵蓋醫療保健、物聯網、SaaS 等各個領域。',
    keywords: ['產品設計', 'UX/UI 設計', 'Web 開發', '作品集'],
    authors: [{ name: 'Manolo Beviá' }],
    openGraph: {
        title: 'Manolo Beviá | 產品設計師',
        description: '我協助團隊將模糊的想法轉化為專注、可用的介面。',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-TW" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased">
                <Header />
                <main className="min-h-screen pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
