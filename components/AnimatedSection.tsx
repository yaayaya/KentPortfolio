'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { fadeInUpVariants } from '@/lib/animations'

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    variant?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight'
}

/**
 * 動畫區塊元件
 * 當元素進入視窗時觸發動畫
 */
export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    variant = 'fadeInUp',
}: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const variants = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        fadeInUp: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        fadeInDown: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
        },
        slideInRight: {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[variant]}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
