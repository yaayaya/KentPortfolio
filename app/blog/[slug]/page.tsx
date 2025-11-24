import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { formatDate, getPlaceholderImage } from '@/lib/utils'

// 模擬部落格資料
const blogPosts: Record<string, any> = {
    'flash-to-jitter': {
        title: '從 Flash 到 Jitter',
        excerpt: '探索動畫設計工具的演變，從 Flash 時代到現代的 Jitter 和其他創新工具。',
        image: getPlaceholderImage(1200, 630, 'Flash to Jitter'),
        date: '2024-07-01',
        author: 'Manolo Beviá',
        content: `
      <p>動畫設計工具經歷了巨大的變革。從 Adobe Flash 的黃金時代，到如今的 Jitter、Rive 和其他現代工具，設計師的工作流程發生了翻天覆地的變化。</p>
      
      <h2>Flash 的遺產</h2>
      <p>Flash 曾經是網頁動畫的王者，它讓設計師能夠創建豐富的互動體驗。儘管技術已經過時，但它建立的設計原則仍然影響著今天的工具。</p>
      
      <h2>現代工具的崛起</h2>
      <p>Jitter、Rive 和 Framer Motion 等工具為設計師提供了更強大、更靈活的動畫創作能力，同時保持了對現代網頁標準的支持。</p>
      
      <h2>未來展望</h2>
      <p>隨著 Web 技術的不斷進步，我們可以期待更多創新的動畫工具出現，讓設計師能夠創造更加豐富和流暢的使用者體驗。</p>
    `,
    },
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const post = blogPosts[params.slug]

    if (!post) {
        return {
            title: '文章未找到',
        }
    }

    return {
        title: `${post.title} | Manolo Beviá`,
        description: post.excerpt,
    }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug]

    if (!post) {
        notFound()
    }

    return (
        <>
            {/* 文章標題區塊 */}
            <section className="section-spacing">
                <div className="container-custom max-w-4xl">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-4xl md:text-display-md heading-display mb-6">
                            {post.title}
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <div className="flex items-center gap-4 text-primary-600 mb-8">
                            <time>{formatDate(post.date)}</time>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 特色圖片 */}
            <section className="mb-16">
                <div className="container-custom max-w-5xl">
                    <AnimatedSection delay={0.3}>
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-primary-100">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 文章內容 */}
            <section className="section-spacing">
                <div className="container-custom max-w-3xl">
                    <AnimatedSection delay={0.4}>
                        <div
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
