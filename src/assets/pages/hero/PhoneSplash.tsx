import { useEffect, useState } from 'react'
import { ArrowRight, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

import { HERO_THEME } from '../Theme'


type PhoneSplashProps = {
  onEnter: () => void
}


const PhoneSplash = ({ onEnter }: PhoneSplashProps) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)


  /* =======================================================
     LOADING
  ======================================================= */

  useEffect(() => {
    let startTime = Date.now()

    const duration = 5200

    const updateProgress = () => {
      const elapsed = Date.now() - startTime

      const value = Math.min(
        (elapsed / duration) * 100,
        100
      )

      setProgress(value)

      if (value < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        setLoading(false)
      }
    }

    requestAnimationFrame(updateProgress)

    return () => {
      startTime = Date.now()
    }
  }, [])


  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}
      className="
        absolute
        inset-0
        z-[60]
        overflow-hidden
        rounded-[29px]
      "
      style={{
        backgroundColor:
          HERO_THEME.background,
      }}
    >

      {/* ==================================================
          BACKGROUND ATMOSPHERE
      ================================================== */}

      {/* PRIMARY RED GLOW */}

      <div
        className="
          absolute
          top-[-80px]
          left-1/2
          -translate-x-1/2
          w-[220px]
          h-[220px]
          rounded-full
          blur-[70px]
        "
        style={{
          backgroundColor:
            HERO_THEME.glowPrimary,
        }}
      />


      {/* ORANGE GLOW */}

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-70px]
          w-[220px]
          h-[220px]
          rounded-full
          blur-[80px]
        "
        style={{
          backgroundColor:
            HERO_THEME.glowSecondary,
        }}
      />


      {/* CENTER DEPTH */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background:
            `radial-gradient(
              ellipse at center,
              transparent 20%,
              rgba(0,0,0,0.65) 100%
            )`,
        }}
      />


      {/* ==================================================
          TECHNICAL GRID
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
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
          backgroundSize: '28px 28px',
        }}
      />


      {/* ==================================================
          DECORATIVE RED LINE
      ================================================== */}

      <div
        className="
          absolute
          top-[28%]
          left-0
          w-[70px]
          h-px
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent,
              ${HERO_THEME.primary},
              transparent
            )
          `,
          opacity: 0.5,
        }}
      />


      {/* ==================================================
          DECORATIVE ORANGE LINE
      ================================================== */}

      <div
        className="
          absolute
          bottom-[28%]
          right-0
          w-[70px]
          h-px
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent,
              ${HERO_THEME.accent},
              transparent
            )
          `,
          opacity: 0.45,
        }}
      />


      {/* ==================================================
          CENTER CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          h-full
          w-full
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >


        {/* =================================================
            LOGO ICON
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="
            relative
            w-[48px]
            h-[48px]
            rounded-[14px]
            border
            flex
            items-center
            justify-center
          "
          style={{
            borderColor:
              HERO_THEME.borderPrimary,

            backgroundColor:
              `${HERO_THEME.primary}10`,

            boxShadow:
              `0 0 25px ${HERO_THEME.glowButton}`,
          }}
        >

          {/* INNER ICON */}

          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <Code2
              size={22}
              style={{
                color:
                  HERO_THEME.primary,
              }}
            />

          </motion.div>


          {/* OUTER RING */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="
              absolute
              inset-[-6px]
              rounded-[18px]
              border
            "
            style={{
              borderColor:
                HERO_THEME.borderPrimary,
            }}
          />

        </motion.div>


        {/* =================================================
            BRAND
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}
          className="mt-6"
        >

          <p
            className="
              text-[18px]
              font-bold
              tracking-[-0.03em]
            "
            style={{
              color:
                HERO_THEME.text,
            }}
          >
            SWAGAT

            <span
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              .div
            </span>

          </p>


          <p
            className="
              mt-1.5
              text-[6px]
              font-mono
              tracking-[0.18em]
              uppercase
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            Digital Experiences
          </p>

        </motion.div>


        {/* =================================================
            MAIN MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-12"
        >

          <p
            className="
              text-[7px]
              font-mono
              tracking-[0.16em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            WELCOME TO MY
          </p>


          <h1
            className="
              mt-2
              text-[21px]
              font-semibold
              leading-[1.05]
            "
            style={{
              color:
                HERO_THEME.text,
            }}
          >

            Digital

            <br />

            <span
              className="
                bg-clip-text
                text-transparent
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.secondary},
                    ${HERO_THEME.accent}
                  )
                `,
              }}
            >
              Playground
            </span>

          </h1>


          <p
            className="
              mt-3
              max-w-[170px]
              text-[7px]
              leading-[1.6]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            Explore projects, experiments
            and digital experiences.
          </p>

        </motion.div>


        {/* ==================================================
            LOADING
        ================================================== */}

        <div
          className="
            mt-12
            w-full
            max-w-[155px]
          "
        >

          {loading ? (

            <>

              {/* LOADING HEADER */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-[6px]
                    font-mono
                    tracking-[0.14em]
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  INITIALIZING
                </span>


                <span
                  className="
                    text-[6px]
                    font-mono
                  "
                  style={{
                    color:
                      HERO_THEME.primary,
                  }}
                >
                  {Math.round(progress)}%
                </span>

              </div>


              {/* PROGRESS BAR */}

              <div
                className="
                  mt-2
                  h-[2px]
                  w-full
                  overflow-hidden
                  rounded-full
                "
                style={{
                  backgroundColor:
                    'rgba(255,255,255,0.06)',
                }}
              >

                <motion.div
                  className="
                    h-full
                    rounded-full
                  "
                  style={{
                    width:
                      `${progress}%`,

                    backgroundImage: `
                      linear-gradient(
                        to right,
                        ${HERO_THEME.primary},
                        ${HERO_THEME.accent}
                      )
                    `,

                    boxShadow:
                      `0 0 8px ${HERO_THEME.primary}`,
                  }}
                />

              </div>


              {/* LOADING DOTS */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1
                "
              >

                {[0, 1, 2].map((dot) => (

                  <motion.span
                    key={dot}
                    animate={{
                      opacity: [
                        0.25,
                        1,
                        0.25,
                      ],

                      scale: [
                        0.8,
                        1,
                        0.8,
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay:
                        dot * 0.15,
                    }}
                    className="
                      w-[3px]
                      h-[3px]
                      rounded-full
                    "
                    style={{
                      backgroundColor:
                        HERO_THEME.primary,
                    }}
                  />

                ))}

              </div>

            </>

          ) : (

            /* =================================================
               ENTER BUTTON
            ================================================= */

            <motion.button
              type="button"
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.03,

                boxShadow:
                  `0 0 22px ${HERO_THEME.glowButton}`,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={onEnter}
              className="
                group
                w-full
                h-[38px]
                rounded-[9px]
                border
                text-white
                flex
                items-center
                justify-center
                gap-3
                text-[7px]
                font-mono
                font-semibold
                tracking-[0.08em]
                cursor-pointer
              "
              style={{
                borderColor:
                  HERO_THEME.primary,

                backgroundImage: `
                  linear-gradient(
                    to right,
                    ${HERO_THEME.primaryDark},
                    ${HERO_THEME.secondary}
                  )
                `,

                boxShadow:
                  `0 0 12px ${HERO_THEME.glowButton}`,
              }}
            >

              <span>
                LET'S EXPLORE
              </span>


              <ArrowRight
                size={11}
                style={{
                  color:
                    HERO_THEME.text,
                }}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </motion.button>

          )}

        </div>


        {/* =================================================
            VERSION
        ================================================= */}

        <p
          className="
            absolute
            bottom-5
            text-[5px]
            font-mono
            tracking-[0.14em]
          "
          style={{
            color:
              'rgba(255,255,255,0.20)',
          }}
        >
          SYSTEM // SWAGAT.DEV // 01.0
        </p>

      </div>

    </motion.div>
  )
}

export default PhoneSplash