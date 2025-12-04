'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface ZoomableImageProps {
    src: string
    alt: string
    className?: string
}

export default function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.div
                layoutId={`image-${src}`}
                onClick={() => setIsOpen(true)}
                className={clsx('cursor-zoom-in overflow-hidden', className)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
                    >
                        <motion.div
                            layoutId={`image-${src}`}
                            className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white text-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
