import { AnimatedBackground } from '@/components/fx/animated-background'
import { BackToTop } from '@/components/fx/back-to-top'
import { CursorGlow } from '@/components/fx/cursor-glow'
import { LoadingScreen } from '@/components/fx/loading-screen'
import { ScrollProgress } from '@/components/fx/scroll-progress'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Stats } from '@/components/sections/stats'
import { WhyHireMe } from '@/components/sections/why-hire-me'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
