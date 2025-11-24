"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, smoothTransition } from "@/lib/animations";

// 部落格文章資料
const posts = [
    {
        title: "Jitter",
        date: "2024-03-15",
        slug: "jitter",
    },
    {
        title: "Design for Everyone",
        date: "2024-02-20",
        slug: "design-for-everyone",
    },
    {
        title: "Framer",
        date: "2024-01-10",
        slug: "framer",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-section">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-content mx-auto">
                    {/* 頁面標題 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        className="mb-element"
                    >
                        <h1 className="text-h1 font-semibold tracking-tight mb-4">
                            Blog
                        </h1>
                        <p className="text-body-lg text-muted-foreground">
                            Beyond the canvas
                        </p>
                    </motion.div>

                    {/* 文章列表 */}
                    <div className="space-y-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block"
                                >
                                    <h2 className="text-h3 font-semibold tracking-tight mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <time className="text-sm text-muted-foreground">
                                        {new Date(post.date).toLocaleDateString('zh-TW', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
