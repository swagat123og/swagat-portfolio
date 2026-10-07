import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { HERO_THEME } from '../Theme'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'Blog', id: 'blog' },
]

const Nav_mid = () => {
  const [active, setActive] = useState('Home')

  /* =========================================================
     DETECT CURRENT SECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      let currentSection = 'Home'

      for (const item of navItems) {
        const section = document.getElementById(item.id)

        if (!section) continue

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY

        if (scrollPosition >= sectionTop) {
          currentSection = item.name
        }
      }

      setActive(currentSection)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavigation = (
    name: string,
    id: string
  ) => {
    setActive(name)

    const element =
      document.getElementById(id)

    if (!element) return

    const target =
      element.getBoundingClientRect().top +
      window.scrollY -
      88

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    })
  }


  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-8
        ml-30
        text-sm
        font-medium
        tracking-[-0.01em]
      "
      style={{
        color: HERO_THEME.textMuted,
      }}
    >

      {navItems.map((item) => {

        const isActive =
          active === item.name

        return (
          <motion.button
            key={item.name}

            onClick={() =>
              handleNavigation(
                item.name,
                item.id
              )
            }

            className="
              nav-item
              relative
              cursor-pointer
              whitespace-nowrap
              rounded-md
              border-none
              px-2
              py-1.5
              outline-none
              bg-transparent
            "

            animate={{
              scale: isActive
                ? 1.04
                : 1,

              color: isActive
                ? HERO_THEME.text
                : HERO_THEME.textMuted,
            }}

            whileHover={{
              color:
                HERO_THEME.text,
            }}

            whileTap={{
              scale: 0.98,
            }}

            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >

            {/* =================================================
                ACTIVE BACKGROUND
            ================================================= */}

            {isActive && (
              <motion.span
                layoutId="activeNav"

                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-md
                  border
                "

                style={{
                  backgroundColor:
                    `${HERO_THEME.primary}12`,

                  borderColor:
                    HERO_THEME.borderPrimary,

                  boxShadow: `
                    0 0 12px
                    ${HERO_THEME.glowButton}
                  `,
                }}

                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
              />
            )}


            {/* =================================================
                ACTIVE TOP ACCENT
            ================================================= */}

            {isActive && (
              <motion.span
                layoutId="activeNavAccent"

                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-2px]
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                "

                style={{
                  background: `
                    linear-gradient(
                      90deg,
                      ${HERO_THEME.primary},
                      ${HERO_THEME.accent}
                    )
                  `,

                  boxShadow:
                    `0 0 8px ${HERO_THEME.primary}`,
                }}

                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
              />
            )}


            {/* =================================================
                NAV TEXT
            ================================================= */}

            <span
              className="
                relative
                z-10
              "
            >
              {item.name}
            </span>

          </motion.button>
        )
      })}

    </div>
  )
}

export default Nav_mid