'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'

export default function NewsPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const newsList = data.newsConnection.edges.map((edge: any) => edge.node)

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
            <AnimatedSection>
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter mb-20">
                    News
                </h1>
            </AnimatedSection>

            <div className="space-y-32">
                {newsList.map((item: any, index: number) => (
                    <AnimatedSection key={item.id} delay={index * 0.1}>
                        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start group">
                            {/* Date & Meta */}
                            <div className="lg:col-span-3 pt-2 border-t border-black">
                                <div className="text-lg font-medium mb-2">{item.date}</div>
                                <div className="text-gray-500 text-sm uppercase tracking-widest">{item.description}</div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-9 border-t border-black pt-2">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
                                            <Link href={`/news/${item._sys.filename}`}>
                                                {item.title}
                                            </Link>
                                        </h2>
                                        {/* Note: Body is rich text, for list view we might want a simple excerpt or just skip body */}
                                        <Link
                                            href={`/news/${item._sys.filename}`}
                                            className="inline-block text-sm font-medium uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity"
                                        >
                                            Read Full Story
                                        </Link>
                                    </div>

                                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                                        {item.coverImage && (
                                            <ZoomableImage
                                                src={item.coverImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    )
}
