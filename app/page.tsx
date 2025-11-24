import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { getPlaceholderImage } from '@/lib/utils'

// 專案資料
const projects = [
    {
        title: 'Cornell University',
        subtitle: 'Redesigning Cornell Library for Clarity and Scale',
        image: getPlaceholderImage(800, 600, 'Cornell'),
        slug: 'cornell-university',
    },
    {
        title: 'Daikin Hero Cloud',
        subtitle: 'Scaling UX at Daikin HERO Cloud',
        image: getPlaceholderImage(800, 600, 'Daikin'),
        slug: 'daikin',
    },
    {
        title: 'PlowNow',
        subtitle: 'Designing a Bold MVP for Snow Removal on Demand',
        image: getPlaceholderImage(800, 600, 'PlowNow'),
        slug: 'plownow',
    },
    {
        title: 'ATANY',
        subtitle: 'Creating the Perfect T-Shirt, Tailored for You',
        image: getPlaceholderImage(800, 600, 'ATANY'),
        slug: 'atany',
    },
    {
        title: 'ModifAIHealth',
        subtitle: 'Transforming Patient Communication with AI',
        image: getPlaceholderImage(800, 600, 'ModifAI'),
        slug: 'modifai-health',
    },
    {
        title: 'WellnStrong',
        subtitle: 'Building a Cohesive Wellness Platform for a Growing Community',
        image: getPlaceholderImage(800, 600, 'WellnStrong'),
        slug: 'wellnstrong',
    },
]

export default function HomePage() {
    return (
        <>
            {/* Hero 區塊 */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
                <div className="max-w-[1400px] w-full">
                    <AnimatedSection variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-8">
                            Introductions
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1} variant="fadeInDown">
                        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight mb-16">
                            Can Wait.
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2} variant="fadeInUp">
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-gray-600">
                            Get to Know my Work
                        </h2>
                    </AnimatedSection>
                </div>
            </section>

            {/* 專案展示區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.slug} {...project} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 介紹區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection>
                        <p className="text-xl lg:text-2xl text-gray-600 mb-12">
                            Okay, Here's the introduction.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.4] max-w-4xl">
                            I'm{' '}
                            <a href="/about" className="underline hover:opacity-70 transition-opacity">
                                Manolo Bevia
                            </a>
                            , a designer/coder who believes clarity beats cleverness. I help brands turn messy ideas into clean, intuitive products.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                        <p className="text-xl lg:text-2xl text-gray-600 mt-12">
                            That's it. No long stories.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* 部落格區塊 */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-black text-white">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatedSection>
                        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium mb-4">Blog.</h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                            {/* 部落格文章會在這裡 */}
                            <div className="space-y-4">
                                <p className="text-2xl font-medium">From Flash to Jitter</p>
                                <p className="text-gray-400">Design for Everyone</p>
                                <p className="text-gray-400">Framer to the Rescue!</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
