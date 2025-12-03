'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    subtitle: string
    image: string
    slug: string
    delay?: number
}

/**
 * 專案卡片元件 - 完美復刻原網站
 */
export default function ProjectCard({
    title,
    subtitle,
    image,
    slug,
    delay = 0,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link href={`/work/${slug}`} className="group block">
                {/* 圖片容器 */}
                <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-white/10 aspect-[4/3] mb-6">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* 文字內容 */}
                <div>
                    <h3 className="text-2xl lg:text-3xl font-medium mb-3 group-hover:opacity-70 transition-opacity">
                        {title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
}
