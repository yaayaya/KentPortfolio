'use client'

import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'

/**
 * 關於創作者 – Kent 梁家誠
 */
export default function AboutPage() {
    return (
        <section className="min-h-screen py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
            {/* 主要圖片 */}
            <AnimatedSection variant="fadeInDown">
                <div className="relative w-full aspect-[16/10] mb-16 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                        src="/content/images/exhibition-card.jpg"
                        alt="Kent 梁家誠個展"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </AnimatedSection>

            {/* 創作者介紹 */}
            <AnimatedSection delay={0.1} variant="fadeInUp">
                <div className="mb-16">
                    <h1 className="text-5xl lg:text-6xl font-medium mb-12 tracking-tight">Kent</h1>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-6">
                            梁家誠，1993 出生於台灣新北，現為藝術創作者。
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            近年創作聚焦於科技物件與人類活動交互關係，本次個展意在模糊工具與物件的界線，
                            借由技術之眼使工具的操作成為可被凝視的存在，並將其作為創作方法，
                            實驗人與物之間互為介面的可能關係。
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 展覽經歷 */}
            <AnimatedSection delay={0.2} variant="fadeInUp">
                <div className="mb-16">
                    <h2 className="text-3xl font-medium mb-8 tracking-tight">展覽經歷</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-gray-900 pl-6 py-2">
                            <p className="text-lg font-medium mb-1">2023</p>
                            <p className="text-gray-700">隱密聯繫</p>
                            <p className="text-gray-500 text-sm">新北市藝文中心，新北，台灣</p>
                        </div>
                        <div className="border-l-4 border-gray-900 pl-6 py-2">
                            <p className="text-lg font-medium mb-1">2022</p>
                            <p className="text-gray-700">沒有部分的部分</p>
                            <p className="text-gray-500 text-sm">板橋435藝術特區，新北，台灣</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 作品圖片畫廊 */}
            <AnimatedSection delay={0.3} variant="fadeInUp">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813009_0_0.jpg"
                            alt="作品 1"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813010_0_0.jpg"
                            alt="作品 2"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813011_0_0.jpg"
                            alt="作品 3"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813014_0_0.jpg"
                            alt="作品 4"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813015_0_0.jpg"
                            alt="作品 5"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/content/images/S__25813016_0_0.jpg"
                            alt="作品 6"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 快速連結 */}
            <AnimatedSection delay={0.4} variant="fadeInUp">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <a
                        href="#news"
                        className="group relative px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                        <span className="text-lg font-medium">News</span>
                    </a>
                    <a
                        href="#cv"
                        className="group relative px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                        <span className="text-lg font-medium">CV</span>
                    </a>
                    <a
                        href="#artworks"
                        className="group relative px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                        <span className="text-lg font-medium">Art Works</span>
                    </a>
                    <a
                        href="#exhibition"
                        className="group relative px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                        <span className="text-lg font-medium">Exhibition</span>
                    </a>
                    <a
                        href="#contact"
                        className="group relative px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                        <span className="text-lg font-medium">Contact</span>
                    </a>
                </div>
            </AnimatedSection>
        </section>
    )
}
