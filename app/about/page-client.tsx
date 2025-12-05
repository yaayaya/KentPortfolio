'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import AnimatedSection from '@/components/AnimatedSection'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function AboutPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const { about } = data || {}
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'
    const content = about?.[currentTheme] || {}

    const globalData = data?.global || props.data?.global
    const aboutLabelItem = globalData?.navigation?.find((item: any) => item.href === '/about')
    const aboutLabel = (resolvedTheme === 'dark' ? aboutLabelItem?.labelDark : aboutLabelItem?.labelLight) || 'About'

    return (
        <div className="pt-24 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
            <AnimatedSection>
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter mb-20">
                    {aboutLabel}
                </h1>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* Left Column: Image & Contact */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <AnimatedSection>
                        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 dark:bg-white/10 mb-8">
                            {content.heroImage && (
                                <img
                                    src={content.heroImage}
                                    alt={content.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            )}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
                            <a
                                href={`mailto:${content.email}`}
                                className="block text-2xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors break-all"
                            >
                                {content.email}
                            </a>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Right Column: Info */}
                <div className="lg:col-span-7 space-y-20">

                    {/* Intro */}
                    <AnimatedSection delay={0.1}>
                        <div>
                            <h2 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                                {content.name}
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-medium">
                                {content.title}
                            </p>
                            <div className="space-y-2 text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 prose prose-lg dark:prose-invert">
                                {content.intro && <TinaMarkdown content={content.intro} />}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Exhibitions */}
                    <AnimatedSection delay={0.3}>
                        <div className="border-t border-black dark:border-white/20 pt-12">
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">
                                {content.exhibitionsTitle || 'Exhibitions'}
                            </h2>
                            <ul className="space-y-6">
                                {content.exhibitions && content.exhibitions.map((ex: any, i: number) => (
                                    <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                                        <span className="text-sm text-gray-500 dark:text-gray-400 w-16">{ex.year}</span>
                                        <span className="text-lg font-medium transition-colors">
                                            {ex.title}
                                        </span>
                                        <span className="text-gray-400 dark:text-gray-500 text-sm">{ex.location}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Philosophy / Statement */}
                    <AnimatedSection delay={0.4}>
                        <div className="border-t border-black dark:border-white/20 pt-12">
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">
                                Artist Statement
                            </h2>
                            <div className="prose prose-lg text-gray-600 dark:text-gray-300 dark:prose-invert">
                                {content.artistStatement && <TinaMarkdown content={content.artistStatement} />}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    )
}
