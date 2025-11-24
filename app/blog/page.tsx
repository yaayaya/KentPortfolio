import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import BlogCard from '@/components/BlogCard'
import { getPlaceholderImage } from '@/lib/utils'

export const metadata: Metadata = {
    title: '部落格 | Manolo Beviá',
    description: '閱讀關於設計、開發和產品思考的文章。',
}

const blogPosts = [
    {
        title: '從 Flash 到 Jitter',
        excerpt: '探索動畫設計工具的演變，從 Flash 時代到現代的 Jitter 和其他創新工具。',
        image: getPlaceholderImage(1200, 630, 'Flash to Jitter'),
        slug: 'flash-to-jitter',
        date: '2024-07-01',
    },
    {
        title: '為所有人設計',
        excerpt: '無障礙設計不僅是法律要求，更是道德責任。了解如何創建包容性的使用者體驗。',
        image: getPlaceholderImage(1200, 630, 'Design for Everyone'),
        slug: 'design-for-everyone',
        date: '2024-06-15',
    },
    {
        title: 'Framer 來救援！',
        excerpt: '探索 Framer 如何改變設計師的工作流程，從原型到生產的無縫過渡。',
        image: getPlaceholderImage(1200, 630, 'Framer to the Rescue'),
        slug: 'framer-to-the-rescue',
        date: '2024-05-20',
    },
]

export default function BlogPage() {
    return (
        <>
            {/* 標題區塊 */}
            <section className="section-spacing">
                <div className="container-custom">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-5xl md:text-display-lg lg:text-display-xl heading-display mb-6">
                            部落格
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <p className="text-xl md:text-2xl text-primary-600 max-w-3xl">
                            關於設計、開發和產品思考的文章
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 文章列表 */}
            <section className="section-spacing bg-primary-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {blogPosts.map((post, index) => (
                            <BlogCard
                                key={post.slug}
                                {...post}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
