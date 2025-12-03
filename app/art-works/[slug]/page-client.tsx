'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'

export default function ArtWorkDetailPageClient(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const work = data.art_works

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
                {work.gallery && work.gallery.map((img: string, index: number) => (
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
                    <div className="max-w-2xl mx-auto text-gray-600 leading-relaxed prose prose-lg">
                        <TinaMarkdown content={work.body} />
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
