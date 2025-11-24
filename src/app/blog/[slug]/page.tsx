"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { fadeInUp, smoothTransition } from "@/lib/animations";

// 部落格文章型別定義
interface PostData {
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
}

// 假資料：部落格文章
const postsData: Record<string, PostData> = {
    jitter: {
        title: "Jitter",
        date: "2024-03-15",
        readTime: "5 min read",
        excerpt: "探索 Jitter 這個強大的動畫工具，以及它如何改變我們的設計工作流程。",
        content: `
## 什麼是 Jitter？

Jitter 是一個革命性的動畫設計工具，它讓設計師能夠輕鬆創造出專業級的動畫效果，而無需深入學習複雜的程式碼或動畫軟體。

### 為什麼選擇 Jitter？

在過去，創造高品質的動畫需要大量的時間與技術知識。Jitter 改變了這個現狀，它提供了：

- **直覺的介面**: 類似於 Figma 的操作體驗
- **強大的功能**: 支援複雜的動畫效果
- **即時預覽**: 所見即所得的設計體驗
- **輕鬆匯出**: 支援多種格式匯出

### 實際應用

我們在多個專案中使用 Jitter 來創造引人注目的動畫效果，從網站的微互動到產品展示的動畫，Jitter 都能勝任。

## 結論

Jitter 是現代設計師工具箱中不可或缺的一員。它降低了動畫設計的門檻，讓更多設計師能夠創造出令人驚艷的動畫作品。
        `,
    },
    "design-for-everyone": {
        title: "Design for Everyone",
        date: "2024-02-20",
        readTime: "8 min read",
        excerpt: "探討無障礙設計的重要性，以及如何創造對所有人友善的數位體驗。",
        content: `
## 無障礙設計的重要性

設計不應該只為特定族群服務，而應該讓每個人都能輕鬆使用。無障礙設計不僅是道德責任，更是商業智慧。

### 核心原則

1. **可感知性**: 資訊與介面元素必須能被所有使用者感知
2. **可操作性**: 介面元件與導航必須可操作
3. **可理解性**: 資訊與操作必須清晰易懂
4. **穩健性**: 內容必須能被各種輔助技術解讀

### 實踐方法

- 使用適當的色彩對比
- 提供替代文字
- 確保鍵盤可操作
- 使用語意化的 HTML

## 總結

無障礙設計讓我們的產品能夠服務更廣泛的使用者群，這不僅是正確的做法，也能帶來更好的商業成果。
        `,
    },
    framer: {
        title: "Framer",
        date: "2024-01-10",
        readTime: "6 min read",
        excerpt: "深入了解 Framer Motion，以及如何在 React 專案中實作流暢的動畫效果。",
        content: `
## Framer Motion 簡介

Framer Motion 是一個強大的 React 動畫庫，它讓我們能夠輕鬆地在 React 應用中加入流暢的動畫效果。

### 為什麼選擇 Framer Motion？

- **聲明式 API**: 簡潔易懂的語法
- **效能優異**: 使用 GPU 加速
- **功能豐富**: 支援各種動畫效果
- **TypeScript 支援**: 完整的型別定義

### 基本使用

\`\`\`tsx
import { motion } from "framer-motion"

function Component() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello World
    </motion.div>
  )
}
\`\`\`

### 進階技巧

Framer Motion 還支援許多進階功能，如手勢控制、拖曳、捲動觸發動畫等。

## 結語

Framer Motion 是 React 開發者創造優質使用者體驗的最佳選擇之一。
        `,
    },
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = postsData[slug];

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-section">
                <div className="container mx-auto px-6 md:px-12">
                    <p>文章未找到</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* 返回按鈕 */}
            <div className="fixed top-24 left-6 md:left-12 z-40">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Blog</span>
                </Link>
            </div>

            {/* 文章 Header */}
            <article className="pt-32 pb-section">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-content mx-auto">
                        {/* 標題 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={smoothTransition}
                        >
                            <h1 className="text-h1 font-semibold tracking-tight mb-6">
                                {post.title}
                            </h1>

                            {/* 文章資訊 */}
                            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <time>
                                        {new Date(post.date).toLocaleDateString('zh-TW', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 摘要 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...smoothTransition, delay: 0.2 }}
                            className="text-body-lg text-muted-foreground leading-relaxed mb-12 pb-12 border-b border-border"
                        >
                            {post.excerpt}
                        </motion.p>

                        {/* 文章內容 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...smoothTransition, delay: 0.3 }}
                            className="prose prose-lg max-w-none"
                            style={{
                                fontSize: 'var(--text-body-lg)',
                                lineHeight: '1.8',
                            }}
                        >
                            {/* 這裡應該使用 Markdown 渲染器，暫時使用 pre-wrap */}
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                {post.content}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </article>
        </div>
    );
}
