import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MapPin,
  Rocket,
  Target,
  Users,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'
import companyImage from '../../images/company.png'

const professionalStages = [
  {
    number: '01',
    title: 'ADAPT',
    text: 'Understanding professional environments, workflows and the importance of solving problems systematically.',
    icon: Users,
  },
  {
    number: '02',
    title: 'BUILD',
    text: 'Working with modern technologies and turning requirements into practical digital solutions.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'DELIVER',
    text: 'Focusing on quality, reliability and creating solutions that provide real value.',
    icon: Layers3,
  },
  {
    number: '04',
    title: 'EVOLVE',
    text: 'Continuously learning, improving and becoming a stronger developer with every challenge.',
    icon: Rocket,
  },
]

const Company = () => {
  const goBack = () => {
    window.history.back()
  }

  const companyInfo = {
  role: 'Custom Software Engineer',
  skill: 'Mobile App Developer',
  location: 'Bhubaneswar',
  joiningDate: 'YOUR JOINING DATE',
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
          lg:px-20
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
                backgroundColor: HERO_THEME.primary,
                boxShadow: `0 0 10px ${HERO_THEME.primary}`,
              }}
            />

            MY JOURNEY / 03
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
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >

          {/* LEFT */}
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
                  backgroundColor: HERO_THEME.primary,
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
                  color: HERO_THEME.primary,
                }}
              >
                ABOUT / 03 / COMPANY
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
                xl:text-[125px]
              "
            >
              THE
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
              "
              style={{
                color: HERO_THEME.textMuted,
              }}
            >
              The professional chapter is where technical knowledge
              meets real-world challenges — turning ideas, requirements
              and problems into meaningful digital solutions.
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
  className="mt-9 flex flex-wrap gap-3"
>
  {/* MAIN ROLE */}
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
    <BriefcaseBusiness
      size={14}
      style={{
        color: HERO_THEME.primary,
      }}
    />

    <span
      className="font-mono text-[8px] tracking-[0.16em]"
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {companyInfo.role}
    </span>
  </div>

  {/* SKILL */}
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
    <Code2
      size={13}
      style={{
        color: HERO_THEME.accent,
      }}
    />

    <span
      className="font-mono text-[8px] tracking-[0.16em]"
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {companyInfo.skill}
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
      className="font-mono text-[8px] tracking-[0.16em]"
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      {companyInfo.location}
    </span>
  </div>

  {/* JOINING DATE */}
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
      className="font-mono text-[8px] tracking-[0.16em]"
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      JOINED / {companyInfo.joiningDate}
    </span>
  </div>
</motion.div>
          </div>

          {/* =================================================
              COMPANY IMAGE
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
                backgroundColor: HERO_THEME.glowPrimary,
              }}
            />

            {/* Image frame */}
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
                borderColor: HERO_THEME.borderPrimary,
                boxShadow: `
                  0 0 45px ${HERO_THEME.glowPrimary},
                  inset 0 0 40px rgba(0,0,0,0.6)
                `,
              }}
            >

<img
  src={companyImage}
  alt={companyInfo.role}
  className="
    h-[380px]
    w-full
    object-contain
    p-3
    opacity-90
    transition-all
    duration-700
    group-hover:opacity-100
    md:h-[470px]
    lg:h-[520px]
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
                      rgba(0,0,0,0.88) 100%
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
                      ${HERO_THEME.primary},
                      ${HERO_THEME.secondary},
                      ${HERO_THEME.accent}
                    )
                  `,
                }}
              />

              {/* Image label */}
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
                "
                style={{
                  borderColor: HERO_THEME.borderPrimary,
                  backgroundColor: 'rgba(0,0,0,0.55)',
                }}
              >
                <div
                  className="
                    font-mono
                    text-[7px]
                    tracking-[0.25em]
                  "
                  style={{
                    color: HERO_THEME.primary,
                  }}
                >
                  THE PROFESSIONAL CHAPTER
                </div>

<div
  className="
    mt-1
    text-[11px]
    font-semibold
  "
  style={{
    color: HERO_THEME.text,
  }}
>
  CUSTOM SOFTWARE ENGINEER
</div>
              </div>

              {/* Image footer */}
              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  right-6
                  flex
                  items-end
                  justify-between
                "
              >
<div>
  <p
    className="font-mono text-[8px] tracking-[0.2em]"
    style={{
      color: HERO_THEME.primary,
    }}
  >
    CHAPTER 03
  </p>

  <p
    className="
      mt-1
      text-[20px]
      font-bold
      tracking-[-0.03em]
    "
    style={{
      color: HERO_THEME.text,
    }}
  >
    {companyInfo.role}
  </p>

  <p
    className="mt-1 font-mono text-[8px] tracking-[0.14em]"
    style={{
      color: HERO_THEME.textMuted,
    }}
  >
    {companyInfo.skill} • {companyInfo.location}
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
                color: HERO_THEME.primary,
              }}
            >
              03
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
          "
        >

          <p
            className="
              font-mono
              text-[9px]
              tracking-[0.35em]
            "
            style={{
              color: HERO_THEME.primary,
            }}
          >
            THE PROFESSIONAL CHAPTER
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
            Where skills started
            <span
              className="ml-2 font-semibold"
              style={{
                color: HERO_THEME.secondary,
              }}
            >
              meeting reality.
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
            Entering the professional world brought a different kind of
            learning — collaborating with people, understanding real
            requirements, solving practical problems and delivering
            solutions that matter.
          </p>

        </motion.div>

        {/* =================================================
            PROFESSIONAL STAGES
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
                  color: HERO_THEME.primary,
                }}
              >
                THE NEXT LEVEL
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
                From developer to professional
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

            {professionalStages.map((item, index) => {
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
                      color: HERO_THEME.primary,
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
                      borderColor: HERO_THEME.borderPrimary,
                      backgroundColor: `${HERO_THEME.primary}0A`,
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
                          ${HERO_THEME.primary},
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
            FINAL STATEMENT
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

          <Target
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
            The journey doesn't end when you enter the industry.

            <br />

            <span
              className="font-semibold"
              style={{
                color: HERO_THEME.text,
              }}
            >
              That's where the real learning begins.
            </span>
          </p>

          <div
            className="mx-auto mt-8 h-[2px] w-20"
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
    </section>
  )
}

export default Company