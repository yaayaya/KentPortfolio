'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function NewsPageClient(props: any) {
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

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

    const newsList = data?.newsConnection?.edges
        ? data.newsConnection.edges.map((edge: any) => {
            const node = edge.node
            const itemContent = node[currentTheme] || {}
            return {
                ...node,
                ...itemContent,
            }
        })
        : []

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                <AnimatedSection>
                    <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tight mb-20">
                        News
                    </h1>
                </AnimatedSection>

                <div className="grid grid-cols-1 gap-20">
                    {newsList.map((item: any, index: number) => (
                        <AnimatedSection key={item.id} delay={index * 0.1}>
                            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-20 last:border-0">
                                <div className="lg:col-span-7 relative overflow-hidden rounded-lg aspect-[16/9]">
                                    {item.coverImage && (
                                        <ZoomableImage
                                            src={item.coverImage}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                        <span>{item.date}</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
                                        <Link href={`/news/${item._sys.filename}`}>
                                            {item.title}
                                        </Link>
                                    </h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={`/news/${item._sys.filename}`}
                                        className="inline-flex items-center text-sm font-medium uppercase tracking-widest mt-4 hover:opacity-70 transition-opacity"
                                    >
                                        Read More
                                        <span className="ml-2">→</span>
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
