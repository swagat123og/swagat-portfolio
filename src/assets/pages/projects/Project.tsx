import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'

gsap.registerPlugin(ScrollTrigger)


/* =========================================================
   COLOR HELPER
========================================================= */

const rgba = (
  hex: string,
  alpha: number
) => {
  const clean = hex.replace('#', '')

  const value = parseInt(clean, 16)

  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    number: '01',
    category: 'FULL STACK',
    title: 'Zomato 2.0',

    description:
      'A full-stack food delivery experience combining food ordering with an Instagram-style food discovery system.',

    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
    ],

    accent: HERO_THEME.primary,

    type: 'WEB APP',
  },

  {
    number: '02',
    category: 'MOBILE APP',
    title: 'My Shoppy',

    description:
      'A modern shopping application with categories, product details, favorites, cart management and checkout flow.',

    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Axios',
    ],

    accent: HERO_THEME.secondary,

    type: 'MOBILE',
  },

 {
  number: '03',
  category: 'WEB DEVELOPMENT',
  title: 'Crypto Dashboard',

  description:
    'A real-time cryptocurrency dashboard designed around data visualization, market information and clean UI.',

  tech: [
    'React',
    'API',
    'Charts',
    'Tailwind',
  ],

  accent: HERO_THEME.accent,

  type: 'DASHBOARD',

  url: 'https://cryptoplace-ashen-five.vercel.app/',
},

  {
    number: '04',
    category: 'CREATIVE DEVELOPMENT',
    title: 'Creative UI',

    description:
      'An experimental interface focused on cinematic transitions, interactive elements and modern motion design.',

    tech: [
      'React',
      'GSAP',
      'Framer Motion',
      'Three.js',
    ],

    accent: HERO_THEME.primaryDark,

    type: 'EXPERIMENT',
  },

  {
    number: '05',
    category: 'WEB DEVELOPMENT',
    title: 'Netflix Clone',

    description:
      'A responsive streaming interface inspired by modern OTT platforms with movie browsing and dynamic content.',

    tech: [
      'React',
      'API',
      'CSS',
      'Vite',
    ],

    accent: HERO_THEME.secondary,

    type: 'WEB APP',
  },
]


/* =========================================================
   PROJECT SECTION
========================================================= */

const Project = () => {
  const section =
    useRef<HTMLElement>(null)

  const heading =
    useRef<HTMLDivElement>(null)

  const featured =
    useRef<HTMLDivElement>(null)

  const grid =
    useRef<HTMLDivElement>(null)


  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* HEADING */

      gsap.fromTo(
        heading.current,

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
          },
        }
      )


      /* FEATURED */

      gsap.fromTo(
        featured.current,

        {
          opacity: 0,
          y: 45,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: featured.current,
            start: 'top 82%',
          },
        }
      )


      /* PROJECT CARDS */

      gsap.fromTo(
        '.project-card',

        {
          opacity: 0,
          y: 35,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: grid.current,
            start: 'top 85%',
          },
        }
      )

    }, section)

    return () => ctx.revert()
  }, [])


  return (
    <section
      ref={section}
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        py-12
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


        {/* RED ATMOSPHERE */}

        <div
          className="
            absolute
            left-[-15%]
            top-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            blur-[140px]
          "
          style={{
            backgroundColor:
              HERO_THEME.glowPrimary,
          }}
        />


        {/* ORANGE ATMOSPHERE */}

        <div
          className="
            absolute
            bottom-[5%]
            right-[-15%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-[150px]
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

        <div ref={heading}>

          <div
            className="
              mb-3
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
                background: `
                  linear-gradient(
                    90deg,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.accent}
                  )
                `,
              }}
            />

            <span
              className="
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
              PROJECTS / 04
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
                text-[40px]
                font-light
                leading-[.9]
                tracking-[-.055em]
                sm:text-[50px]
                md:text-[60px]
              "
            >

              SELECTED

              <br />

              <span
                style={{
                  color:
                    'rgba(255,255,255,0.16)',
                }}
              >
                WORK
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
                .
              </span>

            </h2>


            <p
              className="
                max-w-[310px]
                text-[10px]
                leading-5
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              A selection of applications,
              interfaces and experiments built
              with modern technologies and
              thoughtful interaction.
            </p>

          </div>


          {/* DIVIDER */}

          <div
            className="
              mt-6
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
            FEATURED PROJECT
        =================================================== */}

        <motion.div
          ref={featured}

          whileHover={{
            y: -4,
          }}

          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}

          className="
            group
            relative
            mt-6
            overflow-hidden
            rounded-2xl
            border
            backdrop-blur-xl
          "

          style={{
            borderColor:
              rgba(
                projects[0].accent,
                0.18
              ),

            background:
              `linear-gradient(
                135deg,
                ${rgba(
                  projects[0].accent,
                  0.035
                )},
                rgba(255,255,255,0.008)
              )`,
          }}
        >

          {/* FEATURED TOP ACCENT */}

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
                  ${projects[0].accent},
                  ${HERO_THEME.secondary},
                  transparent
                )
              `,
            }}
          />


          <div
            className="
              grid
              lg:grid-cols-[1.15fr_.85fr]
            "
          >

            {/* =================================================
                VISUAL
            ================================================= */}

            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden
                lg:min-h-[350px]
              "
              style={{
                background:
                  `linear-gradient(
                    135deg,
                    ${rgba(
                      HERO_THEME.primaryDark,
                      0.10
                    )},
                    ${HERO_THEME.background}
                  )`,
              }}
            >

              {/* GLOW */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  blur-[80px]
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
                style={{
                  backgroundColor:
                    projects[0].accent,

                  opacity: 0.09,
                }}
              />


              {/* =================================================
                  BROWSER
              ================================================= */}

              <div
                className="
                  absolute
                  left-[12%]
                  right-[12%]
                  top-[18%]
                  overflow-hidden
                  rounded-xl
                  border
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.09)',

                  backgroundColor:
                    '#080808',

                  boxShadow:
                    '0 20px 70px rgba(0,0,0,.5)',
                }}
              >

                {/* BROWSER BAR */}

                <div
                  className="
                    flex
                    h-7
                    items-center
                    gap-1.5
                    border-b
                    px-3
                  "
                  style={{
                    borderColor:
                      'rgba(255,255,255,0.06)',
                  }}
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                    "
                    style={{
                      backgroundColor:
                        rgba(
                          projects[0].accent,
                          0.7
                        ),
                    }}
                  />

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                    "
                    style={{
                      backgroundColor:
                        'rgba(255,255,255,0.10)',
                    }}
                  />

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                    "
                    style={{
                      backgroundColor:
                        'rgba(255,255,255,0.10)',
                    }}
                  />

                </div>


                {/* BROWSER CONTENT */}

                <div
                  className="
                    grid
                    grid-cols-[.35fr_1fr]
                    gap-2
                    p-3
                  "
                >

                  <div
                    className="
                      rounded-lg
                    "
                    style={{
                      backgroundColor:
                        rgba(
                          projects[0].accent,
                          0.025
                        ),
                    }}
                  />


                  <div className="space-y-2">

                    <div
                      className="
                        h-12
                        rounded-lg
                      "
                      style={{
                        backgroundColor:
                          rgba(
                            projects[0].accent,
                            0.07
                          ),
                      }}
                    />


                    <div
                      className="
                        grid
                        grid-cols-3
                        gap-2
                      "
                    >

                      <div
                        className="
                          h-16
                          rounded-lg
                        "
                        style={{
                          backgroundColor:
                            'rgba(255,255,255,0.035)',
                        }}
                      />

                      <div
                        className="
                          h-16
                          rounded-lg
                        "
                        style={{
                          backgroundColor:
                            'rgba(255,255,255,0.025)',
                        }}
                      />

                      <div
                        className="
                          h-16
                          rounded-lg
                        "
                        style={{
                          backgroundColor:
                            'rgba(255,255,255,0.025)',
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* LABEL */}

              <span
                className="
                  absolute
                  left-5
                  top-5
                  font-mono
                  text-[8px]
                  tracking-[.2em]
                "
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                FEATURED / 01
              </span>


              <span
                className="
                  absolute
                  bottom-5
                  right-5
                  font-mono
                  text-[8px]
                  tracking-[.2em]
                "
                style={{
                  color:
                    rgba(
                      projects[0].accent,
                      0.65
                    ),
                }}
              >
                FULL STACK / EXPERIENCE
              </span>

            </div>


            {/* =================================================
                FEATURED CONTENT
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-5
                md:p-7
              "
            >

              <div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[.22em]
                    "
                    style={{
                      color:
                        projects[0].accent,
                    }}
                  >
                    {projects[0].category}
                  </span>


                  <span
                    className="
                      font-mono
                      text-[9px]
                    "
                    style={{
                      color:
                        HERO_THEME.textDim,
                    }}
                  >
                    {projects[0].number}
                  </span>

                </div>


                <h3
                  className="
                    mt-4
                    text-[27px]
                    font-light
                    leading-[1.05]
                    tracking-[-.035em]
                    md:text-[34px]
                  "
                >
                  {projects[0].title}
                </h3>


                <p
                  className="
                    mt-3
                    max-w-[460px]
                    text-[10px]
                    leading-5
                  "
                  style={{
                    color:
                      HERO_THEME.textMuted,
                  }}
                >
                  {projects[0].description}
                </p>


                {/* TECH */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-1.5
                  "
                >

                  {projects[0].tech.map(
                    (tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          px-2.5
                          py-1
                          font-mono
                          text-[7px]
                          tracking-[.08em]
                        "
                        style={{
                          borderColor:
                            rgba(
                              projects[0].accent,
                              0.14
                            ),

                          backgroundColor:
                            rgba(
                              projects[0].accent,
                              0.025
                            ),

                          color:
                            HERO_THEME.textMuted,
                        }}
                      >
                        {tech}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* BOTTOM */}

              <div
                className="
                  mt-7
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
                  CASE STUDY / 2026
                </span>


                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}

                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                  "

                  style={{
                    borderColor:
                      rgba(
                        projects[0].accent,
                        0.3
                      ),

                    color:
                      projects[0].accent,

                    backgroundColor:
                      rgba(
                        projects[0].accent,
                        0.035
                      ),
                  }}
                >
                  <ArrowUpRight
                    size={15}
                  />
                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            PROJECT GRID
        =================================================== */}

        <div
          ref={grid}
          className="
            mt-3
            grid
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {projects
            .slice(1)
            .map((project) => (

<motion.article
  key={project.number}
  onClick={() => {
    if (project.url) {
      window.open(
        project.url,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }}
  className="
    project-card
    group
    relative
    cursor-pointer
    overflow-hidden
    rounded-xl
    border
    p-4
  "

                style={{
                  borderColor:
                    rgba(
                      project.accent,
                      0.16
                    ),

                  background:
                    `linear-gradient(
                      145deg,
                      ${rgba(
                        project.accent,
                        0.025
                      )},
                      rgba(255,255,255,0.008)
                    )`,
                }}
              >

                {/* TOP ACCENT */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    opacity-60
                  "
                  style={{
                    background: `
                      linear-gradient(
                        90deg,
                        ${project.accent},
                        transparent
                      )
                    `,
                  }}
                />


                {/* GLOW */}

                <div
                  className="
                    absolute
                    -right-14
                    -top-14
                    h-32
                    w-32
                    rounded-full
                    opacity-10
                    blur-[50px]
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:opacity-25
                  "
                  style={{
                    backgroundColor:
                      project.accent,
                  }}
                />


                <div
                  className="
                    relative
                    flex
                    min-h-[225px]
                    flex-col
                    justify-between
                  "
                >

                  <div>

                    {/* CATEGORY */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          font-mono
                          text-[7px]
                          tracking-[.2em]
                        "
                        style={{
                          color:
                            project.accent,
                        }}
                      >
                        {project.category}
                      </span>


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
                        {project.number}
                      </span>

                    </div>


                    {/* MINI VISUAL */}

                    <div
                      className="
                        relative
                        mt-4
                        flex
                        h-[90px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-lg
                        border
                      "
                      style={{
                        borderColor:
                          'rgba(255,255,255,0.05)',

                        backgroundColor:
                          'rgba(0,0,0,0.25)',
                      }}
                    >

                      <div
                        className="
                          h-12
                          w-12
                          rotate-45
                          rounded-xl
                          border
                          transition-transform
                          duration-700
                          group-hover:rotate-[55deg]
                          group-hover:scale-110
                        "
                        style={{
                          borderColor:
                            rgba(
                              project.accent,
                              0.32
                            ),

                          backgroundColor:
                            rgba(
                              project.accent,
                              0.05
                            ),

                          boxShadow:
                            `0 0 25px ${rgba(
                              project.accent,
                              0.08
                            )}`,
                        }}
                      />


                      <div
                        className="
                          absolute
                          h-2
                          w-2
                          rounded-full
                        "
                        style={{
                          backgroundColor:
                            project.accent,

                          boxShadow:
                            `0 0 18px ${project.accent}`,
                        }}
                      />

                    </div>


                    {/* TITLE */}

                    <h3
                      className="
                        mt-4
                        text-[17px]
                        font-light
                        leading-[1.1]
                        tracking-[-.025em]
                        transition-colors
                        duration-300
                      "
                      style={{
                        color:
                          HERO_THEME.textSoft,
                      }}
                    >
                      {project.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-2
                        line-clamp-3
                        text-[9px]
                        leading-4
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      {project.description}
                    </p>

                  </div>


                  <div>

                    {/* TECH */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-1
                      "
                    >

                      {project.tech
                        .slice(0, 3)
                        .map((tech) => (

                          <span
                            key={tech}
                            className="
                              rounded-full
                              border
                              px-2
                              py-1
                              font-mono
                              text-[6px]
                            "
                            style={{
                              borderColor:
                                rgba(
                                  project.accent,
                                  0.12
                                ),

                              backgroundColor:
                                rgba(
                                  project.accent,
                                  0.02
                                ),

                              color:
                                HERO_THEME.textDim,
                            }}
                          >
                            {tech}
                          </span>

                        ))}

                    </div>


                    {/* FOOTER */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        border-t
                        pt-3
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
                          tracking-[.15em]
                        "
                        style={{
                          color:
                            HERO_THEME.textDim,
                        }}
                      >
                        {project.type}
                      </span>


                      <ArrowUpRight
                        size={14}
                        className="
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                        style={{
                          color:
                            project.accent,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

        </div>


        {/* ===================================================
            BOTTOM CTA
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
            mt-7
            flex
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
              MORE IN THE LAB
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
              More experiments and projects
              are constantly being built.
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

            <motion.a
              href="#contact"

              whileHover={{
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                flex
                h-9
                items-center
                gap-2
                rounded-lg
                border
                px-4
                font-mono
                text-[7px]
                font-bold
                tracking-[.15em]
                text-white
                transition-all
              "

              style={{
                borderColor:
                  rgba(
                    HERO_THEME.primary,
                    0.3
                  ),

                backgroundColor:
                  rgba(
                    HERO_THEME.primary,
                    0.05
                  ),
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  rgba(
                    HERO_THEME.primary,
                    0.1
                  )
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  rgba(
                    HERO_THEME.primary,
                    0.05
                  )
              }}
            >
              START A PROJECT

              <ArrowUpRight
                size={13}
              />

            </motion.a>


            <motion.a
              href="#"

              whileHover={{
                scale: 1.02,
              }}

              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                transition-colors
              "

              style={{
                borderColor:
                  'rgba(255,255,255,0.08)',

                color:
                  HERO_THEME.textDim,
              }}
            >
              <ExternalLink
                size={13}
              />
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}


export default Project