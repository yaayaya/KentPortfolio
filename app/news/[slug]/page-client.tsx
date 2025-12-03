'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'

export default function NewsDetailPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const item = data.news

    return (
        <article className="pt-32 pb-20 px-6 lg:px-12 max-w-[1000px] mx-auto min-h-screen">
            {/* Header */}
            <AnimatedSection>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-black pb-8">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        {item.title}
                    </h1>
                    <div className="text-right shrink-0">
                        <div className="text-xl font-medium">{item.date}</div>
                        <div className="text-gray-500 text-sm uppercase tracking-widest mt-1">{item.description}</div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Content Body */}
            <AnimatedSection delay={0.1}>
                <div className="prose prose-lg max-w-none mb-16">
                    <TinaMarkdown content={item.body} />
                </div>
            </AnimatedSection>

            {/* Image Gallery */}
            <div className="space-y-12">
                {item.gallery && item.gallery.map((img: string, index: number) => (
                    <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                        <div className="w-full">
                            <ZoomableImage
                                src={img}
                                alt={`${item.title} - Image ${index + 1}`}
                                className="w-full h-auto rounded-sm shadow-sm"
                            />
                            <p className="mt-4 text-sm text-gray-500 text-center uppercase tracking-widest">
                                Figure {index + 1}: Exhibition View
                            </p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </article>
    )
}
