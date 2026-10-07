import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  MapPin,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'

gsap.registerPlugin(ScrollTrigger)


/* =========================================================
   COLOR HELPER
========================================================= */

const rgba = (hex: string, alpha: number) => {
  const clean = hex.replace('#', '')

  const value = parseInt(clean, 16)

  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}


/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    number: '01',
    company: 'ACCENTURE',
    role: 'CUSTOM SOFTWARE ENGINEER',
    period: '2026',
    type: 'PROFESSIONAL',
    route: '/accenture',

    joiningDate: 'YOUR JOINING DATE',
    location: 'Bhubaneswar',
    mainSkill: 'Mobile App Developer',

    description:
      'Professional software engineering experience in an enterprise environment.',

    tech: [
      'Software Engineering',
      'Mobile Development',
      'React Native',
      'Problem Solving',
    ],

    accent: HERO_THEME.primary,
  },

  {
    number: '02',
    company: 'COGNIFYZ',
    role: 'FRONTEND DEVELOPER INTERN',
    period: '2025',
    type: 'INTERNSHIP',
    route: '/cognifyz',

    mode: 'REMOTE',
    startDate: '15/05/2025',
    endDate: '15/06/2025',

    description:
      'Worked on frontend development tasks, responsive interfaces and interactive web experiences while improving practical development skills.',

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
    ],

    accent: HERO_THEME.secondary,
  },

  {
    number: '03',
    company: 'SKILLCRAFT',
    role: 'WEB DEVELOPMENT INTERN',
    period: '2025',
    type: 'INTERNSHIP',
    route: '/skillcraft',

    mode: 'REMOTE',
    startDate: '15/06/2025',
    endDate: '15/07/2025',

    description:
      'Built frontend interfaces and implemented responsive web layouts while working with modern web development practices.',

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
    ],

    accent: HERO_THEME.accent,
  },
]


/* =========================================================
   EXPERIENCE
========================================================= */

const Experience = () => {
  const section = useRef<HTMLElement>(null)
  const navigate = useNavigate()


  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    if (!section.current) return

    const ctx = gsap.context(() => {

      /* HEADING */

      gsap.fromTo(
        '.experience-heading',

        {
          opacity: 0,
          y: 40,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: section.current,
            start: 'top 80%',
            once: true,
          },
        }
      )


      /* CARDS */

      gsap.fromTo(
        '.experience-orbit',

        {
          opacity: 0,
          scale: 0.94,
          y: 40,
        },

        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: '.experience-grid',
            start: 'top 82%',
            once: true,
          },
        }
      )


      /* YEARS */

      gsap.fromTo(
        '.experience-year',

        {
          opacity: 0,
          x: -30,
        },

        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: '.experience-grid',
            start: 'top 78%',
            once: true,
          },
        }
      )


      /* DIVIDER */

      gsap.fromTo(
        '.experience-line',

        {
          scaleX: 0,
        },

        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.inOut',
          transformOrigin: 'left center',

          scrollTrigger: {
            trigger: section.current,
            start: 'top 75%',
            once: true,
          },
        }
      )

    }, section)

    return () => {
      ctx.revert()
    }
  }, [])


  return (
    <section
      ref={section}
      id="experience"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        py-8
        text-white
      "
      style={{
        backgroundColor:
          HERO_THEME.background,
      }}
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
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

            backgroundSize:
              '80px 80px',
          }}
        />


        {/* RED GLOW */}

        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            blur-[140px]
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
            bottom-[5%]
            right-[-12%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-[160px]
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
            background: `
              radial-gradient(
                ellipse at center,
                transparent 18%,
                rgba(0,0,0,0.78) 100%
              )
            `,
          }}
        />


        {/* TOP FADE */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[180px]
          "
          style={{
            background: `
              linear-gradient(
                to bottom,
                ${HERO_THEME.background},
                transparent
              )
            `,
          }}
        />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          px-[30px]
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="experience-heading">

          <div
            className="
              mb-3
              mt-10
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-[2px]
                w-8
              "
              style={{
                background:
                  `linear-gradient(
                    to right,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.accent}
                  )`,
              }}
            />

            <span
              className="
                mt-0
                font-mono
                text-[8px]
                font-bold
                tracking-[.25em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              EXPERIENCE / 03
            </span>

          </div>


          <div
            className="
              flex
              flex-col
              justify-between
              gap-4
              lg:flex-row
              lg:items-end
            "
          >

            <h2
              className="
                text-[20px]
                font-light
                leading-[.9]
                tracking-[-.055em]
                sm:text-[30px]
                md:text-[40px]
              "
            >

              THE PLACES

              <br />

              <span
                style={{
                  color:
                    'rgba(255,255,255,0.16)',
                }}
              >
                THAT
              </span>{' '}

              <span
                className="
                  bg-clip-text
                  text-transparent
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      90deg,
                      ${HERO_THEME.primary},
                      ${HERO_THEME.secondary},
                      ${HERO_THEME.accent}
                    )
                  `,
                }}
              >
                SHAPED ME.
              </span>

            </h2>


            <p
              className="
                max-w-[300px]
                text-[10px]
                leading-5
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              Every experience added a new layer —
              from writing my first interfaces to
              working with real software engineering
              workflows.
            </p>

          </div>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            className="
              experience-line
              mt-3
              mb-6
              h-px
              w-full
            "
            style={{
              background: `
                linear-gradient(
                  90deg,
                  ${HERO_THEME.primary},
                  ${HERO_THEME.secondary},
                  rgba(255,255,255,0.08),
                  ${HERO_THEME.accent}
                )
              `,
            }}
          />

        </div>


        {/* ===================================================
            EXPERIENCE COMPOSITION
        =================================================== */}

        <div
          className="
            experience-grid
            relative
            mt-3
            w-full
          "
        >

          {/* =================================================
              OUTER ORBIT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[520px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              lg:block
            "
            style={{
              border:
                `1px solid rgba(255,255,255,0.025)`,
            }}
          />


          {/* =================================================
              INNER ORBIT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              lg:block
            "
            style={{
              border:
                `1px solid ${rgba(
                  HERO_THEME.primary,
                  0.06
                )}`,
            }}
          />


          {/* =================================================
              CENTER CROSS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[1px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              lg:block
            "
            style={{
              background:
                `linear-gradient(
                  90deg,
                  transparent,
                  ${rgba(
                    HERO_THEME.primary,
                    0.16
                  )},
                  transparent
                )`,
            }}
          />


          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              relative
              grid
              gap-5
              lg:grid-cols-3
              lg:gap-x-12
            "
          >

            {experiences.map(
              (experience, index) => (

               <motion.article
  key={experience.number}
onClick={() => {
  if (experience.route) {
    navigate(experience.route)
  }
}}
  className={`
    experience-orbit
    group
    relative
    cursor-pointer
    overflow-hidden
    rounded-none
    border
    p-5
    backdrop-blur-xl

    ${
      index === 1
        ? 'lg:-translate-y-8'
        : index === 2
          ? 'lg:translate-y-8'
          : ''
    }
  `}

                  style={{
                    borderColor:
                      rgba(
                        experience.accent,
                        0.18
                      ),

                    background:
                      `linear-gradient(
                        145deg,
                        ${rgba(
                          experience.accent,
                          0.035
                        )},
                        rgba(255,255,255,0.008)
                      )`,

                    boxShadow:
                      `inset 0 0 35px ${rgba(
                        experience.accent,
                        0.025
                      )}`,
                  }}

                  whileHover={{
                    y:
                      index === 1
                        ? -14
                        : -7,

                    scale: 1.015,
                  }}

                  transition={{
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                >

                  {/* =================================================
                      GLOW
                  ================================================= */}

                  <motion.div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      blur-[70px]
                    "

                    initial={{
                      opacity: 0.05,
                    }}

                    whileHover={{
                      opacity: 0.18,
                      scale: 1.2,
                    }}

                    transition={{
                      duration: 0.5,
                    }}

                    style={{
                      backgroundColor:
                        experience.accent,
                    }}
                  />


                  {/* =================================================
                      TOP EDGE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[2px]
                    "
                    style={{
                      background: `
                        linear-gradient(
                          90deg,
                          ${experience.accent},
                          ${rgba(
                            HERO_THEME.accent,
                            0.2
                          )},
                          transparent
                        )
                      `,
                    }}
                  />


                  {/* =================================================
                      TOP LINE
                  ================================================= */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >

                      {/* ICON */}

                      <div
                        className="
                          relative
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          border
                        "
                        style={{
                          color:
                            experience.accent,

                          borderColor:
                            rgba(
                              experience.accent,
                              0.28
                            ),

                          backgroundColor:
                            rgba(
                              experience.accent,
                              0.055
                            ),

                          boxShadow:
                            `0 0 15px ${rgba(
                              experience.accent,
                              0.08
                            )}`,
                        }}
                      >

                        {index === 0 ? (
                          <BriefcaseBusiness
                            size={15}
                          />
                        ) : (
                          <Code2
                            size={15}
                          />
                        )}


                        <span
                          className="
                            absolute
                            left-0
                            top-0
                            h-[2px]
                            w-3
                          "
                          style={{
                            backgroundColor:
                              experience.accent,
                          }}
                        />

                      </div>


                      {/* TYPE */}

                      <span
                        className="
                          font-mono
                          text-[7px]
                          tracking-[.2em]
                        "
                        style={{
                          color:
                            experience.accent,
                        }}
                      >
                        {experience.type}
                      </span>

                    </div>


                    {/* NUMBER */}

                    <span
                      className="
                        font-mono
                        text-[8px]
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      {experience.number}
                    </span>

                  </div>


                  {/* =================================================
                      YEAR
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-8
                      overflow-hidden
                    "
                  >

                    <span
                      className="
                        experience-year
                        block
                        font-mono
                        text-[54px]
                        font-light
                        leading-none
                        tracking-[-.07em]
                      "
                      style={{
                        color:
                          experience.accent,

                        opacity: 0.2,
                      }}
                    >
                      {experience.period}
                    </span>


                    <div
                      className="
                        absolute
                        bottom-1
                        left-0
                        h-[2px]
                        w-12
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                      style={{
                        background:
                          `linear-gradient(
                            90deg,
                            ${experience.accent},
                            ${HERO_THEME.accent}
                          )`,

                        boxShadow:
                          `0 0 10px ${rgba(
                            experience.accent,
                            0.4
                          )}`,
                      }}
                    />

                  </div>


                  {/* =================================================
                      COMPANY
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-6
                    "
                  >

                    <h3
                      className="
                        text-[25px]
                        font-light
                        tracking-[-.04em]
                      "
                    >
                      {experience.company}
                    </h3>


                    <p
                      className="
                        mt-1
                        font-mono
                        text-[7px]
                        tracking-[.17em]
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      {experience.role}
                    </p>

                  </div>

                  {/* =================================================
    EXPERIENCE DETAILS
================================================= */}

<div className="relative mt-5 space-y-2.5">

  {experience.type === 'PROFESSIONAL' ? (
    <>
      {/* JOINING DATE */}
      <div className="flex items-center gap-2">
        <CalendarDays
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          JOINED / {experience.joiningDate}
        </span>
      </div>

      {/* LOCATION */}
      <div className="flex items-center gap-2">
        <MapPin
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          {experience.location}
        </span>
      </div>

      {/* MAIN SKILL */}
      <div className="flex items-center gap-2">
        <Code2
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          {experience.mainSkill}
        </span>
      </div>
    </>
  ) : (
    <>
      {/* INTERNSHIP MODE */}
      <div className="flex items-center gap-2">
        <BriefcaseBusiness
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          MODE / {experience.mode}
        </span>
      </div>

      {/* START DATE */}
      <div className="flex items-center gap-2">
        <CalendarDays
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          START / {experience.startDate}
        </span>
      </div>

      {/* END DATE */}
      <div className="flex items-center gap-2">
        <CalendarDays
          size={12}
          style={{
            color: experience.accent,
          }}
        />

        <span
          className="font-mono text-[7px] tracking-[0.12em]"
          style={{
            color: HERO_THEME.textMuted,
          }}
        >
          END / {experience.endDate}
        </span>
      </div>
    </>
  )}

</div>


                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      relative
                      mt-5
                      text-[10px]
                      leading-5
                    "
                    style={{
                      color:
                        HERO_THEME.textMuted,
                    }}
                  >
                    {experience.description}
                  </p>


                  {/* =================================================
                      TECH
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-5
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >

                    {experience.tech.map(
                      (tech) => (

                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            px-2.5
                            py-1
                            font-mono
                            text-[6px]
                            tracking-[.08em]
                            transition-all
                            duration-300
                          "
                          style={{
                            borderColor:
                              rgba(
                                experience.accent,
                                0.12
                              ),

                            backgroundColor:
                              rgba(
                                experience.accent,
                                0.025
                              ),

                            color:
                              HERO_THEME.textDim,
                          }}
                        >
                          {tech}
                        </span>

                      )
                    )}

                  </div>


                  {/* =================================================
                      BOTTOM
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      pt-4
                    "
                    style={{
                      borderColor:
                        'rgba(255,255,255,0.06)',
                    }}
                  >

                    <span
                      className="
                        font-mono
                        text-[7px]
                        tracking-[.18em]
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      EXPERIENCE / {experience.number}
                    </span>


                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.1,
                      }}
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-colors
                      "
                      style={{
                        borderColor:
                          rgba(
                            experience.accent,
                            0.18
                          ),

                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      <ArrowUpRight
                        size={13}
                      />
                    </motion.div>

                  </div>


                  {/* =================================================
                      CORNER MARK
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-12
                      w-12
                      opacity-30
                    "
                    style={{
                      borderRight:
                        `1px solid ${experience.accent}`,

                      borderBottom:
                        `1px solid ${experience.accent}`,
                    }}
                  />


                  {/* =================================================
                      LEFT ACCENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-10
                      w-[2px]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        `linear-gradient(
                          to top,
                          ${experience.accent},
                          transparent
                        )`,
                    }}
                  />

                </motion.article>

              )
            )}

          </div>

        </div>


        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}

          className="
            mt-10
            flex
            w-full
            flex-col
            justify-between
            gap-4
            border-t
            pt-5
            md:flex-row
            md:items-center
          "
          style={{
            borderColor:
              'rgba(255,255,255,0.06)',
          }}
        >

          {/* LEFT */}

          <div>

            <p
              className="
                font-mono
                text-[8px]
                font-bold
                tracking-[.22em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              STILL BUILDING
            </p>


            <p
              className="
                mt-1
                text-[10px]
              "
              style={{
                color:
                  HERO_THEME.textDim,
              }}
            >
              The journey continues with every
              project, challenge and idea.
            </p>

          </div>


          {/* RIGHT */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
              "
              style={{
                backgroundColor:
                  HERO_THEME.accent,

                boxShadow:
                  `0 0 8px ${HERO_THEME.accent}`,
              }}
            />

            <span
              className="
                font-mono
                text-[7px]
                tracking-[.18em]
              "
              style={{
                color:
                  HERO_THEME.textDim,
              }}
            >
              OPEN TO OPPORTUNITIES
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  )
}


export default Experience