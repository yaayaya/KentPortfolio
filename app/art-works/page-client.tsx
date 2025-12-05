'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ArtWorksPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

    const worksList = data?.art_worksConnection?.edges
        ? data.art_worksConnection.edges
            .map((edge: any) => {
                const node = edge.node
                const itemContent = node[currentTheme] || {}
                return {
                    ...node,
                    ...itemContent,
                }
            })
            .filter((item: any) => item.visible !== false && item.title)
            .sort((a: any, b: any) => {
                const yearA = parseInt(a.year || '0')
                const yearB = parseInt(b.year || '0')
                return sortOrder === 'newest' ? yearB - yearA : yearA - yearB
            })
        : []

    const globalData = data?.global || props.data?.global
    const worksLabelItem = globalData?.navigation?.find((item: any) => item.href === '/art-works')
    const worksLabel = (resolvedTheme === 'dark' ? worksLabelItem?.labelDark : worksLabelItem?.labelLight) || 'Art Works'

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tight leading-none">
                            {worksLabel}
                        </h1>

                        <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest">
                            <span className="text-gray-500 dark:text-gray-400">Sort by Year:</span>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setSortOrder('newest')}
                                    className={`transition-colors ${sortOrder === 'newest' ? 'text-black dark:text-white underline decoration-2 underline-offset-4' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
                                >
                                    Newest
                                </button>
                                <button
                                    onClick={() => setSortOrder('oldest')}
                                    className={`transition-colors ${sortOrder === 'oldest' ? 'text-black dark:text-white underline decoration-2 underline-offset-4' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
                                >
                                    Oldest
                                </button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {worksList.map((work: any, index: number) => (
                        <AnimatedSection key={work.id} delay={index * 0.1}>
                            <div className="space-y-6">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/5] group">
                                    {work.coverImage && (
                                        <img
                                            src={work.coverImage}
                                            alt={work.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Link
                                        href={`/art-works/${work._sys.filename}`}
                                        className="group block"
                                    >
                                        <div className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                                            <span>{work.category}</span>
                                            <span>{work.year}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold leading-tight group-hover:text-primary-600 transition-colors mb-2">
                                            {work.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                            {work.description}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    )
}
