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
                            onClick={(e) => e.stopPropagation()} // Prevent closing if clicking image itself? No, usually clicking image closes too or toggles. Let's let background close it.
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white text-xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
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
