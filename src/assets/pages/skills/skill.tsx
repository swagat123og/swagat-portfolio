import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
} from 'framer-motion'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  Code2,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Cloud,
  ArrowUpRight,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'

gsap.registerPlugin(ScrollTrigger)


/* =========================================================
   COLOR HELPERS
========================================================= */

const hexToRgba = (
  hex: string,
  alpha: number
) => {
  const clean = hex.replace('#', '')

  const bigint = parseInt(clean, 16)

  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}


/* =========================================================
   SKILL TYPE
========================================================= */

type Skill = {
  name: string
  level: number
  icon: string
  color: string
}


/* =========================================================
   GROUP TYPE
========================================================= */

type Group = {
  id: string
  number: string
  title: string
  subtitle: string
  icon: typeof Code2
  color: string
  description: string
  skills: Skill[]
}


/* =========================================================
   THEME SKILL COLORS
   All colors come from Theme.tsx
========================================================= */

const SKILL_COLORS = {
  red: HERO_THEME.primary,
  orange: HERO_THEME.secondary,
  gold: HERO_THEME.accent,
  darkRed: HERO_THEME.primaryDark,
  white: HERO_THEME.text,
  soft: HERO_THEME.textSoft,
  muted: HERO_THEME.textMuted,
  dim: HERO_THEME.textDim,
}


/* =========================================================
   SKILL GROUPS
========================================================= */

const groups: Group[] = [
  {
    id: 'frontend',

    number: '01',

    title: 'Frontend',

    subtitle: 'INTERFACE / EXPERIENCE',

    icon: Code2,

    color: SKILL_COLORS.red,

    description:
      'Building responsive interfaces with strong interaction, motion, performance and clean component architecture.',

    skills: [
      {
        name: 'React',
        level: 92,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: SKILL_COLORS.red,
      },

      {
        name: 'JavaScript',
        level: 88,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'TypeScript',
        level: 86,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'HTML',
        level: 94,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: SKILL_COLORS.darkRed,
      },

      {
        name: 'CSS',
        level: 94,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'Tailwind CSS',
        level: 91,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'GSAP',
        level: 84,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'Vite',
        level: 88,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        color: SKILL_COLORS.red,
      },
    ],
  },


  /* =======================================================
     MOBILE
  ======================================================= */

  {
    id: 'mobile',

    number: '02',

    title: 'Mobile',

    subtitle: 'REACT NATIVE / APPS',

    icon: Smartphone,

    color: SKILL_COLORS.orange,

    description:
      'Creating smooth cross-platform mobile experiences with reusable components, navigation and practical application architecture.',

    skills: [
      {
        name: 'React Native',
        level: 90,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: SKILL_COLORS.red,
      },

      {
        name: 'Expo',
        level: 88,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        color: SKILL_COLORS.white,
      },

      {
        name: 'TypeScript',
        level: 86,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'React Navigation',
        level: 85,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'Axios',
        level: 82,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: SKILL_COLORS.red,
      },

      {
        name: 'AsyncStorage',
        level: 80,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: SKILL_COLORS.darkRed,
      },

      {
        name: 'Responsive UI',
        level: 92,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'API Integration',
        level: 86,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: SKILL_COLORS.orange,
      },
    ],
  },


  /* =======================================================
     BACKEND
  ======================================================= */

  {
    id: 'backend',

    number: '03',

    title: 'Backend',

    subtitle: 'API / DATA / SYSTEMS',

    icon: Server,

    color: SKILL_COLORS.gold,

    description:
      'Developing REST APIs and data-driven applications with practical backend tools, databases and deployment workflows.',

    skills: [
      {
        name: 'Node.js',
        level: 86,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'Express',
        level: 84,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        color: SKILL_COLORS.white,
      },

      {
        name: 'MongoDB',
        level: 84,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'MySQL',
        level: 82,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        color: SKILL_COLORS.orange,
      },

      {
        name: 'REST API',
        level: 88,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: SKILL_COLORS.red,
      },

      {
        name: 'Java',
        level: 80,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: SKILL_COLORS.darkRed,
      },

      {
        name: 'Python',
        level: 78,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: SKILL_COLORS.gold,
      },

      {
        name: 'Git / GitHub',
        level: 90,
        icon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: SKILL_COLORS.white,
      },
    ],
  },
]


/* =========================================================
   FLOATING ICONS
========================================================= */

const floating = [
  {
    icon: Code2,
    x: '8%',
    y: '18%',
    color: SKILL_COLORS.red,
  },

  {
    icon: Database,
    x: '88%',
    y: '22%',
    color: SKILL_COLORS.gold,
  },

  {
    icon: GitBranch,
    x: '10%',
    y: '72%',
    color: SKILL_COLORS.orange,
  },

  {
    icon: Cloud,
    x: '87%',
    y: '73%',
    color: SKILL_COLORS.darkRed,
  },
]


/* =========================================================
   SKILLS SECTION
========================================================= */

const Skills = () => {
  const section =
    useRef<HTMLElement>(null)

  const heading =
    useRef<HTMLDivElement>(null)

  const grid =
    useRef<HTMLDivElement>(null)

  const line =
    useRef<HTMLDivElement>(null)

  const [active, setActive] = useState(0)


  /* =======================================================
     GSAP
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* HEADING */

      gsap.fromTo(
        heading.current,

        {
          opacity: 0,
          y: 45,
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


      /* SKILL CARDS */

      gsap.fromTo(
        '.skill-card',

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


      /* DIVIDER */

      gsap.fromTo(
        line.current,

        {
          scaleX: 0,
        },

        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.inOut',
          transformOrigin: 'left center',

          scrollTrigger: {
            trigger: section.current,
            start: 'top 75%',
          },
        }
      )

    }, section)

    return () => ctx.revert()
  }, [])


  const group = groups[active]

  const Icon = group.icon


  return (
    <section
      ref={section}
      id="skills"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        px-[15px]
        pt-8
        pb-8
        text-white
        sm:px-[20px]
        lg:px-[30px]
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
            top-[10%]
            h-[480px]
            w-[480px]
            rounded-full
            blur-[150px]
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
            bottom-[-10%]
            right-[-15%]
            h-[520px]
            w-[520px]
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
                transparent 20%,
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


        {/* FLOATING ICONS */}

        {floating.map(
          (
            {
              icon: FloatIcon,
              x,
              y,
              color,
            },
            i
          ) => (

            <motion.div
              key={i}
              className="
                absolute
                hidden
                md:block
              "
              style={{
                left: x,
                top: y,
                color,
                opacity: 0.07,
              }}

              animate={{
                y: [0, -10, 0],
                rotate: [0, 3, 0],
              }}

              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            >

              <FloatIcon
                size={55}
                strokeWidth={0.8}
              />

            </motion.div>

          )
        )}

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-1
          flex-col
        "
      >

        {/* ===================================================
            HEADING
        =================================================== */}

        <div ref={heading}>

          <div
            className="
              mb-2
              mt-8
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
              SKILLS / 02
            </span>

          </div>


          <div
            className="
              flex
              flex-col
              justify-between
              gap-3
              lg:flex-row
              lg:items-end
            "
          >

            <h2
              className="
                text-[38px]
                font-light
                leading-[.88]
                tracking-[-.06em]
                sm:text-[50px]
                md:text-[64px]
              "
            >

              WHAT I

              <br />

              <span
                style={{
                  color:
                    'rgba(255,255,255,0.16)',
                }}
              >
                CAN
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
                BUILD.
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
              A combination of frontend,
              mobile and backend skills used
              to turn ideas into polished
              digital products.
            </p>

          </div>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            ref={line}
            className="
              mt-5
              mb-5
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
            CATEGORY TABS
        =================================================== */}

        <div
          className="
            mt-2
            flex
            flex-wrap
            gap-2
          "
        >

          {groups.map((g, i) => (

            <button
              key={g.id}
              onClick={() => setActive(i)}
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                border
                px-3
                py-1.5
                font-mono
                text-[8px]
                tracking-[.15em]
                transition-all
                duration-300
              "
              style={{
                borderColor:
                  active === i
                    ? hexToRgba(g.color, 0.45)
                    : 'rgba(255,255,255,0.07)',

                backgroundColor:
                  active === i
                    ? hexToRgba(g.color, 0.07)
                    : 'rgba(255,255,255,0.015)',

                color:
                  active === i
                    ? HERO_THEME.text
                    : HERO_THEME.textDim,
              }}
            >

              {/* ACTIVE TOP EDGE */}

              {active === i && (
                <motion.span
                  layoutId="skillTabLine"
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                  "
                  style={{
                    background:
                      `linear-gradient(
                        90deg,
                        ${g.color},
                        ${HERO_THEME.accent}
                      )`,
                  }}
                />
              )}


              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                "
                style={{
                  backgroundColor:
                    g.color,

                  boxShadow:
                    `0 0 8px ${g.color}`,
                }}
              />

              {g.number} / {g.title.toUpperCase()}

            </button>

          ))}

        </div>


        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          ref={grid}
          className="
            mt-3
            grid
            gap-2
            lg:grid-cols-[.78fr_1.22fr]
          "
        >

          {/* =================================================
              CATEGORY CARD
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={group.id}

              initial={{
                opacity: 0,
                x: -25,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: 25,
              }}

              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}

              className="
                skill-card
                relative
                min-h-[245px]
                overflow-hidden
                border
                p-4
                backdrop-blur-xl
                md:p-5
              "
              style={{
                borderColor:
                  hexToRgba(
                    group.color,
                    0.22
                  ),

                background:
                  `linear-gradient(
                    135deg,
                    ${hexToRgba(group.color, 0.035)},
                    rgba(255,255,255,0.012)
                  )`,

                boxShadow:
                  `inset 0 0 45px ${hexToRgba(
                    group.color,
                    0.035
                  )}`,
              }}
            >

              {/* =================================================
                  CATEGORY GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-60
                  w-60
                  rounded-full
                  blur-[80px]
                "
                style={{
                  backgroundColor:
                    group.color,

                  opacity: 0.12,
                }}
              />


              {/* =================================================
                  ANGULAR DECORATION
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-24
                  w-24
                "
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      transparent 47%,
                      ${group.color} 48%,
                      transparent 51%
                    )
                  `,

                  opacity: 0.3,
                }}
              />


              <div
                className="
                  relative
                  flex
                  h-full
                  flex-col
                "
              >

                {/* HEADER */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                    "
                    style={{
                      borderColor:
                        hexToRgba(
                          group.color,
                          0.3
                        ),

                      backgroundColor:
                        hexToRgba(
                          group.color,
                          0.06
                        ),

                      color:
                        group.color,

                      boxShadow:
                        `0 0 18px ${hexToRgba(
                          group.color,
                          0.12
                        )}`,
                    }}
                  >

                    <Icon
                      size={18}
                      strokeWidth={1.3}
                    />


                    {/* CORNER */}

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                        w-4
                      "
                      style={{
                        backgroundColor:
                          group.color,
                      }}
                    />

                  </div>


                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[.2em]
                    "
                    style={{
                      color:
                        HERO_THEME.textDim,
                    }}
                  >
                    {group.number} / 03
                  </span>

                </div>


                {/* TEXT */}

                <div className="mt-auto">

                  <p
                    className="
                      font-mono
                      text-[8px]
                      tracking-[.25em]
                    "
                    style={{
                      color:
                        group.color,
                    }}
                  >
                    {group.subtitle}
                  </p>


                  <h3
                    className="
                      mt-1
                      text-[27px]
                      font-light
                      leading-none
                      tracking-[-.05em]
                      md:text-[34px]
                    "
                  >
                    {group.title}
                  </h3>


                  <p
                    className="
                      mt-2
                      max-w-[430px]
                      text-[10px]
                      leading-5
                    "
                    style={{
                      color:
                        HERO_THEME.textMuted,
                    }}
                  >
                    {group.description}
                  </p>


                  {/* CORE STACK */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
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
                            ${group.color},
                            ${HERO_THEME.accent}
                          )`,

                        boxShadow:
                          `0 0 8px ${hexToRgba(
                            group.color,
                            0.5
                          )}`,
                      }}
                    />

                    <span
                      className="
                        font-mono
                        text-[7px]
                        tracking-[.2em]
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      CORE STACK
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              SKILLS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-1.5
              sm:grid-cols-2
            "
          >

            {group.skills.map(
              (skill, i) => (
                <SkillItem
                  key={`${group.id}-${skill.name}`}
                  skill={skill}
                  index={i}
                />
              )
            )}

          </div>

        </div>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            mt-6
            flex
            flex-col
            justify-between
            gap-3
            border-t
            pt-4
            md:flex-row
            md:items-center
          "
          style={{
            borderColor:
              'rgba(255,255,255,0.06)',
          }}
        >

          <div>

            <p
              className="
                font-mono
                text-[7px]
                tracking-[.25em]
              "
              style={{
                color:
                  HERO_THEME.textDim,
              }}
            >
              CURRENT FOCUS
            </p>


            <p
              className="
                mt-1
                text-[11px]
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              Building modern interfaces with
              motion and meaningful UX.
            </p>

          </div>


          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[7px]
              tracking-[.2em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >

            EXPLORE THE STACK

            <ArrowUpRight
              size={13}
              style={{
                color:
                  HERO_THEME.primary,
              }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}


/* =========================================================
   SKILL ITEM
========================================================= */

const SkillItem = ({
  skill,
  index,
}: {
  skill: Skill
  index: number
}) => {

  const ref =
    useRef<HTMLDivElement>(null)

  const visible = useInView(ref, {
    once: true,
    amount: 0.4,
  })


  return (
    <motion.div
      ref={ref}

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }

      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: 'easeOut',
      }}

      whileHover={{
        y: -3,
      }}

      className="
        skill-card
        group
        relative
        overflow-hidden
        rounded-none
        border
        p-3
        transition-all
        duration-300
      "

      style={{
        borderColor:
          hexToRgba(skill.color, 0.18),

        background:
          `linear-gradient(
            135deg,
            ${hexToRgba(skill.color, 0.025)},
            rgba(255,255,255,0.012)
          )`,
      }}
    >

      {/* ===================================================
          HOVER LINE
      =================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          transition-all
          duration-300
          group-hover:w-full
        "
        style={{
          background:
            `linear-gradient(
              90deg,
              ${skill.color},
              ${HERO_THEME.accent}
            )`,
        }}
      />


      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-2
        "
      >

        <div
          className="
            flex
            min-w-0
            items-center
            gap-2
          "
        >

          {/* ICON */}

          <div
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              bg-black/30
              transition-transform
              duration-300
              group-hover:scale-105
            "
            style={{
              borderColor:
                hexToRgba(
                  skill.color,
                  0.28
                ),

              backgroundColor:
                hexToRgba(
                  skill.color,
                  0.045
                ),

              boxShadow:
                `0 0 12px ${hexToRgba(
                  skill.color,
                  0.06
                )}`,
            }}
          >

            <img
              src={skill.icon}
              alt={skill.name}
              className="
                h-3.5
                w-3.5
                object-contain
              "
              loading="lazy"
            />

          </div>


          {/* NAME */}

          <span
            className="
              truncate
              text-[11px]
              font-medium
              transition-colors
              duration-300
              group-hover:text-white
            "
            style={{
              color:
                HERO_THEME.textMuted,
            }}
          >
            {skill.name}
          </span>

        </div>


        {/* LEVEL */}

        <span
          className="
            shrink-0
            font-mono
            text-[9px]
            font-medium
          "
          style={{
            color:
              skill.color,

            textShadow:
              `0 0 8px ${hexToRgba(
                skill.color,
                0.4
              )}`,
          }}
        >
          {skill.level}%
        </span>

      </div>


      {/* ===================================================
          PROGRESS BAR
      =================================================== */}

      <div
        className="
          mt-2
          h-[3px]
          overflow-hidden
          rounded-full
        "
        style={{
          backgroundColor:
            'rgba(255,255,255,0.06)',
        }}
      >

        <motion.div
          initial={{
            width: 0,
          }}

          animate={{
            width: visible
              ? `${skill.level}%`
              : 0,
          }}

          transition={{
            duration: 0.9,
            delay:
              0.1 + index * 0.04,
            ease: 'easeOut',
          }}

          className="
            h-full
            rounded-full
          "

          style={{
            background: `
              linear-gradient(
                90deg,
                ${skill.color},
                ${HERO_THEME.accent}
              )
            `,

            boxShadow:
              `0 0 8px ${hexToRgba(
                skill.color,
                0.45
              )}`,
          }}
        />

      </div>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <div
        className="
          mt-1
          flex
          items-center
          justify-between
        "
      >

        <span
          className="
            font-mono
            text-[6px]
            tracking-[.15em]
          "
          style={{
            color:
              HERO_THEME.textDim,
          }}
        >
          PROFICIENCY
        </span>


        <span
          className="
            h-1
            w-1
            rounded-full
          "
          style={{
            backgroundColor:
              skill.color,

            boxShadow:
              `0 0 6px ${skill.color}`,
          }}
        />

      </div>

    </motion.div>
  )
}


export default Skills