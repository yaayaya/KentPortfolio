"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/work/ProjectCard";
import { useRef } from "react";
import { smoothTransition } from "@/lib/animations";

// 專案資料 (暫時使用 mock data)
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

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 視差效果：文字向上移動並淡出
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero 區塊 */}
      <section className="h-screen flex flex-col justify-center items-center sticky top-0 -z-10 overflow-hidden">
        <motion.div style={{ y, opacity }} className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            className="text-hero leading-[0.9] font-semibold tracking-tighter mb-8"
          >
            Can Wait.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of thoughtful design and digital craftsmanship.
          </motion.p>
        </motion.div>
      </section>

      {/* Selected Work 區塊 */}
      <section className="bg-background min-h-screen py-section relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* 區塊標題 */}
          <div className="mb-16">
            <p className="text-sm text-muted-foreground font-normal tracking-wide uppercase">
              Selected Work
            </p>
          </div>

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
      </section>
    </div>
  );
}
