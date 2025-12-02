'use client'

import AnimatedSection from '@/components/AnimatedSection'
import ZoomableImage from '@/components/ZoomableImage'
import { personalInfo } from '@/lib/data'
import { getPlaceholderImage } from '@/lib/utils'

export default function AboutPage() {
    const heroImg = getPlaceholderImage(1200, 1200, 'Kent') // Square-ish for side layout

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* Left Column: Image & Contact - Removed sticky to fix mobile issue */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <AnimatedSection>
                        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-8">
                            <ZoomableImage
                                src={heroImg}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="block text-2xl font-medium hover:text-gray-600 transition-colors break-all"
                            >
                                {personalInfo.email}
                            </a>
                            <div className="flex gap-4 pt-4">
                                {/* Social Links Placeholders */}
                                <a href="#" className="text-sm uppercase tracking-widest hover:underline">Instagram</a>
                                <a href="#" className="text-sm uppercase tracking-widest hover:underline">LinkedIn</a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Right Column: Info */}
                <div className="lg:col-span-7 space-y-20">

                    {/* Intro */}
                    <AnimatedSection delay={0.1}>
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                                {personalInfo.name}
                            </h1>
                            <p className="text-xl text-gray-500 mb-12 font-medium">
                                {personalInfo.title}
                            </p>
                            <div className="space-y-2 text-lg lg:text-xl leading-relaxed text-gray-800">
                                {personalInfo.intro.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Exhibitions */}
                    <AnimatedSection delay={0.3}>
                        <div className="border-t border-black pt-12">
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">
                                Exhibitions
                            </h2>
                            <ul className="space-y-6">
                                {personalInfo.exhibitions.map((ex, i) => (
                                    <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                                        <span className="text-lg font-medium group-hover:text-primary-600 transition-colors">
                                            {ex}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Philosophy / Statement */}
                    <AnimatedSection delay={0.4}>
                        <div className="border-t border-black pt-12">
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">
                                Artist Statement
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    My work investigates the subtle, often overlooked interactions between humans and the technological objects that surround us.
                                    By deconstructing these everyday tools, I aim to reveal the hidden choreography of our digital lives.
                                </p>
                                <p>
                                    I believe that design is not just about problem-solving, but about creating new ways of seeing and understanding the world.
                                    Through a synthesis of code, visual art, and interactive installation, I strive to build experiences that are both intellectually rigorous and emotionally resonant.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    )
}
