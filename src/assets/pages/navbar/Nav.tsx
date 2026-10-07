import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Nav_left from './Nav_left'
import Nav_mid from './Nav_mid'
import Nav_rght from './Nav_rght'

const Nav = () => {
  const isHovering = useRef(false)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const navbar = document.querySelector('.navbar')

    if (!navbar) return

    const showNavbar = () => {
      gsap.killTweensOf(navbar)

      gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const hideNavbar = () => {
      // Never hide while cursor is on navbar
      if (isHovering.current) return

      // Always keep visible near the top
      if (window.scrollY <= 80) {
        showNavbar()
        return
      }

      gsap.killTweensOf(navbar)

      gsap.to(navbar, {
        y: -100,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.inOut',
      })
    }

    const handleScroll = () => {
      // Show immediately when scrolling
      showNavbar()

      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }

      // Wait until scrolling stops
      scrollTimer.current = setTimeout(() => {
        hideNavbar()
      }, 900)
    }

    const handleMouseEnter = () => {
      isHovering.current = true

      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }

      showNavbar()
    }

    const handleMouseLeave = () => {
      isHovering.current = false

      // Don't immediately hide.
      // Give the user time to move away naturally.
      if (window.scrollY > 80) {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current)
        }

        scrollTimer.current = setTimeout(() => {
          hideNavbar()
        }, 900)
      }
    }

    // Initial state
    gsap.set(navbar, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
    })

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    navbar.addEventListener('mouseenter', handleMouseEnter)
    navbar.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('scroll', handleScroll)

      navbar.removeEventListener('mouseenter', handleMouseEnter)
      navbar.removeEventListener('mouseleave', handleMouseLeave)

      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }

      gsap.killTweensOf(navbar)
    }
  }, [])

  return (
    <nav
      className="
        navbar
        fixed
        top-0
        left-0
        z-50
        flex
        h-[88px]
        w-full
        items-center
        px-10
        py-3
        border-b
        border-white/[0.06]
        bg-[#06070B]/75
        backdrop-blur-md
      "
    >
      <Nav_left />

      <div className="flex min-w-0 flex-1 justify-center">
        <Nav_mid />
      </div>

      <Nav_rght />
    </nav>
  )
}

export default Nav