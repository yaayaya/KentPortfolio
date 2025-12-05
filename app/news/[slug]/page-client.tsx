'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function NewsDetailPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const item = data?.news
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'
    const content = item?.[currentTheme] || {}

    const globalData = data?.global || props.data?.global
    const newsLabelItem = globalData?.navigation?.find((item: any) => item.href === '/news')
    const newsLabel = (resolvedTheme === 'dark' ? newsLabelItem?.labelDark : newsLabelItem?.labelLight) || 'News'

    return (
        <article className="pt-28 pb-20 px-6 lg:px-12 max-w-[1000px] mx-auto min-h-screen">
            {/* Header */}
            <AnimatedSection>
                <div className="mb-8">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        <span>←</span> Back
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-black dark:border-white/20 pb-8">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        {content.title}
                    </h1>
                    <div className="text-right shrink-0">
                        <div className="text-base font-medium text-gray-800 dark:text-gray-200">{content.date}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mt-1">{content.description}</div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Content Body */}
            <AnimatedSection delay={0.1}>
                <div className="prose prose-lg max-w-none mb-16 dark:prose-invert">
                    {content.body && <TinaMarkdown content={content.body} />}
                </div>
            </AnimatedSection>

            {/* Image Gallery */}
            <div className="space-y-12">
                {content.gallery && content.gallery.map((item: any, index: number) => {
                    const imgSrc = typeof item === 'string' ? item : item.src
                    const imgCaption = (typeof item === 'object' && item.caption) ? item.caption : (content.galleryFigureText || 'Exhibition View')

                    return (
                        <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                            <div className="w-full">
                                <ZoomableImage
                                    src={imgSrc}
                                    alt={`${content.title} - Image ${index + 1}`}
                                    className="w-full h-auto rounded-sm shadow-sm"
                                />
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center uppercase tracking-widest">
                                    Figure {index + 1}: {imgCaption}
                                </p>
                            </div>
                        </AnimatedSection>
                    )
                })}
            </div>
        </article>
    )
}
