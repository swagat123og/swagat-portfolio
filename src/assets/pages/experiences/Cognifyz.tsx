import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Code2,
  CalendarDays,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { HERO_THEME } from '../Theme'
import certificateImage from '../../images/cognifyz-certificate.png'

const Cognifyz = () => {
  const navigate = useNavigate()
  const handleBack = () => {
  navigate('/', {
    state: {
      scrollTo: 'experience',
    },
  })
}

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: HERO_THEME.background,
        color: HERO_THEME.text,
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Red glow */}
        <div
          className="absolute left-[-180px] top-[180px] h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: HERO_THEME.glowPrimary,
          }}
        />

        {/* Orange glow */}
        <div
          className="absolute right-[-180px] top-[300px] h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: HERO_THEME.glowSecondary,
          }}
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-[45%] h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background: HERO_THEME.glowCenter,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
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
            backgroundSize: '70px 70px',
          }}
        />

        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 h-[250px]"
          style={{
            background: `linear-gradient(
              to bottom,
              ${HERO_THEME.background},
              transparent
            )`,
          }}
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-[125px] md:px-10">

        {/* BACK BUTTON */}

        <motion.button
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          onClick={handleBack}
          className="mb-14 flex items-center gap-3 text-xs font-semibold tracking-[0.18em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          <ArrowLeft size={16} />

          <span className="transition-colors duration-300 hover:text-white">
            BACK TO EXPERIENCE
          </span>
        </motion.button>


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-5 flex items-center gap-3"
            >

              <span
                className="h-[2px] w-10"
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.secondary}
                  )`,
                }}
              />

              <span
                className="text-xs font-semibold tracking-[0.28em]"
                style={{
                  color: HERO_THEME.secondary,
                }}
              >
                INTERNSHIP / 02
              </span>

            </motion.div>


            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: 'easeOut',
              }}
              className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl"
            >

              <span
                style={{
                  color: HERO_THEME.text,
                }}
              >
                COGNI
              </span>

              <span
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${HERO_THEME.secondary},
                    ${HERO_THEME.accent}
                  )`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                FYZ
              </span>

            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-6 max-w-[650px] text-sm leading-7 md:text-base"
              style={{
                color: HERO_THEME.textMuted,
              }}
            >
              Frontend development internship focused on building
              responsive interfaces, implementing modern web layouts,
              and developing practical frontend skills.
            </motion.p>

          </div>


          {/* CATEGORY */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex items-center gap-3 rounded-full border px-5 py-3"
            style={{
              borderColor: HERO_THEME.borderSecondary,
              backgroundColor: `${HERO_THEME.secondary}08`,
              boxShadow: `0 0 25px ${HERO_THEME.glowButton}`,
            }}
          >

            <Code2
              size={17}
              style={{
                color: HERO_THEME.secondary,
              }}
            />

            <span
              className="text-xs font-semibold tracking-[0.16em]"
              style={{
                color: HERO_THEME.text,
              }}
            >
              FRONTEND DEVELOPMENT
            </span>

          </motion.div>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">


          {/* =================================================
              CERTIFICATE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="
              group
              relative
              self-start
              overflow-hidden
              rounded-2xl
              border
              p-3
            "
            style={{
              borderColor: HERO_THEME.borderSecondary,
              backgroundColor: 'rgba(10,10,10,0.75)',
              boxShadow: `
                0 0 50px ${HERO_THEME.glowSecondary},
                inset 0 0 30px rgba(255,255,255,0.015)
              `,
            }}
          >

            {/* Top accent */}

            <div
              className="absolute left-0 right-0 top-0 z-10 h-[2px]"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent,
                  ${HERO_THEME.secondary},
                  ${HERO_THEME.accent},
                  transparent
                )`,
              }}
            />


            {/* Certificate image */}

            <div className="relative overflow-hidden rounded-xl">

              <img
                src={certificateImage}
                alt="Cognifyz Frontend Development Internship Certificate"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.015]
                "
              />

              {/* Hover overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      ${HERO_THEME.secondary}08,
                      transparent 45%,
                      ${HERO_THEME.accent}08
                    )
                  `,
                }}
              />

            </div>

          </motion.div>


          {/* =================================================
              DETAILS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut',
            }}
            className="flex flex-col"
          >

            {/* DETAILS CARD */}

            <div
              className="rounded-2xl border p-7 md:p-8"
              style={{
                borderColor: HERO_THEME.borderSecondary,
                backgroundColor: 'rgba(8,8,8,0.7)',
              }}
            >

              {/* TITLE */}

              <div className="mb-8 flex items-center gap-3">

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: HERO_THEME.borderSecondary,
                    backgroundColor: `${HERO_THEME.secondary}10`,
                    color: HERO_THEME.secondary,
                  }}
                >
                  <Award size={19} />
                </div>

                <div>

                  <p
                    className="text-[10px] font-semibold tracking-[0.22em]"
                    style={{
                      color: HERO_THEME.textDim,
                    }}
                  >
                    CERTIFICATION
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    Internship Certificate
                  </h2>

                </div>

              </div>


              {/* ORGANIZATION */}

              <div className="mb-7">

                <p
                  className="mb-2 text-[10px] font-semibold tracking-[0.2em]"
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  ORGANIZATION
                </p>

                <h3
                  className="text-2xl font-black uppercase"
                  style={{
                    color: HERO_THEME.text,
                  }}
                >
                  Cognifyz Technologies
                </h3>

              </div>


              {/* ROLE */}

              <div className="mb-7">

                <p
                  className="mb-2 text-[10px] font-semibold tracking-[0.2em]"
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  ROLE
                </p>

                <p
                  className="text-base font-semibold"
                  style={{
                    color: HERO_THEME.secondary,
                  }}
                >
                  Frontend Developer Intern
                </p>

              </div>


              {/* DATES */}

              <div
                className="mb-7 grid grid-cols-2 gap-4 border-y py-6"
                style={{
                  borderColor: HERO_THEME.borderSecondary,
                }}
              >

                {/* START */}

                <div>

                  <div className="mb-2 flex items-center gap-2">

                    <CalendarDays
                      size={14}
                      style={{
                        color: HERO_THEME.secondary,
                      }}
                    />

                    <span
                      className="text-[10px] font-semibold tracking-[0.18em]"
                      style={{
                        color: HERO_THEME.textDim,
                      }}
                    >
                      START DATE
                    </span>

                  </div>

                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    15/06/2026
                  </p>

                </div>


                {/* END */}

                <div>

                  <div className="mb-2 flex items-center gap-2">

                    <CalendarDays
                      size={14}
                      style={{
                        color: HERO_THEME.accent,
                      }}
                    />

                    <span
                      className="text-[10px] font-semibold tracking-[0.18em]"
                      style={{
                        color: HERO_THEME.textDim,
                      }}
                    >
                      END DATE
                    </span>

                  </div>

                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    15/07/2026
                  </p>

                </div>

              </div>


              {/* EXPERIENCE */}

              <div>

                <p
                  className="mb-3 text-[10px] font-semibold tracking-[0.2em]"
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  EXPERIENCE
                </p>

                <p
                  className="text-sm leading-7"
                  style={{
                    color: HERO_THEME.textMuted,
                  }}
                >
                  During this internship, I worked on frontend
                  development tasks, responsive interfaces and
                  interactive web experiences while strengthening
                  my practical development skills.
                </p>

              </div>

            </div>


            {/* =================================================
                SKILLS
            ================================================= */}

            <div
              className="mt-5 rounded-2xl border p-7"
              style={{
                borderColor: HERO_THEME.borderSecondary,
                backgroundColor: 'rgba(8,8,8,0.7)',
              }}
            >

              <p
                className="mb-5 text-[10px] font-semibold tracking-[0.2em]"
                style={{
                  color: HERO_THEME.textDim,
                }}
              >
                FOCUS AREAS
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  'Frontend Development',
                  'Responsive Design',
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'UI Development',
                ].map((skill) => (

                  <span
                    key={skill}
                    className="rounded-md border px-3 py-2 text-[11px] font-medium"
                    style={{
                      color: HERO_THEME.textSoft,
                      borderColor: HERO_THEME.borderSecondary,
                      backgroundColor: `${HERO_THEME.secondary}05`,
                    }}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* =================================================
                VIEW CERTIFICATE
            ================================================= */}

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                px-6
                py-4
                text-xs
                font-bold
                tracking-[0.15em]
              "
              style={{
                borderColor: HERO_THEME.secondary,
                color: HERO_THEME.text,
                backgroundColor: `${HERO_THEME.secondary}0D`,
                boxShadow: `0 0 25px ${HERO_THEME.glowButton}`,
              }}
              onClick={() => {
                window.open(certificateImage, '_blank')
              }}
            >

              VIEW CERTIFICATE

              <ExternalLink
                size={15}
                style={{
                  color: HERO_THEME.secondary,
                }}
              />

            </motion.button>

          </motion.div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mt-20 flex flex-col items-center text-center"
        >

          <div
            className="mb-6 h-[1px] w-20"
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${HERO_THEME.secondary},
                transparent
              )`,
            }}
          />

          <p
            className="max-w-[700px] text-lg font-semibold leading-relaxed md:text-2xl"
            style={{
              color: HERO_THEME.text,
            }}
          >
            Every internship added another layer to my
            <span
              style={{
                color: HERO_THEME.secondary,
              }}
            >
              {' '}frontend development journey.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  )
}

export default Cognifyz