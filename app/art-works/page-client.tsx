'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
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

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-white dark:bg-black" />
    }

    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

    const worksList = data?.art_worksConnection?.edges
        ? data.art_worksConnection.edges.map((edge: any) => {
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
                        Art Works
                    </h1>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {worksList.map((work: any, index: number) => (
                        <AnimatedSection key={work.id} delay={index * 0.1}>
                            <div className="group space-y-6">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                                    {work.coverImage && (
                                        <ZoomableImage
                                            src={work.coverImage}
                                            alt={work.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                        <span>{work.category}</span>
                                        <span>{work.year}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
                                        <Link href={`/art-works/${work._sys.filename}`}>
                                            {work.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                        {work.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    )
}
