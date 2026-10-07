import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  ArrowUpRight,
  Clock3,
  Mail,
  Code2,
  BriefcaseBusiness,
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
   BLOG DATA
========================================================= */

const posts = [
  {
    category: 'REACT NATIVE',
    title: 'Building Better Mobile Experiences with React Native',
    description:
      'Practical ideas for creating smooth, responsive and maintainable React Native applications.',
    date: 'OCT 02, 2026',
    read: '6 MIN READ',
    accent: HERO_THEME.primary,
    number: '01',
  },

  {
    category: 'GSAP / MOTION',
    title: 'Making Interfaces Feel Alive with GSAP',
    description:
      'A look at scroll animations, reveals and micro-interactions that make interfaces feel more premium.',
    date: 'SEP 24, 2026',
    read: '5 MIN READ',
    accent: HERO_THEME.secondary,
    number: '02',
  },

  {
    category: 'THREE.JS',
    title: 'My Journey Into 3D Web Experiences',
    description:
      'Understanding the fundamentals behind scenes, cameras, meshes, materials and interactive 3D.',
    date: 'SEP 18, 2026',
    read: '8 MIN READ',
    accent: HERO_THEME.accent,
    number: '03',
  },

  {
    category: 'UI / UX',
    title: 'Designing Interfaces That Feel Fast',
    description:
      'Why spacing, hierarchy, motion and feedback matter more than adding more elements.',
    date: 'SEP 10, 2026',
    read: '4 MIN READ',
    accent: HERO_THEME.primaryDark,
    number: '04',
  },

  {
    category: 'DEVELOPMENT',
    title: 'From Idea to a Real Full-Stack Product',
    description:
      'The process I follow when turning an idea into a functional modern web application.',
    date: 'SEP 03, 2026',
    read: '7 MIN READ',
    accent: HERO_THEME.secondary,
    number: '05',
  },
]


/* =========================================================
   BLOG
========================================================= */

const Blog = () => {
  const section = useRef<HTMLElement>(null)
  const heading = useRef<HTMLDivElement>(null)
  const featured = useRef<HTMLDivElement>(null)
  const cards = useRef<HTMLDivElement>(null)
  const footer = useRef<HTMLDivElement>(null)
     const navigate = useNavigate()

  /* =======================================================
     GSAP
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {

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


      gsap.fromTo(
        '.blog-card',
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
            trigger: cards.current,
            start: 'top 82%',
          },
        }
      )


      gsap.fromTo(
        footer.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: footer.current,
            start: 'top 88%',
          },
        }
      )

    }, section)

    return () => ctx.revert()
  }, [])


  return (
    <section
      ref={section}
      id="blog"
      className="
        relative
        w-full
        overflow-hidden
        pt-12
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
            backgroundSize: '80px 80px',
          }}
        />


        {/* RED GLOW */}

        <div
          className="
            absolute
            left-[-15%]
            top-[5%]
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


        {/* ORANGE GLOW */}

        <div
          className="
            absolute
            bottom-[10%]
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


        {/* DEPTH */}

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
                rgba(0,0,0,0.82) 100%
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
              className="h-[2px] w-8"
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
                tracking-[.25em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              BLOG / 06
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

              THOUGHTS

              <br />

              <span
                style={{
                  color:
                    'rgba(255,255,255,0.16)',
                }}
              >
                &
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
                IDEAS.
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
              Notes about development, design,
              motion, technology and the things I
              learn while building digital products.
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
            FEATURED ARTICLE
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
                posts[0].accent,
                0.16
              ),

            background:
              `linear-gradient(
                145deg,
                ${rgba(
                  posts[0].accent,
                  0.035
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
            "
            style={{
              background: `
                linear-gradient(
                  90deg,
                  ${posts[0].accent},
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
                FEATURED VISUAL
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[260px]
                items-center
                justify-center
                overflow-hidden
                lg:min-h-[330px]
              "
              style={{
                background:
                  `linear-gradient(
                    135deg,
                    ${rgba(
                      HERO_THEME.primaryDark,
                      0.12
                    )},
                    ${HERO_THEME.background}
                  )`,
              }}
            >

              {/* GLOW */}

              <div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
                style={{
                  backgroundColor:
                    posts[0].accent,

                  opacity: 0.10,
                }}
              />


              {/* MAIN SHAPE */}

              <div
                className="
                  relative
                  h-[150px]
                  w-[150px]
                  rotate-45
                  rounded-[28px]
                  border
                  transition-transform
                  duration-700
                  group-hover:rotate-[55deg]
                "
                style={{
                  borderColor:
                    rgba(
                      posts[0].accent,
                      0.28
                    ),

                  backgroundColor:
                    rgba(
                      posts[0].accent,
                      0.025
                    ),

                  boxShadow:
                    `0 0 50px ${rgba(
                      posts[0].accent,
                      0.08
                    )}`,
                }}
              >

                <div
                  className="
                    absolute
                    inset-5
                    rounded-[18px]
                    border
                  "
                  style={{
                    borderColor:
                      'rgba(255,255,255,0.06)',
                  }}
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-3
                    w-3
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                  "
                  style={{
                    backgroundColor:
                      posts[0].accent,

                    boxShadow:
                      `0 0 25px ${posts[0].accent}`,
                  }}
                />

              </div>


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
                      posts[0].accent,
                      0.65
                    ),
                }}
              >
                DIGITAL / EXPERIENCE
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
                        posts[0].accent,
                    }}
                  >
                    {posts[0].category}
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
                    {posts[0].number}
                  </span>

                </div>


                <h3
                  className="
                    mt-4
                    max-w-[500px]
                    text-[25px]
                    font-light
                    leading-[1.05]
                    tracking-[-.035em]
                    md:text-[31px]
                  "
                >
                  {posts[0].title}
                </h3>


                <p
                  className="
                    mt-3
                    max-w-[480px]
                    text-[11px]
                    leading-5
                  "
                  style={{
                    color:
                      HERO_THEME.textMuted,
                  }}
                >
                  {posts[0].description}
                </p>

              </div>


              <div
                className="
                  mt-8
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

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    font-mono
                    text-[7px]
                    tracking-[.15em]
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >

                  <span>
                    {posts[0].date}
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <Clock3 size={11} />
                    {posts[0].read}
                  </span>

                </div>


                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300
                  "
                  style={{
                    borderColor:
                      rgba(
                        posts[0].accent,
                        0.18
                      ),

                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  <ArrowUpRight
                    size={15}
                  />
                </div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            BLOG GRID
        =================================================== */}

        <div
          ref={cards}
          className="
            mt-3
            grid
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {posts
            .slice(1)
            .map((post) => (

              <motion.article
                key={post.number}

                whileHover={{
                  y: -4,
                }}

                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}

                className="
                  blog-card
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  p-4
                "

                style={{
                  borderColor:
                    rgba(
                      post.accent,
                      0.14
                    ),

                  background:
                    `linear-gradient(
                      145deg,
                      ${rgba(
                        post.accent,
                        0.025
                      )},
                      rgba(255,255,255,0.008)
                    )`,
                }}
              >

                {/* GLOW */}

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    opacity-10
                    blur-[45px]
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:opacity-30
                  "
                  style={{
                    backgroundColor:
                      post.accent,
                  }}
                />


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
                        ${post.accent},
                        transparent
                      )
                    `,
                  }}
                />


                <div
                  className="
                    relative
                    flex
                    min-h-[190px]
                    flex-col
                    justify-between
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
                          text-[7px]
                          tracking-[.2em]
                        "
                        style={{
                          color:
                            post.accent,
                        }}
                      >
                        {post.category}
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
                        {post.number}
                      </span>

                    </div>


                    <h3
                      className="
                        mt-4
                        text-[17px]
                        font-light
                        leading-[1.15]
                        tracking-[-.025em]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                      style={{
                        color:
                          HERO_THEME.textSoft,
                      }}
                    >
                      {post.title}
                    </h3>


                    <p
                      className="
                        mt-2
                        text-[9px]
                        leading-4
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      {post.description}
                    </p>

                  </div>


                  <div
                    className="
                      mt-5
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
                        tracking-[.12em]
                      "
                      style={{
                        color:
                          HERO_THEME.textDim,
                      }}
                    >
                      {post.date}
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
                          post.accent,
                      }}
                    />

                  </div>

                </div>

              </motion.article>

            ))}

        </div>


        {/* ===================================================
            NEWSLETTER / CTA
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
            mt-8
            flex
            flex-col
            justify-between
            gap-5
            rounded-2xl
            border
            p-5
            md:flex-row
            md:items-center
            md:p-6
          "

          style={{
            borderColor:
              rgba(
                HERO_THEME.primary,
                0.12
              ),

            background:
              `linear-gradient(
                145deg,
                ${rgba(
                  HERO_THEME.primary,
                  0.025
                )},
                rgba(255,255,255,0.008)
              )`,
          }}
        >

          <div>

            <p
              className="
                font-mono
                text-[8px]
                tracking-[.25em]
              "
              style={{
                color:
                  HERO_THEME.primary,
              }}
            >
              STAY CURIOUS
            </p>


            <h3
              className="
                mt-2
                text-[21px]
                font-light
                tracking-tight
              "
            >
              More ideas are coming.
            </h3>


            <p
              className="
                mt-1
                text-[9px]
              "
              style={{
                color:
                  HERO_THEME.textDim,
              }}
            >
              Follow along as I continue building
              and learning.
            </p>

          </div>


          <motion.button
            whileHover={{
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

           onClick={() => {
  sessionStorage.setItem(
    'blogScrollPosition',
    String(window.scrollY)
  )

  navigate('/ideas')
}}

            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              px-5
              font-mono
              text-[8px]
              tracking-[.18em]
              text-white
              transition-all
              duration-300
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
                  0.11
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
            EXPLORE ALL ARTICLES

            <ArrowUpRight
              size={13}
            />

          </motion.button>

        </motion.div>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer
          ref={footer}
          className="
            mt-10
            border-t
            pt-6
          "
          style={{
            borderColor:
              'rgba(255,255,255,0.06)',
          }}
        >

          <div
            className="
              grid
              gap-8
              md:grid-cols-[1.3fr_.7fr_.7fr_.7fr]
            "
          >

            {/* BRAND */}

            <div>

              <div
                className="
                  text-[22px]
                  font-semibold
                  tracking-[-.04em]
                "
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
              </div>


              <p
                className="
                  mt-3
                  max-w-[280px]
                  text-[10px]
                  leading-5
                "
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                Creative developer building modern
                web and mobile experiences with code,
                motion and thoughtful design.
              </p>

            </div>


            {/* NAVIGATION */}

            <div>

              <p
                className="
                  font-mono
                  text-[8px]
                  tracking-[.22em]
                "
                style={{
                  color:
                    HERO_THEME.primary,
                }}
              >
                NAVIGATION
              </p>


              <div
                className="
                  mt-3
                  flex
                  flex-col
                  gap-2
                "
              >

                {[
                  'Home',
                  'About',
                  'Skills',
                  'Projects',
                ].map((item) => (

                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="
                      text-[10px]
                      transition-colors
                      hover:text-white
                    "
                    style={{
                      color:
                        HERO_THEME.textDim,
                    }}
                  >
                    {item}
                  </a>

                ))}

              </div>

            </div>


            {/* SOCIAL */}

            <div>

              <p
                className="
                  font-mono
                  text-[8px]
                  tracking-[.22em]
                "
                style={{
                  color:
                    HERO_THEME.secondary,
                }}
              >
                CONNECT
              </p>


              <div
                className="
                  mt-3
                  flex
                  flex-col
                  gap-2
                "
              >

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    transition-colors
                    hover:text-white
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  <Code2 size={13} />
                  GitHub
                </a>


                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    transition-colors
                    hover:text-white
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  <BriefcaseBusiness
                    size={13}
                  />
                  LinkedIn
                </a>

              </div>

            </div>


            {/* CONTACT */}

            <div>

              <p
                className="
                  font-mono
                  text-[8px]
                  tracking-[.22em]
                "
                style={{
                  color:
                    HERO_THEME.accent,
                }}
              >
                CONTACT
              </p>


              <div className="mt-3">

                <a
                  href="mailto:yourmail@gmail.com"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    transition-colors
                    hover:text-white
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  <Mail size={13} />
                  Let's talk
                </a>


                <p
                  className="
                    mt-3
                    font-mono
                    text-[7px]
                    tracking-[.15em]
                  "
                  style={{
                    color:
                      HERO_THEME.textDim,
                  }}
                >
                  BHUBANESWAR / INDIA
                </p>

              </div>

            </div>

          </div>


          {/* BOTTOM */}

          <div
            className="
              mt-8
              flex
              flex-col
              justify-between
              gap-2
              border-t
              py-4
              md:flex-row
              md:items-center
            "
            style={{
              borderColor:
                'rgba(255,255,255,0.06)',
            }}
          >

            <p
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
              © 2026 SWAGAT.DIV — ALL RIGHTS RESERVED
            </p>


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
                AVAILABLE FOR COLLABORATION
              </span>

            </div>

          </div>

        </footer>

      </div>

    </section>
  )
}


export default Blog