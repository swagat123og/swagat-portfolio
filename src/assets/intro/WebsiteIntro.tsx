import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { HERO_THEME } from '../pages/Theme'

type WebsiteIntroProps = {
  onComplete: () => void
}

const WebsiteIntro = ({ onComplete }: WebsiteIntroProps) => {
  const [phase, setPhase] = useState<
    'loading' | 'logo' | 'exit'
  >('loading')

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPhase('logo')
    }, 1400)

    const exitTimer = setTimeout(() => {
      setPhase('exit')
    }, 3500)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4100)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            flex
            items-center
            justify-center
          "
          style={{
            backgroundColor: HERO_THEME.background,
          }}
        >

          {/* =================================================
              AMBIENT RED GLOW
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: phase === 'logo' ? 1 : 0,
              scale: phase === 'logo' ? 1 : 0.5,
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[500px]
              h-[500px]
              rounded-full
              blur-[120px]
            "
            style={{
              backgroundColor: HERO_THEME.glowPrimary,
            }}
          />

          {/* =================================================
              ORANGE ATMOSPHERIC GLOW
          ================================================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'logo' ? 0.45 : 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="
              absolute
              right-[20%]
              top-[20%]
              w-[280px]
              h-[280px]
              rounded-full
              blur-[100px]
            "
            style={{
              backgroundColor: HERO_THEME.glowSecondary,
            }}
          />

          {/* =================================================
              SUBTLE GRID
          ================================================= */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.018]
              pointer-events-none
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  ${HERO_THEME.grid} 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  ${HERO_THEME.grid} 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '80px 80px',
            }}
          />

          {/* =================================================
              LOADING SCREEN
          ================================================= */}
          <AnimatePresence mode="wait">

            {phase === 'loading' && (
              <motion.div
                key="loading"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                "
              >

                {/* Loading ring */}
                <div
                  className="
                    relative
                    w-[46px]
                    h-[46px]
                  "
                >

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                    "
                    style={{
                      borderColor: 'rgba(255,255,255,0.06)',
                      borderTopColor: HERO_THEME.primary,
                      boxShadow: `
                        0 0 10px
                        ${HERO_THEME.primary}
                      `,
                    }}
                  />

                  <div
                    className="
                      absolute
                      inset-[9px]
                      rounded-full
                      border
                    "
                    style={{
                      backgroundColor: `${HERO_THEME.primary}0A`,
                      borderColor: 'rgba(255,255,255,0.05)',
                    }}
                  />

                </div>

                {/* Loading text */}
                <motion.p
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="
                    mt-5
                    text-[10px]
                    font-mono
                    tracking-[0.3em]
                  "
                  style={{
                    color: HERO_THEME.textMuted,
                  }}
                >
                  LOADING
                </motion.p>

                {/* Loading bar */}
                <div
                  className="
                    mt-4
                    w-[120px]
                    h-[1px]
                    overflow-hidden
                  "
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                  }}
                >
                  <motion.div
                    initial={{
                      x: '-100%',
                    }}
                    animate={{
                      x: '100%',
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-1/2 h-full"
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
                  />
                </div>

              </motion.div>
            )}

            {/* =================================================
                LOGO REVEAL
            ================================================= */}
            {phase === 'logo' && (
              <motion.div
                key="logo"
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                "
              >

                {/* Logo container */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.65,
                    filter: 'blur(12px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >

                  {/* Back glow */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1.4,
                    }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      blur-[35px]
                    "
                    style={{
                      backgroundColor: `${HERO_THEME.primary}14`,
                    }}
                  />

                  {/* Main logo */}
                  <h1
                    className="
                      relative
                      text-[72px]
                      sm:text-[90px]
                      md:text-[110px]
                      font-bold
                      tracking-[-0.07em]
                      leading-none
                    "
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    SWAGAT
                  </h1>

                  {/* Red / orange light sweep */}
                  <motion.div
                    initial={{
                      x: '-120%',
                    }}
                    animate={{
                      x: '120%',
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-[20%]
                      rotate-[12deg]
                      blur-[8px]
                      pointer-events-none
                    "
                    style={{
                      background: `
                        linear-gradient(
                          90deg,
                          transparent,
                          ${HERO_THEME.primary}80,
                          ${HERO_THEME.accent}60,
                          transparent
                        )
                      `,
                    }}
                  />

                </motion.div>

                {/* .div */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                    letterSpacing: '0.5em',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    letterSpacing: '0.22em',
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className="
                    mt-3
                    text-[15px]
                    font-mono
                  "
                  style={{
                    color: HERO_THEME.primary,
                  }}
                >
                  .div
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: 160,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6,
                  }}
                  className="mt-8 h-px"
                  style={{
                    background: `
                      linear-gradient(
                        90deg,
                        transparent,
                        ${HERO_THEME.primary}80,
                        ${HERO_THEME.accent}70,
                        transparent
                      )
                    `,
                  }}
                />

                {/* Tagline */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.15,
                    duration: 0.5,
                  }}
                  className="
                    mt-5
                    text-[9px]
                    font-mono
                    tracking-[0.25em]
                    uppercase
                  "
                  style={{
                    color: HERO_THEME.textMuted,
                  }}
                >
                  Creative Developer
                </motion.p>

              </motion.div>
            )}

          </AnimatePresence>

          {/* =================================================
              CORNER HUD
          ================================================= */}

          <div
            className="
              absolute
              top-8
              left-8
              text-[7px]
              font-mono
              tracking-[0.16em]
            "
            style={{
              color: 'rgba(255,255,255,0.20)',
            }}
          >
            SYSTEM // 01
          </div>

          <div
            className="
              absolute
              top-8
              right-8
              text-[7px]
              font-mono
              tracking-[0.16em]
            "
            style={{
              color: 'rgba(255,255,255,0.20)',
            }}
          >
            SWAGAT.DEV
          </div>

          <div
            className="
              absolute
              bottom-8
              left-8
              flex
              items-center
              gap-2
              text-[7px]
              font-mono
              tracking-[0.16em]
            "
            style={{
              color: 'rgba(255,255,255,0.20)',
            }}
          >
            <span
              className="
                w-[5px]
                h-[5px]
                rounded-full
              "
              style={{
                backgroundColor: HERO_THEME.primary,
                boxShadow:
                  `0 0 8px ${HERO_THEME.primary}`,
              }}
            />

            INITIALIZING EXPERIENCE
          </div>

          <div
            className="
              absolute
              bottom-8
              right-8
              text-[7px]
              font-mono
              tracking-[0.16em]
            "
            style={{
              color: 'rgba(255,255,255,0.20)',
            }}
          >
            2026
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WebsiteIntro