import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Award,
  Code2,
  CalendarDays,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { HERO_THEME } from '../Theme'
import companyImage from '../../images/company.png'

const Accenture = () => {
  const navigate = useNavigate()
  const handleBack = () => {
  navigate('/', {
    state: {
      scrollTo: 'experience',
    },
  })
}

  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-[125px] text-white md:px-10 lg:px-16"
      style={{ backgroundColor: HERO_THEME.background }}
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(${HERO_THEME.grid} 1px, transparent 1px),
            linear-gradient(
              90deg,
              ${HERO_THEME.grid} 1px,
              transparent 1px
            )
          `,
          backgroundSize: '70px 70px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />

      {/* ATMOSPHERIC GLOWS */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          backgroundColor: HERO_THEME.glowPrimary,
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full blur-[150px]"
        style={{
          backgroundColor: HERO_THEME.glowSecondary,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* BACK BUTTON */}
        <motion.button
          onClick={handleBack}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="
            mb-12
            flex
            items-center
            gap-3
            rounded-lg
            border
            bg-white/[0.02]
            px-4
            py-2.5
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            transition-all
          "
          style={{
            color: HERO_THEME.textMuted,
            borderColor: HERO_THEME.borderPrimary,
          }}
        >
          <ArrowLeft size={15} />
          Back to Experience
        </motion.button>

{/* HEADER */}
<div
  className="
    flex
    flex-col
    gap-14
    lg:grid
    lg:grid-cols-[minmax(0,1fr)_360px]
    lg:items-start
    lg:gap-20
    xl:grid-cols-[minmax(0,1fr)_380px]
    xl:gap-24
  "
>

  {/* LEFT — HEADER CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      ease: 'easeOut',
    }}
    className="
      w-full
      max-w-4xl
      min-w-0
      lg:pr-4
    "
  >

    {/* LABEL */}
    <div
      className="
        mb-7
        flex
        flex-wrap
        items-center
        gap-3
        text-xs
        font-semibold
        uppercase
        tracking-[0.28em]
      "
      style={{
        color: HERO_THEME.primary,
      }}
    >
      <span
        className="h-px w-10 shrink-0"
        style={{
          backgroundColor: HERO_THEME.primary,
        }}
      />

      <span>PROFESSIONAL EXPERIENCE</span>

      <span
        className="
          shrink-0
          rounded-full
          border
          px-2.5
          py-1
          text-[10px]
        "
        style={{
          color: HERO_THEME.accent,
          borderColor: HERO_THEME.borderSecondary,
        }}
      >
        01
      </span>
    </div>

    {/* TITLE */}
    <h1
      className="
        max-w-[800px]
        text-5xl
        font-black
        uppercase
        leading-[0.9]
        tracking-[-0.045em]
        md:text-7xl
      "
    >
      ACCENTURE
    </h1>

    {/* DIVIDER */}
    <div
      className="
        mt-7
        h-[2px]
        w-24
        rounded-full
      "
      style={{
        background: `
          linear-gradient(
            90deg,
            ${HERO_THEME.primary},
            ${HERO_THEME.accent}
          )
        `,
        boxShadow: `0 0 14px ${HERO_THEME.primary}`,
      }}
    />

    {/* DESCRIPTION */}
    <p
      className="
        mt-8
        max-w-[650px]
        text-sm
        leading-7
        md:text-base
        md:leading-8
      "
      style={{
        color: HERO_THEME.textSoft,
      }}
    >
      Professional software engineering experience focused on
      technology, development practices, problem solving and
      building solutions in a structured enterprise environment.
    </p>

  </motion.div>


  {/* RIGHT — COMPANY IMAGE */}
  <motion.div
    initial={{
      opacity: 0,
      x: 35,
      scale: 0.96,
    }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.8,
      delay: 0.15,
      ease: 'easeOut',
    }}
    className="
      relative
      w-full
      shrink-0
      lg:w-[360px]
      xl:w-[380px]
      lg:pt-2
    "
  >

    {/* IMAGE GLOW */}
    <div
      className="
        pointer-events-none
        absolute
        -inset-6
        rounded-[32px]
        blur-2xl
      "
      style={{
        backgroundColor: HERO_THEME.glowPrimary,
      }}
    />

    {/* IMAGE FRAME */}
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-black
      "
      style={{
        borderColor: HERO_THEME.borderPrimary,
        boxShadow: `
          0 0 35px ${HERO_THEME.glowPrimary},
          inset 0 0 30px rgba(0,0,0,0.6)
        `,
      }}
    >

      <img
        src={companyImage}
        alt="Accenture company"
        className="
          block
          h-[200px]
          w-full
          object-contain
          p-6
          opacity-90
          transition-opacity
          duration-500
          group-hover:opacity-100
          sm:h-[220px]
          lg:h-[240px]
        "
      />

      {/* CINEMATIC OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(0,0,0,0.02) 35%,
              rgba(0,0,0,0.72) 100%
            )
          `,
        }}
      />

      {/* TOP LABEL */}
      <div
        className="
          absolute
          left-5
          top-5
          rounded-md
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
        <p
          className="
            font-mono
            text-[7px]
            tracking-[0.22em]
          "
          style={{
            color: HERO_THEME.primary,
          }}
        >
          COMPANY
        </p>
      </div>

      {/* BOTTOM LABEL */}
      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
        "
      >
        <p
          className="
            font-mono
            text-[7px]
            tracking-[0.2em]
          "
          style={{
            color: HERO_THEME.primary,
          }}
        >
          PROFESSIONAL CHAPTER
        </p>

        <p
          className="
            mt-1
            text-sm
            font-bold
            tracking-[-0.02em]
          "
          style={{
            color: HERO_THEME.text,
          }}
        >
          ACCENTURE
        </p>
      </div>

      {/* BOTTOM ACCENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
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

    </div>
  </motion.div>

</div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT — EXPERIENCE CARD */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="
              relative
              self-start
              overflow-hidden
              rounded-2xl
              border
              p-8
              md:p-10
            "
            style={{
              borderColor: HERO_THEME.borderPrimary,
              backgroundColor: 'rgba(255,255,255,0.025)',
              boxShadow: `0 0 45px ${HERO_THEME.glowPrimary}`,
            }}
          >
            {/* TOP ACCENT */}
            <div
              className="absolute left-0 top-0 h-[2px] w-full"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.accent},
                    transparent
                  )
                `,
              }}
            />

            <div className="flex items-start justify-between gap-5">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: HERO_THEME.primary }}
                >
                  ROLE
                </p>

                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  Software Engineer / Trainee
                </h2>
              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                "
                style={{
                  borderColor: HERO_THEME.borderPrimary,
                  backgroundColor: `${HERO_THEME.primary}0D`,
                  color: HERO_THEME.primary,
                }}
              >
                <BriefcaseBusiness size={21} />
              </div>
            </div>

            <div
              className="my-8 h-px w-full"
              style={{
                backgroundColor: HERO_THEME.borderSecondary,
              }}
            />

            <div className="grid gap-6 sm:grid-cols-2">

              {/* COMPANY */}
              <div>
                <div
                  className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: HERO_THEME.textDim }}
                >
                  <Building2 size={13} />
                  Company
                </div>

                <p
                  className="text-sm font-semibold"
                  style={{ color: HERO_THEME.text }}
                >
                  Accenture
                </p>
              </div>

              {/* PERIOD */}
              <div>
                <div
                  className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: HERO_THEME.textDim }}
                >
                  <CalendarDays size={13} />
                  Period
                </div>

                <p
                  className="text-sm font-semibold"
                  style={{ color: HERO_THEME.text }}
                >
                  2026
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-10">
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: HERO_THEME.primary }}
              >
                EXPERIENCE
              </p>

              <p
                className="text-sm leading-8"
                style={{ color: HERO_THEME.textSoft }}
              >
                Worked within a professional enterprise environment
                while developing technical skills, understanding
                software engineering practices, collaborating with
                teams and working through structured development and
                problem-solving processes.
              </p>
            </div>
          </motion.section>

          {/* RIGHT — DETAILS */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: 'easeOut',
            }}
            className="space-y-5"
          >

            {/* EXPERIENCE TYPE */}
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: HERO_THEME.borderSecondary,
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border"
                  style={{
                    color: HERO_THEME.secondary,
                    borderColor: HERO_THEME.borderSecondary,
                    backgroundColor: `${HERO_THEME.secondary}0D`,
                  }}
                >
                  <Award size={18} />
                </div>

                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: HERO_THEME.textDim }}
                  >
                    Experience Type
                  </p>

                  <p className="mt-1 text-sm font-semibold uppercase">
                    Professional
                  </p>
                </div>
              </div>

              <p
                className="text-xs leading-6"
                style={{ color: HERO_THEME.textMuted }}
              >
                Enterprise technology and software engineering
                experience with exposure to professional development
                workflows and structured engineering practices.
              </p>
            </div>

            {/* FOCUS AREAS */}
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: HERO_THEME.borderSecondary,
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <Code2
                  size={18}
                  style={{ color: HERO_THEME.accent }}
                />

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: HERO_THEME.textMuted }}
                >
                  Focus Areas
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Software Engineering',
                  'Problem Solving',
                  'Development',
                  'Team Collaboration',
                  'Enterprise Technology',
                  'Technical Skills',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-2 text-[10px] font-medium"
                    style={{
                      color: HERO_THEME.textSoft,
                      borderColor: HERO_THEME.borderSecondary,
                      backgroundColor: `${HERO_THEME.primary}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: 'easeOut',
          }}
          className="
            mt-10
            rounded-2xl
            border
            p-8
            md:p-10
          "
          style={{
            borderColor: HERO_THEME.borderPrimary,
            backgroundColor: 'rgba(255,255,255,0.018)',
          }}
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: HERO_THEME.primary }}
              >
                PROFESSIONAL JOURNEY
              </p>

              <p
                className="mt-3 max-w-3xl text-sm leading-7"
                style={{ color: HERO_THEME.textMuted }}
              >
                A professional chapter focused on strengthening
                engineering fundamentals, adapting to enterprise
                workflows and growing as a software engineer.
              </p>
            </div>

            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
              style={{
                color: HERO_THEME.primary,
                borderColor: HERO_THEME.borderPrimary,
                boxShadow: `0 0 20px ${HERO_THEME.glowButton}`,
              }}
            >
              <span className="text-lg font-black">01</span>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}

export default Accenture
