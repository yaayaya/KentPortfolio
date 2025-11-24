import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { getPlaceholderImage } from '@/lib/utils'

// 模擬專案資料
const projects: Record<string, any> = {
    'cornell-university': {
        title: 'Cornell University',
        subtitle: '為清晰度和規模重新設計 Cornell 圖書館',
        description: '重新設計 Cornell University 圖書館系統，提升使用者體驗和可擴展性。專注於資訊架構和介面設計，使學生和研究人員能夠更有效地找到所需資源。',
        image: getPlaceholderImage(1200, 800, 'Cornell University'),
        category: 'UX/UI Design',
        date: '2024-01-15',
        challenge: '原有的圖書館系統複雜且難以導航，使用者經常迷失在大量的資源中。',
        solution: '通過深入的使用者研究和資訊架構重組，我們創建了一個直觀的介面，讓使用者能夠快速找到所需資源。',
        results: [
            '使用者滿意度提升 45%',
            '搜尋成功率提高 60%',
            '平均任務完成時間減少 35%',
        ],
    },
    'daikin': {
        title: 'Daikin Hero Cloud',
        subtitle: '在 Daikin HERO Cloud 擴展 UX',
        description: '為 Daikin 的 HERO Cloud 平台設計可擴展的使用者體驗。整合物聯網設備管理、數據視覺化和遠程控制功能。',
        image: getPlaceholderImage(1200, 800, 'Daikin Hero Cloud'),
        category: 'UX/UI Design',
        date: '2024-02-20',
        challenge: '需要為 HVAC 專業人員創建一個強大但易用的物聯網平台。',
        solution: '設計了一個模組化的介面系統，讓專業人員能夠輕鬆管理多個設備和位置。',
        results: [
            '支援 10,000+ 設備同時管理',
            '操作效率提升 50%',
            '客戶滿意度達 4.8/5',
        ],
    },
    'plownow': {
        title: 'PlowNow',
        subtitle: '為按需除雪設計大膽的 MVP',
        description: '設計 PlowNow 的最小可行產品，一個按需除雪服務平台。專注於簡化預訂流程。',
        image: getPlaceholderImage(1200, 800, 'PlowNow'),
        category: 'Mobile App',
        date: '2024-03-10',
        challenge: '在競爭激烈的市場中快速推出 MVP，驗證商業模式。',
        solution: '專注於核心功能：快速預訂、即時追蹤和簡單支付，打造極簡但有效的體驗。',
        results: [
            '3 個月內獲得 5,000+ 用戶',
            '平均預訂時間 < 2 分鐘',
            '獲得種子輪融資',
        ],
    },
    'atany': {
        title: 'ATANY',
        subtitle: '打造完美的 T 恤，為您量身定制',
        description: '為 ATANY 設計客製化 T 恤平台。開發直觀的設計工具。',
        image: getPlaceholderImage(1200, 800, 'ATANY'),
        category: 'Web Development',
        date: '2024-04-05',
        challenge: '讓非設計師也能輕鬆創建專業的客製化 T 恤。',
        solution: '創建了一個拖放式設計工具，配合智能建議系統。',
        results: [
            '設計完成率 85%',
            '平均設計時間 8 分鐘',
            '轉換率提升 40%',
        ],
    },
    'modifai-health': {
        title: 'ModifAIHealth',
        subtitle: '用 AI 轉變患者溝通',
        description: '開發 ModifAIHealth 的 AI 驅動患者溝通平台。',
        image: getPlaceholderImage(1200, 800, 'ModifAIHealth'),
        category: 'UX/UI Design',
        date: '2024-05-12',
        challenge: '在保持人性化的同時，利用 AI 提升醫療溝通效率。',
        solution: '設計了一個智能對話介面，結合 AI 建議和人工審核。',
        results: [
            '醫生回覆時間減少 60%',
            '患者滿意度提升 55%',
            '獲得醫療創新獎',
        ],
    },
    'wellnstrong': {
        title: 'WellnStrong',
        subtitle: '為成長中的社群建立凝聚力的健康平台',
        description: '為 WellnStrong 設計全面的健康平台。',
        image: getPlaceholderImage(1200, 800, 'WellnStrong'),
        category: 'Web Development',
        date: '2024-06-18',
        challenge: '整合健身、營養和社群功能於一個平台。',
        solution: '創建了一個模組化的平台架構，讓用戶可以自訂體驗。',
        results: [
            '月活躍用戶 50,000+',
            '平均使用時長 25 分鐘/天',
            '社群互動率 70%',
        ],
    },
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const project = projects[params.slug]

    if (!project) {
        return {
            title: '專案未找到',
        }
    }

    return {
        title: `${project.title} | Manolo Beviá`,
        description: project.description,
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects[params.slug]

    if (!project) {
        notFound()
    }

    return (
        <>
            {/* 專案標題區塊 */}
            <section className="section-spacing">
                <div className="container-custom max-w-5xl">
                    <AnimatedSection variant="fadeInDown">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-display-md heading-display mb-6">
                            {project.title}
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <p className="text-xl md:text-2xl text-primary-600 leading-relaxed">
                            {project.subtitle}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 專案圖片 */}
            <section className="mb-16">
                <div className="container-custom max-w-6xl">
                    <AnimatedSection delay={0.3}>
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-primary-100">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 專案詳情 */}
            <section className="section-spacing bg-primary-50">
                <div className="container-custom max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <AnimatedSection delay={0.1}>
                            <h2 className="text-2xl font-display font-bold mb-4">挑戰</h2>
                            <p className="text-lg text-primary-600 leading-relaxed">
                                {project.challenge}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h2 className="text-2xl font-display font-bold mb-4">解決方案</h2>
                            <p className="text-lg text-primary-600 leading-relaxed">
                                {project.solution}
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.3}>
                        <div className="mt-12">
                            <h2 className="text-2xl font-display font-bold mb-6">成果</h2>
                            <ul className="space-y-4">
                                {project.results.map((result: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-lg text-primary-600"
                                    >
                                        <span className="text-accent mt-1">✓</span>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
