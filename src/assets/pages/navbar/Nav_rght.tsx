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
    <div className="flex items-center gap-8 ml-8">

      {/* =====================================================
          AVAILABILITY
      ===================================================== */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
      >
        <motion.span
          className="
            w-[10px]
            h-[10px]
            rounded-full
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
            text-[15px]
            font-medium
            font-mono
            tracking-[0.02em]
            whitespace-nowrap
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
          h-[48px]
          min-w-[148px]
          px-7
          rounded-[10px]
          flex
          items-center
          justify-center
          backdrop-blur-sm
          border
          text-[14px]
          font-semibold
          font-mono
          tracking-[0.04em]
          transition-all
          duration-300
          ease-out
          cursor-pointer
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
        <span className="relative z-10">
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