'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ArtWorkDetailPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const work = data?.art_works
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'
    const content = work?.[currentTheme] || {}

    return (
        <div className="pt-28 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
            <AnimatedSection>
                <div className="mb-8">
                    <Link
                        href="/art-works"
                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        <span>←</span> Back to Art Works
                    </Link>
                </div>
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <div className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                        {content.category}
                    </div>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-8">
                        {content.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {content.description}
                    </p>
                </div>
            </AnimatedSection>

            <div className="space-y-20">
                {content.gallery && content.gallery.map((img: string, index: number) => (
                    <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                        <div className="relative w-full">
                            <ZoomableImage
                                src={img}
                                alt={`${content.title} view ${index + 1}`}
                                className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-lg"
                            />
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection delay={0.5}>
                <div className="mt-32 pt-12 border-t border-gray-200 dark:border-white/20 text-center">
                    <h3 className="text-lg font-bold mb-4">Project Details</h3>
                    <div className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed prose prose-lg dark:prose-invert">
                        {content.body && <TinaMarkdown content={content.body} />}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
