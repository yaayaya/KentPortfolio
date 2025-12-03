import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
    title: '作品 | Kent 梁家誠',
    description: '探索數位創作與互動裝置藝術作品',
}

const projects = [
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
    {
        title: '數位互動裝置',
        subtitle: '科技物件與人類活動',
        image: '/content/images/S__25813011_0_0.jpg',
        slug: 'digital-interactive',
    },
    {
        title: '工具的操作',
        subtitle: '技術之眼的凝視',
        image: '/content/images/S__25813014_0_0.jpg',
        slug: 'tool-operation',
    },
    {
        title: '介面實驗',
        subtitle: '人與物的互為關係',
        image: '/content/images/S__25813015_0_0.jpg',
        slug: 'interface-experiment',
    },
]

export default function WorkPage() {
    return (
        <>
            {/* 標題區塊 */}
            <section className="section-spacing">
                <div className="container-custom">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-5xl md:text-display-lg lg:text-display-xl heading-display mb-6">
                            創作作品
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                            探索科技物件與人類活動的交互關係
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 專案網格 */}
            <section className="section-spacing bg-gray-50 dark:bg-zinc-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.slug}
                                {...project}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
