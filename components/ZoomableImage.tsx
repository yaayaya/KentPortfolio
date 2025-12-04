'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface ZoomableImageProps {
    src: string
    alt: string
    className?: string
}

export default function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [scale, setScale] = useState(1)

    // Reset scale when closing
    useEffect(() => {
        if (!isOpen) setScale(1)
    }, [isOpen])

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation()
        setScale((s) => Math.min(s + 0.5, 4))
    }

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation()
        setScale((s) => Math.max(s - 0.5, 1))
    }

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
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
                    >
                        {/* Controls Container */}
                        <div
                            className="absolute top-6 right-6 flex items-center gap-4 z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10">
                                <button
                                    onClick={handleZoomOut}
                                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                                    disabled={scale <= 1}
                                    aria-label="Zoom Out"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                                <span className="text-xs font-medium text-white/80 w-8 text-center tabular-nums">
                                    {Math.round(scale * 100)}%
                                </span>
                                <button
                                    onClick={handleZoomIn}
                                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                                    disabled={scale >= 4}
                                    aria-label="Zoom In"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white transition-all duration-300 group"
                                aria-label="Close"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <motion.div
                            layoutId={`image-${src}`}
                            className="relative w-full h-full flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                animate={{ scale }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
                                drag={scale > 1}
                                dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                                dragElastic={0.1}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
