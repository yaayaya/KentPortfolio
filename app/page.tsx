'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { newsData } from '@/lib/data'

export default function HomePage() {
    // Take only the latest 2 news items for the home page
    const latestNews = newsData.slice(0, 2)

    return (
        <>
            {/* Hero 區塊 */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
                <div className="max-w-[1400px] w-full">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-8">
                            Introductions
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1} variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-16">
                            Can Wait.
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-gray-600">
                            Get to Know my Work
                        </h2>
                    </AnimatedSection>
                </div>
            </section>

            {/* News Section (Replacing old Projects Grid) */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold uppercase tracking-tight">Latest News</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <Link href="/news" className="text-sm font-medium uppercase tracking-widest hover:text-gray-600 transition-colors border-b border-black pb-1">
                                View All News
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 gap-20">
                        {latestNews.map((item, index) => (
                            <AnimatedSection key={item.slug} delay={index * 0.1}>
                                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    {/* Image Side */}
                                    <div className="lg:col-span-7 relative overflow-hidden rounded-lg aspect-[16/9]">
                                        <ZoomableImage
                                            src={item.coverImage}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Text Side */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
                                            <span>{item.date}</span>
                                            <span className="w-8 h-[1px] bg-gray-300"></span>
                                            <span>Exhibition</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
                                            <Link href={`/news/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <p className="text-lg text-gray-600 line-clamp-3">
                                            {item.content}
                                        </p>
                                        <Link
                                            href={`/news/${item.slug}`}
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
            </section>

            {/* 介紹區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection>
                        <p className="text-xl lg:text-2xl text-gray-600 mb-12">
                            Okay, Here's the introduction.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.4] max-w-4xl">
                            I'm{' '}
                            <a href="/about" className="underline hover:opacity-70 transition-opacity">
                                Kent 梁家誠
                            </a>
                            , a digital artist/designer exploring the boundaries between tools and objects. I turn technical operations into visual art.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                        <p className="text-xl lg:text-2xl text-gray-600 mt-12">
                            That's it. No long stories.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
