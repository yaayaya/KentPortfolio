'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { hoverScaleVariants } from '@/lib/animations'

interface BlogCardProps {
    title: string
    excerpt: string
    image: string
    slug: string
    date: string
    delay?: number
}

/**
 * 部落格卡片元件
 */
export default function BlogCard({
    title,
    excerpt,
    image,
    slug,
    date,
    delay = 0,
}: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            <Link href={`/blog/${slug}`} className="group block">
                <motion.div
                    variants={hoverScaleVariants}
                    initial="initial"
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl bg-primary-100 dark:bg-white/10 aspect-[16/9]"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </motion.div>

                <div className="mt-6">
                    <time className="text-sm text-primary-500 dark:text-gray-400">{formatDate(date)}</time>
                    <h3 className="text-xl font-display font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                    <p className="text-primary-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {excerpt}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
}
