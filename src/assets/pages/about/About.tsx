import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  ArrowDown,
  ArrowUpRight,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'

gsap.registerPlugin(ScrollTrigger)


/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [
  {
    number: '01',
    title: 'School',
    eyebrow: 'THE BEGINNING',
    icon: GraduationCap,
    year: 'FOUNDATION',
    text:
      'The first stage of my journey was built around curiosity. I started exploring computers, understanding how technology works and developing the habit of learning by experimenting.',
  },

  {
    number: '02',
    title: 'College',
    eyebrow: 'C.V. RAMAN GLOBAL UNIVERSITY',
    icon: Building2,
    year: 'DISCOVERY',
    text:
      'College turned curiosity into a direction. I started developing real applications, learning modern technologies and discovering that building software was something I genuinely enjoyed.',
  },

  {
    number: '03',
    title: 'Company',
    eyebrow: 'THE PROFESSIONAL CHAPTER',
    icon: BriefcaseBusiness,
    year: 'EVOLUTION',
    text:
      'The journey now continues in the professional world — working with real products, real problems and continuously improving as a developer.',
  },
]


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
}


/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const aboutRef = useRef<HTMLElement>(null)

  const timelineRef = useRef<HTMLDivElement>(null)

  const lineRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  const chapterRefs =
    useRef<Array<HTMLDivElement | null>>([])


  /* =======================================================
     GSAP TIMELINE
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current || !timelineRef.current) return

      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
          transformOrigin: 'top center',
        },
        {
          scaleY: 1,
          ease: 'none',

          scrollTrigger: {
            trigger: timelineRef.current,

            start: 'top 65%',

            end: 'bottom 75%',

            scrub: 1,
          },
        }
      )
    }, aboutRef)

    return () => ctx.revert()
  }, [])


  /* =======================================================
     SCROLL TO CHAPTER
  ======================================================= */

const scrollToChapter = (index: number) => {
  if (index === 0) {
    navigate('/school')
    return
  }

  if (index === 1) {
    navigate('/college')
    return
  }

  if (index === 2) {
    navigate('/company')
    return
  }
}


  return (
    <section
      ref={aboutRef}
      id="about"
      className="
        relative
        mb-0
        w-full
        overflow-hidden
        text-white
      "
      style={{
        backgroundColor: HERO_THEME.background,
      }}
    >

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

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

            backgroundSize: '80px 80px',
          }}
        />


        {/* RED ATMOSPHERE */}

        <div
          className="
            absolute
            left-[-14%]
            top-[8%]
            h-[560px]
            w-[560px]
            rounded-full
            blur-[160px]
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
            right-[-14%]
            top-[42%]
            h-[620px]
            w-[620px]
            rounded-full
            blur-[170px]
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
                transparent 15%,
                rgba(0,0,0,0.75) 100%
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
          INTRO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[90vh]
          items-center
          border-b
          px-[30px]
          py-20
        "
        style={{
          borderColor:
            HERO_THEME.borderPrimary,
        }}
      >

        <div className="w-full">

          {/* =================================================
              LABEL
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="
              mb-8
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                h-[2px]
                w-12
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
                text-[9px]
                font-bold
                tracking-[0.35em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              ABOUT / 01
            </span>

          </motion.div>


          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={reveal}
            transition={{
              duration: 0.85,
              ease: 'easeOut',
              delay: 0.08,
            }}
            className="
              w-full
              max-w-none
              text-[52px]
              font-light
              leading-[0.88]
              tracking-[-0.06em]
              sm:text-[72px]
              md:text-[100px]
              lg:text-[118px]
            "
          >

            A JOURNEY

            <br />

            <span
              style={{
                color:
                  'rgba(255,255,255,0.16)',
              }}
            >
              IN THREE
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
              CHAPTERS.
            </span>

          </motion.h2>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className="
              mt-10
              flex
              w-full
              max-w-none
              flex-col
              gap-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <p
              className="
                max-w-[720px]
                text-[14px]
                leading-7
                md:text-[15px]
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              From curiosity to code, every stage of my
              journey has shaped the way I think, build
              and solve problems.
            </p>


            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-black/30
                "
                style={{
                  borderColor:
                    HERO_THEME.borderPrimary,

                  boxShadow:
                    `0 0 20px ${HERO_THEME.glowPrimary}`,
                }}
              >

                <ArrowDown
                  size={13}
                  style={{
                    color:
                      HERO_THEME.primary,
                  }}
                />

              </div>

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.25em]
                "
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                SCROLL TO EXPLORE
              </span>

            </div>

          </motion.div>


          {/* =================================================
              CHAPTER NAVIGATION
          ================================================= */}

          <div
            className="
              mt-14
              grid
              w-full
              max-w-[900px]
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >

            {journey.map((item, index) => (

              <button
                key={item.number}
                type="button"
                onClick={() =>
                  scrollToChapter(index)
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-none
                  border
                  p-4
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  borderColor:
                    HERO_THEME.borderPrimary,

                  backgroundColor:
                    'rgba(255,255,255,0.018)',
                }}
              >

                {/* TOP ACCENT */}

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
                        ${HERO_THEME.primary},
                        ${HERO_THEME.accent}
                      )`,
                  }}
                />


                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.2em]
                  "
                  style={{
                    color:
                      HERO_THEME.primary,
                  }}
                >
                  {item.number}
                </span>


                <p
                  className="
                    mt-3
                    text-[12px]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                  style={{
                    color:
                      HERO_THEME.textMuted,
                  }}
                >
                  {item.title}
                </p>


                {/* CORNER MARK */}

                <span
                  className="
                    absolute
                    bottom-2
                    right-3
                    font-mono
                    text-[6px]
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  0{index + 1}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* PAGE INDEX */}

        <div
          className="
            absolute
            bottom-8
            right-8
            font-mono
            text-[8px]
            tracking-[0.3em]
          "
          style={{
            color:
              HERO_THEME.textDim,
          }}
        >
          01 — 03
        </div>

      </div>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div
        ref={timelineRef}
        className="
          relative
          z-10
        "
      >

        {/* ===================================================
            CENTRAL TIMELINE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-6
            top-0
            w-px
            md:left-1/2
          "
          style={{
            backgroundColor:
              'rgba(255,255,255,0.07)',
          }}
        >

          <div
            ref={lineRef}
            className="
              absolute
              inset-x-0
              top-0
              h-full
              origin-top
            "
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  ${HERO_THEME.primary},
                  ${HERO_THEME.secondary},
                  ${HERO_THEME.accent}
                )
              `,

              boxShadow:
                `0 0 18px ${HERO_THEME.glowButton}`,
            }}
          />

        </div>


        {/* ===================================================
            CHAPTERS
        =================================================== */}

        {journey.map((item, index) => (

          <JourneyChapter
            key={item.number}
            item={item}
            index={index}
            chapterRef={(node) => {
              chapterRefs.current[index] = node
            }}
            onClick={() =>
              scrollToChapter(index)
            }
          />

        ))}

      </div>

    </section>
  )
}


/* =============================================================
   JOURNEY CHAPTER
============================================================= */

type JourneyChapterProps = {
  item: (typeof journey)[number]

  index: number

  chapterRef:
    (node: HTMLDivElement | null) => void

  onClick: () => void
}


/* =============================================================
   CHAPTER COMPONENT
============================================================= */

const JourneyChapter = ({
  item,
  index,
  chapterRef,
  onClick,
}: JourneyChapterProps) => {

  const contentRef =
    useRef<HTMLDivElement>(null)

  const visible = useInView(contentRef, {
    amount: 0.35,
    once: false,
  })

  const Icon = item.icon


  return (
    <div
      ref={chapterRef}
      className="
        relative
        flex
        min-h-[90vh]
        items-center
        border-b
        px-6
        py-24
        md:px-12
        lg:px-[10%]
      "
      style={{
        borderColor:
          'rgba(255,255,255,0.05)',
      }}
    >

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1250px]
          grid-cols-1
          gap-14
          md:grid-cols-2
          md:gap-24
        "
      >

        {/* ===================================================
            LEFT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity:
              visible ? 1 : 0.25,

            x:
              visible ? 0 : -20,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="
            relative
            pl-10
            md:pl-0
          "
        >

          {/* NUMBER */}

          <div className="flex items-center gap-4">

            <span
              className="
                font-mono
                text-[10px]
                font-bold
                tracking-[0.25em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              {item.number}
            </span>

            <span
              className="
                h-px
                w-12
              "
              style={{
                background:
                  `linear-gradient(
                    to right,
                    ${HERO_THEME.primary},
                    transparent
                  )`,
              }}
            />

          </div>


          {/* TITLE */}

          <h3
            className="
              mt-6
              text-[64px]
              font-light
              leading-[0.85]
              tracking-[-0.06em]
              sm:text-[80px]
              md:text-[96px]
              lg:text-[110px]
            "
          >
            {item.title}
          </h3>


          {/* ACCENT */}

          <div
            className="
              mt-8
              h-[2px]
              w-20
            "
            style={{
              background:
                `linear-gradient(
                  to right,
                  ${HERO_THEME.primary},
                  ${HERO_THEME.accent}
                )`,

              boxShadow:
                `0 0 12px ${HERO_THEME.glowButton}`,
            }}
          />


          {/* EYEBROW */}

          <p
            className="
              mt-6
              max-w-[420px]
              font-mono
              text-[8px]
              tracking-[0.22em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            {item.eyebrow}
          </p>

        </motion.div>


        {/* ===================================================
            RIGHT CARD
        =================================================== */}

        <motion.div
          ref={contentRef}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity:
              visible ? 1 : 0.25,

            y:
              visible ? 0 : 25,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            delay: 0.08,
          }}
          className="
            flex
            flex-col
            justify-center
          "
        >

          <div
            className="
              group
              relative
              overflow-hidden
              border
              p-6
              backdrop-blur-xl
              md:p-8
            "
            style={{
              borderColor:
                HERO_THEME.borderPrimary,

              background:
                `linear-gradient(
                  135deg,
                  rgba(255,255,255,0.025),
                  rgba(255,255,255,0.008)
                )`,

              boxShadow:
                `inset 0 0 45px ${HERO_THEME.glowPrimary}`,
            }}
          >

            {/* =================================================
                CARD TOP LINE
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
                background:
                  `linear-gradient(
                    90deg,
                    ${HERO_THEME.primary},
                    ${HERO_THEME.secondary},
                    transparent
                  )`,
              }}
            />


            {/* =================================================
                DECORATIVE CORNER
            ================================================= */}

            <div
              className="
                absolute
                right-0
                top-0
                h-16
                w-16
              "
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    transparent 48%,
                    ${HERO_THEME.primary} 49%,
                    transparent 52%
                  )
                `,

                opacity: 0.4,
              }}
            />


            {/* =================================================
                CARD HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                pb-6
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.07)',
              }}
            >

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  bg-black/40
                "
                style={{
                  borderColor:
                    HERO_THEME.borderPrimary,

                  color:
                    HERO_THEME.primary,

                  boxShadow:
                    `0 0 20px ${HERO_THEME.glowPrimary}`,
                }}
              >

                <Icon
                  size={19}
                  strokeWidth={1.4}
                />


                {/* ICON CORNER */}

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
                      HERO_THEME.primary,
                  }}
                />

              </div>


              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.25em]
                "
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                {item.year}
              </span>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-8
                max-w-[540px]
                text-[15px]
                font-light
                leading-8
                md:text-[16px]
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              {item.text}
            </p>


            {/* =================================================
                EXPLORE
            ================================================= */}

            <button
              type="button"
              onClick={onClick}
              className="
                group
                mt-10
                flex
                w-fit
                items-center
                gap-3
                border-b
                pb-2
                font-mono
                text-[9px]
                tracking-[0.2em]
                transition-all
                duration-300
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.10)',

                color:
                  HERO_THEME.textMuted,
              }}
            >

              EXPLORE CHAPTER

              <ArrowUpRight
                size={13}
                style={{
                  color:
                    HERO_THEME.primary,
                }}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </button>


            {/* =================================================
                CARD FOOTER MARK
            ================================================= */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-2
              "
            >

              <span
                className="
                  h-[3px]
                  w-[3px]
                  rounded-full
                "
                style={{
                  backgroundColor:
                    HERO_THEME.primary,

                  boxShadow:
                    `0 0 8px ${HERO_THEME.primary}`,
                }}
              />

              <span
                className="
                  font-mono
                  text-[6px]
                  tracking-[0.25em]
                "
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                SYSTEM / CHAPTER {item.number}
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          TIMELINE NODE
      ===================================================== */}

      <motion.div
        animate={{
          scale:
            visible ? 1.15 : 1,

          opacity:
            visible ? 1 : 0.4,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="
          absolute
          left-[18px]
          top-1/2
          z-40
          h-4
          w-4
          -translate-y-1/2
          rounded-full
          border
          md:left-[calc(50%-8px)]
        "
        style={{
          borderColor:
            HERO_THEME.primary,

          backgroundColor:
            HERO_THEME.background,

          boxShadow:
            `0 0 14px ${HERO_THEME.glowButton}`,
        }}
      >

        <div
          className="
            absolute
            inset-[3px]
            rounded-full
          "
          style={{
            background:
              `linear-gradient(
                135deg,
                ${HERO_THEME.primary},
                ${HERO_THEME.accent}
              )`,

            boxShadow:
              `0 0 10px ${HERO_THEME.primary}`,
          }}
        />

      </motion.div>


      {/* =====================================================
          CHAPTER NUMBER
      ===================================================== */}

      <span
        className="
          absolute
          bottom-8
          right-8
          font-mono
          text-[8px]
          tracking-[0.25em]
        "
        style={{
          color:
            HERO_THEME.textDim,
        }}
      >
        CHAPTER {index + 1}
      </span>

    </div>
  )
}


export default About