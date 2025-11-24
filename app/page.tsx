'use client'

import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import Link from 'next/link'

// 展覽作品資料
const exhibitions = [
    {
        title: '隱密聯繫',
        subtitle: '2023 | 新北市藝文中心',
        image: '/content/images/S__25813009_0_0.jpg',
        slug: 'hidden-connection',
    },
    {
        title: '沒有部分的部分',
        subtitle: '2022 | 板橋435藝術特區',
        image: '/content/images/S__25813010_0_0.jpg',
        slug: 'parts-without-parts',
    },
    {
        title: 'Residual Warmth',
        subtitle: '裝置藝術 | 互動創作',
        image: '/content/images/Residual Warmth - Rainbow_0.jpg',
        slug: 'residual-warmth',
    },
]

export default function HomePage() {
    return (
        <>
            {/* Hero 區塊 */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2072&auto=format&fit=crop"
                        alt="藝術創作背景"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="max-w-[1400px] w-full relative z-10">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-8">
                            藝術
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1} variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-16">
                            創作者
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-gray-600">
                            探索科技與藝術的交互關係
                        </h2>
                    </AnimatedSection>
                </div>
            </section>

            {/* 展覽作品區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl lg:text-5xl font-medium mb-16">作品</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
                        {exhibitions.map((exhibition, index) => (
                            <ProjectCard key={exhibition.slug} {...exhibition} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 介紹區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection>
                        <p className="text-xl lg:text-2xl text-gray-600 mb-12">
                            關於創作
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.4] max-w-4xl">
                            我是{' '}
                            <Link href="/about" className="underline hover:opacity-70 transition-opacity">
                                Kent 梁家誠
                            </Link>
                            ，一位藝術創作者。近年創作聚焦於科技物件與人類活動的交互關係，嘗試模糊工具與物件的界線。
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                        <p className="text-xl lg:text-2xl text-gray-600 mt-12">
                            借由技術之眼，實驗人與物之間互為介面的可能。
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
