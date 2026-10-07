import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Rocket,
  Target,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'
import collegeImage from '../../images/college.png'

const collegeInfo = {
  name: 'C.V. Raman Global University',
  stream: 'Computer Science & Engineering',
  location: 'Bhubaneswar, Odisha',
  passingYear: '2026',
}

const growthStages = [
  {
    number: '01',
    title: 'DISCOVER',
    text: 'Exploring programming, technology and the possibilities of building with code.',
    icon: Brain,
  },
  {
    number: '02',
    title: 'BUILD',
    text: 'Turning ideas into projects and learning by actually creating things.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'SPECIALIZE',
    text: 'Going deeper into computer science, development and modern technologies.',
    icon: Layers3,
  },
  {
    number: '04',
    title: 'CREATE',
    text: 'Combining technical knowledge with creativity to build useful digital experiences.',
    icon: Rocket,
  },
]

const College = () => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        backgroundColor: HERO_THEME.background,
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
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

        {/* Red glow */}
        <div
          className="
            absolute
            left-[-15%]
            top-[-10%]
            h-[650px]
            w-[650px]
            rounded-full
            blur-[170px]
          "
          style={{
            backgroundColor: HERO_THEME.glowPrimary,
          }}
        />

        {/* Orange glow */}
        <div
          className="
            absolute
            bottom-[-15%]
            right-[-12%]
            h-[650px]
            w-[650px]
            rounded-full
            blur-[180px]
          "
          style={{
            backgroundColor: HERO_THEME.glowSecondary,
          }}
        />

        {/* Center depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 15%,
                rgba(0,0,0,0.82) 100%
              )
            `,
          }}
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-6
          pt-[125px]
          pb-16
          md:px-12
          lg:px-10
          xl:px-20
          max-[380px]:px-3
          max-[380px]:pt-24
        "
      >

        {/* =================================================
            TOP BAR
        ================================================= */}
        <div className="flex items-center justify-between">

          <motion.button
            type="button"
            onClick={goBack}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
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

            BACK TO JOURNEY
          </motion.button>

          <div
            className="
              hidden
              items-center
              gap-3
              font-mono
              text-[8px]
              tracking-[0.3em]
              sm:flex
            "
            style={{
              color: HERO_THEME.textDim,
            }}
          >
            <span
              className="h-[6px] w-[6px] rounded-full"
              style={{
                backgroundColor: HERO_THEME.secondary,
                boxShadow: `0 0 10px ${HERO_THEME.secondary}`,
              }}
            />

            MY JOURNEY / 02
          </div>

        </div>

        {/* =================================================
            HERO
        ================================================= */}
        <div
          className="
            mt-12
            grid
            items-center
            gap-8
            sm:gap-10
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >

          {/* LEFT CONTENT */}
          <div>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="flex items-center gap-4"
            >
              <span
                className="h-px w-14"
                style={{
                  backgroundColor: HERO_THEME.secondary,
                }}
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  tracking-[0.35em]
                "
                style={{
                  color: HERO_THEME.secondary,
                }}
              >
                ABOUT / 02 / COLLEGE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="
                mt-7
                text-[64px]
                font-black
                uppercase
                leading-[0.84]
                tracking-[-0.065em]
                sm:text-[85px]
                md:text-[105px]
                lg:text-[78px]
                xl:text-[125px]
                max-[1100px]:text-[76px]
                max-[380px]:mt-5
                max-[380px]:text-[42px]
              "
            >
              THE
              <br />

              <span
                style={{
                  backgroundImage: `
                    linear-gradient(
                      90deg,
                      ${HERO_THEME.secondary},
                      ${HERO_THEME.accent},
                      ${HERO_THEME.primary}
                    )
                  `,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                EVOLUTION.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="
                mt-8
                max-w-[560px]
                text-[14px]
                leading-7
                md:text-[15px]
                max-[380px]:mt-5
                max-[380px]:text-[13px]
                max-[380px]:leading-6
              "
              style={{
                color: HERO_THEME.textMuted,
              }}
            >
              College was where curiosity turned into direction —
              where learning computer science became a journey of
              building, experimenting and developing real technical skills.
            </motion.p>

{/* INFO TAGS */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.4,
    duration: 0.6,
    ease: 'easeOut',
  }}
  className="mt-9 flex flex-wrap gap-3 max-[380px]:mt-6 max-[380px]:gap-2"
>
  {/* COLLEGE */}
  <div
    className="
      flex items-center gap-2 rounded-full border
      px-4 py-2
    "
    style={{
      borderColor: HERO_THEME.borderSecondary,
      backgroundColor: `${HERO_THEME.secondary}08`,
    }}
  >
    <GraduationCap
      size={14}
      style={{
        color: HERO_THEME.secondary,
      }}
    />

    <span
      className="
        font-mono text-[8px] tracking-[0.16em]
      "
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {collegeInfo.name}
    </span>
  </div>

  {/* STREAM */}
  <div
    className="
      flex items-center gap-2 rounded-full border
      px-4 py-2
    "
    style={{
      borderColor: HERO_THEME.borderPrimary,
      backgroundColor: `${HERO_THEME.primary}08`,
    }}
  >
    <Code2
      size={13}
      style={{
        color: HERO_THEME.accent,
      }}
    />

    <span
      className="
        font-mono text-[8px] tracking-[0.16em]
      "
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {collegeInfo.stream}
    </span>
  </div>

  {/* LOCATION */}
  <div
    className="
      flex items-center gap-2 rounded-full border
      px-4 py-2
    "
    style={{
      borderColor: HERO_THEME.borderSecondary,
      backgroundColor: `${HERO_THEME.secondary}08`,
    }}
  >
    <MapPin
      size={13}
      style={{
        color: HERO_THEME.secondary,
      }}
    />

    <span
      className="
        font-mono text-[8px] tracking-[0.16em]
      "
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {collegeInfo.location}
    </span>
  </div>

  {/* PASSING YEAR */}
  <div
    className="
      flex items-center gap-2 rounded-full border
      px-4 py-2
    "
    style={{
      borderColor: HERO_THEME.borderPrimary,
      backgroundColor: `${HERO_THEME.primary}08`,
    }}
  >
    <Target
      size={13}
      style={{
        color: HERO_THEME.accent,
      }}
    />

    <span
      className="
        font-mono text-[8px] tracking-[0.16em]
      "
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      PASSED OUT / {collegeInfo.passingYear}
    </span>
  </div>
</motion.div>
          </div>

          {/* =================================================
              COLLEGE IMAGE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="relative"
          >

            {/* Glow */}
            <div
              className="
                absolute
                -inset-4
                rounded-[32px]
                blur-2xl
              "
              style={{
                backgroundColor: HERO_THEME.glowSecondary,
              }}
            />

            {/* IMAGE FRAME */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                bg-black
              "
              style={{
                borderColor: HERO_THEME.borderSecondary,
                boxShadow: `
                  0 0 45px ${HERO_THEME.glowSecondary},
                  inset 0 0 40px rgba(0,0,0,0.6)
                `,
              }}
            >

<img
  src={collegeImage}
  alt={collegeInfo.name}
  className="
    h-[250px]
    w-full
    object-contain
    p-3
    opacity-90
    transition-all
    duration-700
    group-hover:opacity-100
    sm:h-[380px]
    md:h-[470px]
    lg:h-[420px]
    xl:h-[520px]
  "
/>

              {/* Cinematic overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(0,0,0,0.05) 20%,
                      rgba(0,0,0,0.15) 45%,
                      rgba(0,0,0,0.85) 100%
                    )
                  `,
                }}
              />

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-full
                "
                style={{
                  background: `
                    linear-gradient(
                      90deg,
                      ${HERO_THEME.secondary},
                      ${HERO_THEME.accent},
                      ${HERO_THEME.primary}
                    )
                  `,
                }}
              />

              {/* IMAGE LABEL */}
              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-lg
                  border
                  px-3
                  py-2
                  backdrop-blur-md
                  max-[380px]:left-3
                  max-[380px]:top-3
                  max-[380px]:max-w-[calc(100%-24px)]
                  max-[380px]:px-2
                  max-[380px]:py-1.5
                "
                style={{
                  borderColor: HERO_THEME.borderSecondary,
                  backgroundColor: 'rgba(0,0,0,0.55)',
                }}
              >
                <div
                  className="
                    font-mono
                    text-[7px]
                    tracking-[0.25em]
                    max-[380px]:text-[6px]
                    max-[380px]:tracking-[0.12em]
                  "
                  style={{
                    color: HERO_THEME.secondary,
                  }}
                >
                  THE NEXT CHAPTER
                </div>

                <div
                  className="
                    mt-1
                    text-[11px]
                    font-semibold
                    max-[380px]:text-[9px]
                  "
                  style={{
                    color: HERO_THEME.text,
                  }}
                >
                  COLLEGE
                </div>
              </div>

              {/* IMAGE FOOTER */}
              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  right-6
                  flex
                  items-end
                  justify-between
                  max-[380px]:bottom-3
                  max-[380px]:left-3
                  max-[380px]:right-3
                "
              >
                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.2em]
                    "
                    style={{
                      color: HERO_THEME.secondary,
                    }}
                  >
                    CHAPTER 02
                  </p>

                  <p
                    className="
                      mt-1
                      text-[20px]
                      font-bold
                      tracking-[-0.03em]
                      max-[380px]:text-[14px]
                    "
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    Where I started building.
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  style={{
                    color: HERO_THEME.accent,
                  }}
                />
              </div>

            </div>

            {/* Decorative number */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-8
                -left-5
                hidden
                text-[100px]
                font-black
                leading-none
                opacity-[0.035]
                md:block
              "
              style={{
                color: HERO_THEME.secondary,
              }}
            >
              02
            </div>

          </motion.div>
        </div>

        {/* =================================================
            STORY
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="
            mx-auto
            mt-28
            max-w-[950px]
            text-center
            max-[380px]:mt-16
          "
        >

          <p
            className="
              font-mono
              text-[9px]
              tracking-[0.35em]
            "
            style={{
              color: HERO_THEME.secondary,
            }}
          >
            THE TURNING POINT
          </p>

          <h2
            className="
              mt-5
              text-[32px]
              font-light
              leading-tight
              tracking-[-0.04em]
              md:text-[48px]
            "
            style={{
              color: HERO_THEME.text,
            }}
          >
            Where learning started
            <span
              className="ml-2 font-semibold"
              style={{
                color: HERO_THEME.accent,
              }}
            >
              becoming creation.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[700px]
              text-[13px]
              leading-7
              md:text-[14px]
            "
            style={{
              color: HERO_THEME.textMuted,
            }}
          >
            College introduced a deeper level of technical learning.
            Programming, projects and problem solving gradually became
            more than subjects — they became tools for building ideas
            into something real.
          </p>

        </motion.div>

        {/* =================================================
            GROWTH STAGES
        ================================================= */}
        <div className="mt-20">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.3em]
                "
                style={{
                  color: HERO_THEME.secondary,
                }}
              >
                THE COLLEGE YEARS
              </p>

              <h2
                className="
                  mt-3
                  text-[28px]
                  font-bold
                  uppercase
                  tracking-[-0.04em]
                "
                style={{
                  color: HERO_THEME.text,
                }}
              >
                From learner to builder
              </h2>
            </div>

            <span
              className="
                hidden
                font-mono
                text-[8px]
                tracking-[0.25em]
                sm:block
              "
              style={{
                color: HERO_THEME.textDim,
              }}
            >
              01 — 04
            </span>

          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {growthStages.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -6,
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
                    borderColor: 'rgba(255,255,255,0.07)',
                    backgroundColor: 'rgba(255,255,255,0.018)',
                  }}
                >

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-5
                      top-4
                      font-mono
                      text-[8px]
                      tracking-[0.15em]
                    "
                    style={{
                      color: HERO_THEME.secondary,
                      opacity: 0.7,
                    }}
                  >
                    {item.number}
                  </span>

                  {/* Icon */}
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
                      color: HERO_THEME.accent,
                      borderColor: HERO_THEME.borderSecondary,
                      backgroundColor: `${HERO_THEME.secondary}0A`,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className="
                      mt-7
                      text-[14px]
                      font-bold
                      tracking-[0.04em]
                    "
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      leading-6
                    "
                    style={{
                      color: HERO_THEME.textDim,
                    }}
                  >
                    {item.text}
                  </p>

                  {/* Hover accent */}
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
                          ${HERO_THEME.secondary},
                          ${HERO_THEME.accent}
                        )
                      `,
                    }}
                  />

                </motion.div>
              )
            })}

          </div>
        </div>

        {/* =================================================
            FINAL SECTION
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
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-28
            max-w-[900px]
            pb-16
            text-center
          "
        >

          <BookOpen
            size={18}
            className="mx-auto mb-5"
            style={{
              color: HERO_THEME.accent,
            }}
          />

          <p
            className="
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
            College gave me the space to experiment.

            <br />

            <span
              className="font-semibold"
              style={{
                color: HERO_THEME.text,
              }}
            >
              I turned that experimentation into skills.
            </span>
          </p>

          <div
            className="mx-auto mt-8 h-[2px] w-20"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  ${HERO_THEME.secondary},
                  ${HERO_THEME.accent}
                )
              `,
            }}
          />

        </motion.div>

      </div>
    </section>
  )
}

export default College