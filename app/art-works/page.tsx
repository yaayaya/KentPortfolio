'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { artWorksData } from '@/lib/data'

export default function ArtWorksPage() {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen">
            <AnimatedSection>
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter mb-20">
                    Art Works
                </h1>
            </AnimatedSection>

            {/* Grid Layout - Adjusted for Senior Designer Look (Smaller images, more whitespace) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {artWorksData.map((work, index) => (
                    <AnimatedSection key={work.slug} delay={index * 0.1}>
                        <div className="group block cursor-pointer">
                            {/* Image Container - Aspect Ratio 4:5 for portrait elegance */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-8">
                                <ZoomableImage
                                    src={work.coverImage}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-baseline border-t border-gray-200 pt-4">
                                    <h2 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                                        <Link href={`/art-works/${work.slug}`}>
                                            {work.title}
                                        </Link>
                                    </h2>
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">
                                        2023
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">
                                    {work.category}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    )
}
