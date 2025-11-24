'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { getPlaceholderImage } from '@/lib/utils'

/**
 * 關於創作者 – Kent 梁家誠
 */
export default function AboutPage() {
    const heroImg = getPlaceholderImage(1200, 800, 'Kent')
    return (
        <section className="min-h-screen py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
            {/* 頭圖 */}
            <AnimatedSection variant="fadeInDown">
                <img src={heroImg} alt="Kent 梁家誠" className="w-full rounded-lg mb-12" />
            </AnimatedSection>

            {/* 文字介紹 */}
            <AnimatedSection delay={0.1} variant="fadeInUp">
                <h1 className="text-4xl font-bold mb-6">Kent 梁家誠</h1>
                <p className="text-lg text-gray-700 mb-4">
                    1993 出生於台灣新北，現為數位工作者。近年創作聚焦於科技物件與人類活動交互關係，
                    本次個展意在模糊工具與物件的界線，借由技術之眼使「工具的操作」成為可被凝視的存在，
                    並將其作為創作方法，實驗人與物之間互為介面的可能關係。
                </p>
            </AnimatedSection>

            {/* 展覽經歷 */}
            <AnimatedSection delay={0.2} variant="fadeInUp">
                <h2 className="text-2xl font-semibold mb-4">展覽經歷</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>2022 「沒有部分的部分」, 板橋435藝術特區, 新北, 台灣</li>
                    <li>2023 「隱密聯繫」, 新北市藝文中心, 新北, 台灣</li>
                </ul>
            </AnimatedSection>

            {/* 其他連結 */}
            <AnimatedSection delay={0.3} variant="fadeInUp">
                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded hover:opacity-80 transition-opacity">
                        News
                    </a>
                    <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded hover:opacity-80 transition-opacity">
                        CV
                    </a>
                    <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded hover:opacity-80 transition-opacity">
                        Art Works
                    </a>
                    <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded hover:opacity-80 transition-opacity">
                        Exhibition
                    </a>
                    <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded hover:opacity-80 transition-opacity">
                        Contact
                    </a>
                </div>
            </AnimatedSection>
        </section>
    )
}
