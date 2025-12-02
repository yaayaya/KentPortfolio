'use client'

import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { newsData } from '@/lib/data'

interface Props {
    params: {
        slug: string
    }
}

export default function NewsDetailPage({ params }: Props) {
    const item = newsData.find((n) => n.slug === params.slug)

    if (!item) {
        notFound()
    }

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
                    <p className="text-xl leading-relaxed text-gray-800">
                        {item.content}
                    </p>
                    {/* Placeholder for more content if needed */}
                    <p className="text-gray-600">
                        (More detailed content about the exhibition or news item would go here. This is a placeholder text generated to simulate a full article structure.)
                    </p>
                </div>
            </AnimatedSection>

            {/* Image Gallery */}
            <div className="space-y-12">
                {item.images.map((img, index) => (
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
