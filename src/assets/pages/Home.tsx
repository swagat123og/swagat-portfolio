import Hero from './hero/Hero'
import TechMarquee from './sideScoller/TechMarquee'
import About from './about/About'
import Skills from './skills/skill'
import Experience from './experiences/Experience'
import Project from './projects/Project'
import Contact from './contacts/Contact'
import Blog from './blog/Blog'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo

    if (scrollTarget !== 'experience') return

    const timer = window.setTimeout(() => {
      const element = document.getElementById('experience')

      if (!element) return

      const navbarOffset = 88

      const target =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      })

      window.history.replaceState({}, '')
    }, 100)

    return () => {
      window.clearTimeout(timer)
    }
  }, [location.state])
  return (
    <>
      <section id="home">
        <Hero/>
      </section>

      <section className="relative -mt-6 w-full md:-mt-12">
        <TechMarquee />
      </section>

      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Blog />
    </>
  )
}

export default Home