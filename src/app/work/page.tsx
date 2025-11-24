"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/work/ProjectCard";
import { fadeInUp, smoothTransition } from "@/lib/animations";

// 所有專案資料 (與首頁相同)
const projects = [
    {
        title: "Cornell University",
        category: "Branding, Web Design",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=1000&fit=crop",
        slug: "cornell",
    },
    {
        title: "Daikin",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop",
        slug: "daikin",
    },
    {
        title: "PlowNow",
        category: "Product Design, Branding",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop",
        slug: "plownow",
    },
    {
        title: "ATANY",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1000&fit=crop",
        slug: "atany",
    },
];

export default function WorkPage() {
    return (
        <div className="min-h-screen pt-32 pb-section">
            <div className="container mx-auto px-6 md:px-12">
                {/* 頁面標題 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="text-h1 font-semibold tracking-tight mb-element"
                >
                    Work
                </motion.h1>

                {/* 專案網格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={index % 2 === 1 ? "md:mt-32" : ""}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
