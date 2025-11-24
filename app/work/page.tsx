import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { getPlaceholderImage } from '@/lib/utils'

export const metadata: Metadata = {
    title: '作品 | Manolo Beviá',
    description: '查看我的設計作品集，包含 UX/UI 設計、Web 開發和產品設計專案。',
}

const projects = [
    {
        title: 'Cornell University',
        subtitle: '為清晰度和規模重新設計 Cornell 圖書館',
        image: getPlaceholderImage(800, 600, 'Cornell University'),
        slug: 'cornell-university',
    },
    {
        title: 'Daikin Hero Cloud',
        subtitle: '在 Daikin HERO Cloud 擴展 UX',
        image: getPlaceholderImage(800, 600, 'Daikin Hero Cloud'),
        slug: 'daikin',
    },
    {
        title: 'PlowNow',
        subtitle: '為按需除雪設計大膽的 MVP',
        image: getPlaceholderImage(800, 600, 'PlowNow'),
        slug: 'plownow',
    },
    {
        title: 'ATANY',
        subtitle: '打造完美的 T 恤，為您量身定制',
        image: getPlaceholderImage(800, 600, 'ATANY'),
        slug: 'atany',
    },
    {
        title: 'ModifAIHealth',
        subtitle: '用 AI 轉變患者溝通',
        image: getPlaceholderImage(800, 600, 'ModifAIHealth'),
        slug: 'modifai-health',
    },
    {
        title: 'WellnStrong',
        subtitle: '為成長中的社群建立凝聚力的健康平台',
        image: getPlaceholderImage(800, 600, 'WellnStrong'),
        slug: 'wellnstrong',
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
                            精選作品
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <p className="text-xl md:text-2xl text-primary-600 max-w-3xl">
                            探索我在醫療保健、物聯網、SaaS 等領域的設計專案
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 專案網格 */}
            <section className="section-spacing bg-primary-50">
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
