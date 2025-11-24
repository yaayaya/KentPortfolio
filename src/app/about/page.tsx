"use client";

import { motion } from "framer-motion";
import { fadeInUp, smoothTransition } from "@/lib/animations";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-section">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-content mx-auto">
                    {/* 頁面標題 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        className="text-h1 font-semibold tracking-tight mb-element"
                    >
                        About
                    </motion.h1>

                    {/* 內容區域 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                        className="space-y-8 text-body-lg leading-relaxed"
                    >
                        <p>
                            我是一位專注於數位產品設計的設計師，致力於創造兼具美感與實用性的使用者體驗。
                            透過深入的使用者研究與細緻的視覺設計，我相信好的設計能夠解決問題，同時帶來愉悅的體驗。
                        </p>

                        <p className="text-muted-foreground">
                            我的設計方法論建立在對細節的執著與對使用者需求的深刻理解之上。
                            每個專案都是一次探索的旅程，從概念發想到最終實現，我享受這個過程中的每一個挑戰。
                        </p>

                        <p className="text-muted-foreground">
                            在過去的專案中，我有幸與許多優秀的團隊合作，涵蓋品牌設計、產品設計、網頁設計等多個領域。
                            這些經驗讓我學會如何在不同的限制與需求中找到最佳的設計解決方案。
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
