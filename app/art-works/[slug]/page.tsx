'use client'

import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { artWorksData } from '@/lib/data'

interface Props {
    params: {
        slug: string
    }
}

export default function ArtWorkDetailPage({ params }: Props) {
    const work = artWorksData.find((w) => w.slug === params.slug)

    if (!work) {
        notFound()
    }

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
            <AnimatedSection>
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <div className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">
                        {work.category}
                    </div>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-8">
                        {work.title}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {work.description}
                    </p>
                </div>
            </AnimatedSection>

            <div className="space-y-20">
                {work.images.map((img, index) => (
                    <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                        <div className="relative w-full">
                            <ZoomableImage
                                src={img}
                                alt={`${work.title} view ${index + 1}`}
                                className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-lg"
                            />
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection delay={0.5}>
                <div className="mt-32 pt-12 border-t border-gray-200 text-center">
                    <h3 className="text-lg font-bold mb-4">Project Details</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
                        This project explores the relationship between digital interfaces and physical spaces.
                        Through the use of generative algorithms and projection mapping,
                        it creates an immersive environment that responds to the viewer's presence.
                    </p>
                </div>
            </AnimatedSection>
        </div>
    )
}
