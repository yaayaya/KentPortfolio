"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover } from "@/lib/animations";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    slug: string;
}

export default function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
    return (
        <Link href={`/work/${slug}`} className="block group">
            {/* 圖片容器 - 16:10 比例 */}
            <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-muted mb-6">
                <motion.div
                    whileHover={imageHover}
                    className="w-full h-full relative"
                >
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted">
                            <span className="text-sm">No Image</span>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* 文字資訊 */}
            <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                    {category}
                </p>
            </div>
        </Link>
    );
}
