'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function HomePageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const { home, newsConnection } = data || {}
    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'
    const content = home?.[currentTheme] || {}

    const latestNews = newsConnection?.edges
        ? newsConnection.edges
            .map((edge: any) => {
                const node = edge.node
                const itemContent = node[currentTheme] || {}
                return {
                    ...node,
                    ...itemContent,
                }
            })
            .slice(0, 4)
        : []

    const globalData = data?.global || props.data?.global
    const newsLabelItem = globalData?.navigation?.find((item: any) => item.href === '/news')
    const newsLabel = (resolvedTheme === 'dark' ? newsLabelItem?.labelDark : newsLabelItem?.labelLight) || 'News'

    return (
        <div>
            {/* Hero 區塊 */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 pt-18">
                    {content.heroBackground && (
                        <img
                            key={content.heroBackground}
                            src={content.heroBackground}
                            alt="Hero Background"
                            className="w-full h-full object-cover opacity-20 blur-sm scale-105 transition-opacity duration-500"
                        />
                    )}
                    <div className="absolute inset-0 bg-white/60 dark:bg-black/30 transition-colors duration-500"></div>
                </div>

                <div className="max-w-[1400px] w-full relative z-10">
                    <AnimatedSection key={`t1-${currentTheme}`} variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-8">
                            {content.heroTitle1}
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection key={`t2-${currentTheme}`} delay={0.1} variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-16">
                            {content.heroTitle2}
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection key={`sub-${currentTheme}`} delay={0.2} variant="fadeInUp">
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-gray-600 dark:text-gray-400">
                            {content.heroSubtitle}
                        </h2>
                    </AnimatedSection>
                </div>
            </section>

            {/* News Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50 dark:bg-zinc-900">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold uppercase tracking-tight">{newsLabel}</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <Link href="/news" className="text-sm font-medium uppercase tracking-widest hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-black dark:border-white pb-1">
                                View All {newsLabel}
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 gap-20">
                        {latestNews.map((item: any, index: number) => (
                            <AnimatedSection key={item.id} delay={index * 0.1}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    {/* Image Side */}
                                    <div className="lg:col-span-7 relative overflow-hidden rounded-lg aspect-[16/9] group">
                                        {item.coverImage && (
                                            <img
                                                src={item.coverImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        )}
                                    </div>

                                    {/* Text Side */}
                                    <div className="lg:col-span-5">
                                        <Link
                                            href={`/news/${item._sys.filename}`}
                                            className="group block space-y-6"
                                        >
                                            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                                <span>{item.date}</span>
                                                <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                                                <span>Exhibition</span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-400 line-clamp-3">
                                                {item.description}
                                            </p>
                                            <div
                                                className="inline-flex items-center text-sm font-medium uppercase tracking-widest mt-4 group-hover:opacity-70 transition-opacity"
                                            >
                                                Read More
                                                <span className="ml-2">→</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* 介紹區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection key={`intro1-${currentTheme}`}>
                        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12">
                            {content.introText1}
                        </p>
                    </AnimatedSection>
                    <AnimatedSection key={`intro2-${currentTheme}`} delay={0.2}>
                        <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.4] max-w-4xl prose prose-lg prose-a:underline prose-a:text-black dark:prose-a:text-white hover:prose-a:opacity-70 dark:text-gray-200">
                            {content.introText2 && <TinaMarkdown content={content.introText2} />}
                        </div>
                    </AnimatedSection>
                    <AnimatedSection key={`intro3-${currentTheme}`} delay={0.4}>
                        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mt-12">
                            {content.introText3}
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
