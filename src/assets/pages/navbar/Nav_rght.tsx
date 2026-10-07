import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { HERO_THEME } from '../Theme'

const Nav_rght = () => {
  const [darkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleContact = () => {
    const contact = document.getElementById('contact')

    if (!contact) return

    const target =
      contact.getBoundingClientRect().top +
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
        items-center

        gap-8
        ml-8

        max-[1100px]:gap-4
        max-[1100px]:ml-4

        max-[1024px]:gap-3
        max-[1024px]:ml-2

        max-[900px]:gap-2
        max-[900px]:ml-1

        max-[768px]:gap-3
        max-[768px]:ml-0

        max-[425px]:gap-2
        max-[320px]:gap-1
      "
    >
      {/* =====================================================
          AVAILABILITY
      ===================================================== */}

      <motion.div
        className="
          flex
          items-center
          gap-3
          shrink-0

          max-[1100px]:gap-2
          max-[768px]:gap-2
          max-[425px]:gap-1.5
          max-[320px]:gap-1
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
      >
        <motion.span
          className="
            h-[10px]
            w-[10px]
            shrink-0
            rounded-full

            max-[1100px]:h-[9px]
            max-[1100px]:w-[9px]

            max-[1024px]:h-[8px]
            max-[1024px]:w-[8px]

            max-[768px]:h-[8px]
            max-[768px]:w-[8px]

            max-[425px]:h-[7px]
            max-[425px]:w-[7px]

            max-[320px]:h-[6px]
            max-[320px]:w-[6px]
          "
          style={{
            backgroundColor: '#10C98B',
            boxShadow: '0 0 8px #10C98B',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <p
          className="
            whitespace-nowrap
            font-mono
            font-medium
            tracking-[0.02em]

            text-[15px]

            max-[1100px]:text-[13px]

            max-[1024px]:text-[12px]

            max-[900px]:text-[11px]

            max-[768px]:text-[12px]

            max-[425px]:text-[10px]

            max-[320px]:text-[9px]
          "
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          Available for hire
        </p>
      </motion.div>

      {/* =====================================================
          LET'S TALK
      ===================================================== */}

      <motion.button
        type="button"
        onClick={handleContact}
        whileHover={{
          y: -2,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        className="
          group
          relative
          flex
          shrink-0
          items-center
          justify-center
          cursor-pointer
          rounded-[10px]
          border
          backdrop-blur-sm

          h-[48px]
          min-w-[148px]
          px-7

          text-[14px]

          max-[1100px]:h-[44px]
          max-[1100px]:min-w-[125px]
          max-[1100px]:px-5
          max-[1100px]:text-[12px]

          max-[1024px]:h-[40px]
          max-[1024px]:min-w-[110px]
          max-[1024px]:px-4
          max-[1024px]:rounded-[8px]
          max-[1024px]:text-[11px]

          max-[900px]:h-[38px]
          max-[900px]:min-w-[100px]
          max-[900px]:px-3
          max-[900px]:text-[10px]

          max-[768px]:h-[38px]
          max-[768px]:min-w-[105px]
          max-[768px]:px-3
          max-[768px]:text-[10px]

          max-[425px]:h-[34px]
          max-[425px]:min-w-[88px]
          max-[425px]:px-2.5
          max-[425px]:rounded-[7px]
          max-[425px]:text-[9px]

          max-[320px]:h-[30px]
          max-[320px]:min-w-[78px]
          max-[320px]:px-2
          max-[320px]:rounded-[6px]
          max-[320px]:text-[8px]

          font-mono
          font-semibold
          tracking-[0.04em]
          transition-all
          duration-300
          ease-out
        "
        style={{
          backgroundColor: `${HERO_THEME.background}E6`,
          borderColor: HERO_THEME.primary,
          color: HERO_THEME.text,
          boxShadow: `0 0 8px ${HERO_THEME.glowButton}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            `${HERO_THEME.primary}18`

          e.currentTarget.style.borderColor =
            HERO_THEME.secondary

          e.currentTarget.style.boxShadow =
            `0 0 18px ${HERO_THEME.glowButton}`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            `${HERO_THEME.background}E6`

          e.currentTarget.style.borderColor =
            HERO_THEME.primary

          e.currentTarget.style.boxShadow =
            `0 0 8px ${HERO_THEME.glowButton}`
        }}
      >
        <span className="relative z-10 whitespace-nowrap">
          Let's Talk
        </span>

        {/* Orange hover accent */}

        <span
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            transition-all
            duration-300
            group-hover:w-16
          "
          style={{
            background: `
              linear-gradient(
                90deg,
                ${HERO_THEME.primary},
                ${HERO_THEME.accent}
              )
            `,
            boxShadow: `0 0 8px ${HERO_THEME.primary}`,
          }}
        />
      </motion.button>
    </div>
  )
}

export default Nav_rght