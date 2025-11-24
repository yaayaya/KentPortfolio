"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, smoothTransition } from "@/lib/animations";

// 專案資料型別定義
interface ProjectData {
    title: string;
    category: string;
    year: string;
    client: string;
    role: string;
    description: string;
    challenge: string;
    solution: string;
    images: string[];
    template: string;
}

// 假資料：專案詳細內容
const projectsData: Record<string, ProjectData> = {
    cornell: {
        title: "Cornell University",
        category: "Branding, Web Design",
        year: "2024",
        client: "Cornell University",
        role: "Lead Designer",
        description: "為康乃爾大學重新設計品牌識別系統與網站，提升數位體驗與品牌一致性。",
        challenge: "康乃爾大學需要一個現代化的品牌識別系統，能夠在保持學術傳統的同時，展現創新與前瞻性。",
        solution: "我們開發了一套靈活的設計系統，結合經典的學術元素與現代的視覺語言，創造出既專業又親和的品牌形象。",
        images: [
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=1000&fit=crop",
        ],
        template: "A"
    },
    daikin: {
        title: "Daikin",
        category: "Product Design",
        year: "2024",
        client: "Daikin Industries",
        role: "Product Designer",
        description: "為 Daikin 設計智慧空調控制系統的使用者介面，提升使用者體驗與產品價值。",
        challenge: "如何將複雜的空調控制功能轉化為直覺易用的介面，同時滿足不同使用者的需求。",
        solution: "透過深入的使用者研究，我們設計了一套簡潔的介面系統，將複雜功能分層呈現，讓使用者能夠輕鬆掌控。",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1000&fit=crop",
        ],
        template: "B"
    },
    plownow: {
        title: "PlowNow",
        category: "Product Design, Branding",
        year: "2023",
        client: "PlowNow Inc.",
        role: "Lead Designer",
        description: "為 PlowNow 打造完整的品牌識別與產品設計，從 Logo 到 App 介面的全方位設計。",
        challenge: "在競爭激烈的服務市場中，如何建立獨特的品牌形象並提供優質的使用者體驗。",
        solution: "我們創造了一個充滿活力的品牌形象，並設計了直覺的 App 介面，讓使用者能夠快速預約服務。",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=1000&fit=crop",
        ],
        template: "A"
    },
    atany: {
        title: "ATANY",
        category: "Product Design",
        year: "2023",
        client: "ATANY",
        role: "Product Designer",
        description: "為 ATANY 電商平台設計完整的購物體驗，從瀏覽到結帳的流暢旅程。",
        challenge: "如何在眾多電商平台中脫穎而出，提供獨特且令人愉悅的購物體驗。",
        solution: "我們專注於簡化購物流程，加入個性化推薦與視覺化的產品展示，提升轉換率。",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=1000&fit=crop",
        ],
        template: "B"
    },
};

const allProjects = ["cornell", "daikin", "plownow", "atany"];

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projectsData[slug];

    if (!project) {
        return (
            <div className="min-h-screen pt-32 pb-section">
                <div className="container mx-auto px-6 md:px-12">
                    <p>專案未找到</p>
                </div>
            </div>
        );
    }

    // 找到下一個專案
    const currentIndex = allProjects.indexOf(slug);
    const nextSlug = allProjects[(currentIndex + 1) % allProjects.length];
    const nextProject = projectsData[nextSlug];

    return (
        <div className="min-h-screen">
            {/* 返回按鈕 */}
            <div className="fixed top-24 left-6 md:left-12 z-40">
                <Link
                    href="/work"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Work</span>
                </Link>
            </div>

            {/* Hero 區塊 */}
            <section className="pt-32 pb-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-content mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={smoothTransition}
                        >
                            <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                            <h1 className="text-h1 font-semibold tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-body-lg text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* 專案資訊 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...smoothTransition, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border"
                        >
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Year</p>
                                <p className="font-medium">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Client</p>
                                <p className="font-medium">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Role</p>
                                <p className="font-medium">{project.role}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Category</p>
                                <p className="font-medium">{project.category}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 主視覺圖片 */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                        className="relative aspect-[16/9] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-content mx-auto space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={smoothTransition}
                        >
                            <h2 className="text-h3 font-semibold mb-6">Challenge</h2>
                            <p className="text-body-lg text-muted-foreground leading-relaxed">
                                {project.challenge}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={smoothTransition}
                        >
                            <h2 className="text-h3 font-semibold mb-6">Solution</h2>
                            <p className="text-body-lg text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 圖片展示 */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images.slice(1).map((image: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} ${index + 2}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 下一個專案 */}
            <section className="py-section border-t border-border">
                <div className="container mx-auto px-6 md:px-12">
                    <Link
                        href={`/work/${nextSlug}`}
                        className="group block max-w-content mx-auto"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-sm text-muted-foreground">Next Project</p>
                            <ArrowRight
                                size={20}
                                className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-h2 font-semibold group-hover:text-muted-foreground transition-colors duration-300">
                            {nextProject.title}
                        </h2>
                        <p className="text-muted-foreground mt-2">{nextProject.category}</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
