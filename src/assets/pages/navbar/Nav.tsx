import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Nav_left from './Nav_left'
import Nav_mid from './Nav_mid'
import Nav_rght from './Nav_rght'
import Nav_mobile from './Nav_mobile'

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
      if (isHovering.current) return

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
      showNavbar()

      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }

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

      if (window.scrollY > 80) {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current)
        }

        scrollTimer.current = setTimeout(() => {
          hideNavbar()
        }, 900)
      }
    }

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

      navbar.removeEventListener(
        'mouseenter',
        handleMouseEnter
      )

      navbar.removeEventListener(
        'mouseleave',
        handleMouseLeave
      )

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
        border-b
        border-white/[0.06]
        bg-[#06070B]/75
        backdrop-blur-md

        px-10
        py-3

        max-[1024px]:h-[76px]
        max-[1024px]:px-5
        max-[1024px]:py-2

        max-[768px]:h-[72px]
        max-[768px]:px-4

        max-[425px]:h-[68px]
        max-[425px]:px-4

        max-[320px]:h-[64px]
        max-[320px]:px-3
      "
    >
      {/* LEFT LOGO */}

      <Nav_left />

      {/* DESKTOP MENU */}

      <div
        className="
          flex
          min-w-0
          flex-1
          justify-center

          max-[1024px]:hidden
        "
      >
        <Nav_mid />
      </div>

      {/* RIGHT SIDE */}

      <div
        className="
          ml-auto
          flex
          items-center

          gap-5

          max-[1024px]:gap-3

          max-[768px]:gap-2

          max-[425px]:gap-2

          max-[320px]:gap-1
        "
      >
        {/* AVAILABLE / LET'S TALK */}

        <div
          className="
            max-[768px]:hidden
          "
        >
          <Nav_rght />
        </div>

        {/* TABLET / MOBILE SLIDER */}

        <Nav_mobile />
      </div>
    </nav>
  )
}

export default Nav