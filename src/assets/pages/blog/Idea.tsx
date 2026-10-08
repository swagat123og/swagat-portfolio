import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Code2,
  Lightbulb,
  Rocket,
  Smartphone,
  Sparkles,
  Globe,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { HERO_THEME } from '../Theme'

const upcomingIdeas = [
  {
    number: '01',
    title: 'AI POWERED DEVELOPER',
    description:
      'An intelligent developer platform designed to assist with coding, debugging, project generation and development workflows.',
    status: 'EXPLORING',
    category: 'AI / DEVELOPMENT',
    icon: Brain,
    technologies: ['AI', 'React', 'Node.js', 'Python'],
    accent: HERO_THEME.primary,
  },

  {
    number: '02',
    title: 'NEXT GEN MOBILE APP',
    description:
      'A modern mobile application focused on smooth interactions, meaningful animations and a premium user experience.',
    status: 'PLANNED',
    category: 'MOBILE DEVELOPMENT',
    icon: Smartphone,
    technologies: ['React Native', 'Expo', 'TypeScript'],
    accent: HERO_THEME.secondary,
  },

  {
    number: '03',
    title: '3D WEB EXPERIENCE',
    description:
      'An experimental web experience combining 3D environments, scroll-based storytelling and interactive elements.',
    status: 'RESEARCH',
    category: '3D / WEB',
    icon: Globe,
    technologies: ['Three.js', 'React', 'GSAP'],
    accent: HERO_THEME.accent,
  },

  {
    number: '04',
    title: 'SMART PRODUCTIVITY SYSTEM',
    description:
      'A productivity platform designed around intelligent workflows, automation and a highly focused user interface.',
    status: 'IDEA',
    category: 'PRODUCTIVITY',
    icon: Rocket,
    technologies: ['React', 'Node.js', 'MongoDB'],
    accent: HERO_THEME.primary,
  },

  {
    number: '05',
    title: 'INTERACTIVE PORTFOLIO 2.0',
    description:
      'A future version of this portfolio exploring deeper interactions, advanced animations and immersive storytelling.',
    status: 'PLANNED',
    category: 'EXPERIMENTAL WEB',
    icon: Sparkles,
    technologies: ['React', 'GSAP', 'Framer Motion', 'Three.js'],
    accent: HERO_THEME.secondary,
  },

  {
    number: '06',
    title: 'DEVELOPER TOOLKIT',
    description:
      'A collection of useful tools for developers covering productivity, API utilities, code helpers and project workflows.',
    status: 'IDEA',
    category: 'DEVELOPER TOOLS',
    icon: Code2,
    technologies: ['React', 'TypeScript', 'Node.js'],
    accent: HERO_THEME.accent,
  },
]

const Idea = () => {
  const navigate = useNavigate()

  const handleBack = () => {
  navigate('/')
  
  sessionStorage.setItem(
    'restoreBlogScroll',
    'true'
  )
}

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pb-24
        pt-[125px]
        text-white
        md:px-10
        lg:px-16
      "
      style={{
        backgroundColor: HERO_THEME.background,
      }}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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

        {/* RED GLOW */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            blur-[170px]
          "
          style={{
            backgroundColor: HERO_THEME.glowPrimary,
          }}
        />

        {/* ORANGE GLOW */}
        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[600px]
            w-[600px]
            rounded-full
            blur-[180px]
          "
          style={{
            backgroundColor: HERO_THEME.glowSecondary,
          }}
        />

        {/* CENTER DEPTH */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 15%,
                rgba(0,0,0,0.85) 100%
              )
            `,
          }}
        />

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* BACK BUTTON */}

        <motion.button
          type="button"
          onClick={handleBack}
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          whileHover={{
            x: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            flex
            items-center
            gap-3
            rounded-lg
            border
            px-4
            py-2.5
            font-mono
            text-[9px]
            font-semibold
            tracking-[0.18em]
            transition-all
            duration-300
          "
          style={{
            color: HERO_THEME.textMuted,
            borderColor: HERO_THEME.borderPrimary,
            backgroundColor: `${HERO_THEME.background}CC`,
          }}
        >
          <ArrowLeft
            size={14}
            style={{
              color: HERO_THEME.primary,
            }}
          />

          BACK TO BLOG
        </motion.button>


        {/* =================================================
            HERO
        ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
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
          className="mt-16 max-w-[900px]"
        >

          <div
            className="
              flex
              items-center
              gap-3
              font-mono
              text-[9px]
              font-semibold
              tracking-[0.35em]
            "
            style={{
              color: HERO_THEME.primary,
            }}
          >
            <span
              className="h-px w-12"
              style={{
                backgroundColor: HERO_THEME.primary,
              }}
            />

            FUTURE / 001
          </div>


          <h1
            className="
              mt-7
              text-[58px]
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.065em]
              sm:text-[76px]
              md:text-[100px]
              xl:text-[120px]
            "
          >
            IDEAS
            <br />

            <span
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.secondary},
                    ${HERO_THEME.accent}
                  )
                `,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              IN THE PIPELINE.
            </span>
          </h1>


          <p
            className="
              mt-8
              max-w-[700px]
              text-[13px]
              leading-7
              md:text-[15px]
            "
            style={{
              color: HERO_THEME.textMuted,
            }}
          >
            Not every idea becomes a project immediately. Some start
            as experiments, some become products and some simply
            push the boundaries of what I can build.
          </p>

        </motion.section>


        {/* =================================================
            SECTION HEADER
        ================================================= */}

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
          }}
          className="
            mt-24
            flex
            flex-col
            justify-between
            gap-5
            border-b
            pb-6
            md:flex-row
            md:items-end
          "
          style={{
            borderColor: HERO_THEME.borderSecondary,
          }}
        >

          <div>

            <p
              className="
                font-mono
                text-[8px]
                font-semibold
                tracking-[0.3em]
              "
              style={{
                color: HERO_THEME.primary,
              }}
            >
              UPCOMING PROJECTS
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-bold
                uppercase
                tracking-[-0.04em]
                md:text-3xl
              "
            >
              What I'm building next
            </h2>

          </div>

          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[8px]
              tracking-[0.2em]
            "
            style={{
              color: HERO_THEME.textDim,
            }}
          >
            <Lightbulb size={13} />
            {upcomingIdeas.length} IDEAS
          </div>

        </motion.div>


        {/* =================================================
            IDEA CARDS
        ================================================= */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {upcomingIdeas.map((idea, index) => {

            const Icon = idea.icon

            return (
              <motion.article
                key={idea.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  p-6
                  transition-all
                  duration-300
                "
                style={{
                  borderColor: `${idea.accent}30`,
                  background: `
                    linear-gradient(
                      145deg,
                      ${idea.accent}08,
                      rgba(255,255,255,0.015)
                    )
                  `,
                }}
              >

                {/* CARD GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    blur-[70px]
                    opacity-[0.04]
                    transition-all
                    duration-500
                    group-hover:opacity-[0.14]
                  "
                  style={{
                    backgroundColor: idea.accent,
                  }}
                />


                {/* TOP */}

                <div className="relative flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                    "
                    style={{
                      color: idea.accent,
                      borderColor: `${idea.accent}35`,
                      backgroundColor: `${idea.accent}0A`,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.2em]
                    "
                    style={{
                      color: idea.accent,
                    }}
                  >
                    {idea.number}
                  </span>

                </div>


                {/* CATEGORY */}

                <p
                  className="
                    relative
                    mt-7
                    font-mono
                    text-[7px]
                    font-semibold
                    tracking-[0.22em]
                  "
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  {idea.category}
                </p>


                {/* TITLE */}

                <h3
                  className="
                    relative
                    mt-3
                    text-[19px]
                    font-bold
                    uppercase
                    leading-tight
                    tracking-[-0.025em]
                  "
                  style={{
                    color: HERO_THEME.text,
                  }}
                >
                  {idea.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    relative
                    mt-4
                    text-[11px]
                    leading-6
                  "
                  style={{
                    color: HERO_THEME.textMuted,
                  }}
                >
                  {idea.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="relative mt-6 flex flex-wrap gap-1.5">

                  {idea.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        px-2.5
                        py-1
                        font-mono
                        text-[6px]
                        tracking-[0.08em]
                      "
                      style={{
                        color: HERO_THEME.textDim,
                        borderColor: `${idea.accent}25`,
                        backgroundColor: `${idea.accent}06`,
                      }}
                    >
                      {technology}
                    </span>
                  ))}

                </div>


                {/* BOTTOM */}

                <div
                  className="
                    relative
                    mt-7
                    flex
                    items-center
                    justify-between
                    border-t
                    pt-4
                  "
                  style={{
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >

                  <span
                    className="
                      rounded-full
                      border
                      px-2.5
                      py-1
                      font-mono
                      text-[6px]
                      tracking-[0.15em]
                    "
                    style={{
                      color: idea.accent,
                      borderColor: `${idea.accent}30`,
                      backgroundColor: `${idea.accent}08`,
                    }}
                  >
                    {idea.status}
                  </span>


                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    style={{
                      color: idea.accent,
                    }}
                  />

                </div>


                {/* BOTTOM ACCENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  style={{
                    background: `
                      linear-gradient(
                        90deg,
                        ${idea.accent},
                        ${HERO_THEME.accent}
                      )
                    `,
                  }}
                />

              </motion.article>
            )
          })}

        </div>


        {/* =================================================
            FINAL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          }}
          className="
            mx-auto
            mt-24
            max-w-[750px]
            pb-10
            text-center
          "
        >

          <Sparkles
            size={18}
            className="mx-auto"
            style={{
              color: HERO_THEME.accent,
            }}
          />

          <p
            className="
              mt-5
              text-[20px]
              font-light
              leading-8
              tracking-[-0.025em]
              md:text-[28px]
            "
            style={{
              color: HERO_THEME.textSoft,
            }}
          >
            Some ideas are waiting to become projects.

            <br />

            <span
              className="font-semibold"
              style={{
                color: HERO_THEME.text,
              }}
            >
              The next build starts here.
            </span>
          </p>

          <div
            className="mx-auto mt-7 h-[2px] w-20"
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

        </motion.div>

      </div>
    </main>
  )
}

export default Idea