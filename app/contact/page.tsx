'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { personalInfo } from '@/lib/data'

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
            <AnimatedSection>
                <h1 className="text-[clamp(3rem,6vw,6rem)] font-bold uppercase tracking-tighter mb-24">
                    Contact
                </h1>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left: Main Email */}
                <AnimatedSection delay={0.1}>
                    <div className="space-y-8">
                        <p className="text-xl text-gray-500 leading-relaxed max-w-md">
                            For exhibition inquiries, collaborations, or just to say hello, please feel free to reach out.
                        </p>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="block text-3xl lg:text-5xl font-medium hover:text-gray-500 transition-colors break-all"
                        >
                            {personalInfo.email}
                        </a>
                    </div>
                </AnimatedSection>

                {/* Right: Socials & Info */}
                <AnimatedSection delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-black pt-12 lg:border-t-0 lg:pt-0">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Social</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-lg hover:text-gray-500 transition-colors flex items-center gap-2 group">
                                        Instagram
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-lg hover:text-gray-500 transition-colors flex items-center gap-2 group">
                                        LinkedIn
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-lg hover:text-gray-500 transition-colors flex items-center gap-2 group">
                                        Behance
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Location</h3>
                            <p className="text-lg">
                                Taipei, Taiwan<br />
                                Available for remote work
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}
