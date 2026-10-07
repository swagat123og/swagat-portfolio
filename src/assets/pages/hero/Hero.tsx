import { motion } from 'framer-motion'

import { ArrowRight, Code2, Smartphone } from 'lucide-react'

import type { CSSProperties } from 'react'

import PhoneApp from './PhoneApp'

import { HERO_THEME } from '../Theme'

/* =========================================================

ANIMATION

========================================================= */

const fade = (delay = 0, y = 0, x = 0) => ({

 initial: {

opacity: 0,

    x,

    y,

  },

  animate: {

    opacity: 1,

    x: 0,

    y: 0,

  },

  transition: {

    delay,

    duration: 0.6,

    ease: [0.22, 1, 0.36, 1] as const,

  },

})

/* =========================================================

   STATS

========================================================= */

const stats = [

  ['2+', <>Years<br />Experience</>],

  ['10+', <>Projects<br />Completed</>],

  ['5+', <>Technologies<br />Mastered</>],

]

/* =========================================================

   HERO

========================================================= */

const Hero = () => {

  const themeVariables = {

    '--hero-primary': HERO_THEME.primary,

    '--hero-secondary': HERO_THEME.secondary,

    '--hero-accent': HERO_THEME.accent,

    '--hero-primary-dark': HERO_THEME.primaryDark,

    '--hero-text': HERO_THEME.text,

    '--hero-muted': HERO_THEME.textMuted,

    '--hero-dim': HERO_THEME.textDim,

    '--hero-soft': HERO_THEME.textSoft,

    '--hero-grid': HERO_THEME.grid,

    '--hero-glow-primary': HERO_THEME.glowPrimary,

    '--hero-glow-secondary': HERO_THEME.glowSecondary,

    '--hero-glow-center': HERO_THEME.glowCenter,

    '--hero-border-primary': HERO_THEME.borderPrimary,

    '--hero-border-secondary': HERO_THEME.borderSecondary,

    '--hero-button-glow': HERO_THEME.glowButton,

    '--hero-phone-glow': HERO_THEME.glowPhone,

  } as CSSProperties

  return (

    <section

      id="home"

      className="relative

        flex

        items-center

        min-h-[calc(100svh-88px)]

        w-full

        overflow-hidden
        text-white
        [@media(width:1024px)]:h-[calc(100vh-88px)]
        min-[1025px]:h-[calc(100vh-88px)]
        [@media(width:1024px)]:min-h-[680px]
        min-[1025px]:min-h-[680px]"

      style={{

        ...themeVariables,

        backgroundColor: HERO_THEME.background,

      }}

    >

      {/* =====================================================

          BACKGROUND

      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        {/* GRID */}

        <div

          className="absolute

            inset-0

            opacity-[0.035]

            [background-size:80px_80px]"

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

          }}

        />

        {/* PRIMARY RED GLOW */}

        <div

          className="absolute

            left-[-18%]

            top-[-12%]

            h-[620px]

            w-[620px]

            rounded-full

            blur-[150px]"

          style={{

            backgroundColor: HERO_THEME.glowPrimary,

          }}

        />

        {/* ORANGE GLOW */}

        <div

          className="absolute

            right-[-15%]

            top-[25%]

            h-[650px]

            w-[650px]

            rounded-full

            blur-[160px]"

          style={{

            backgroundColor: HERO_THEME.glowSecondary,

          }}

        />

        {/* CENTER GLOW */}

        <div

          className="absolute

            left-[35%]

            top-[15%]

            h-[500px]

            w-[500px]

            rounded-full

            blur-[130px]"

          style={{

            backgroundColor: HERO_THEME.glowCenter,

          }}

        />

        {/* VIGNETTE */}

        <div

          className="absolute

            inset-0

            bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.78)\_100%)]"

        />

        {/* TOP FADE */}

        <div

          className="absolute

            inset-x-0

            top-0

            h-[180px]

            bg-gradient-to-b

            from-black

            to-transparent"

        />

        {/* BOTTOM FADE */}

        <div

          className="absolute

            inset-x-0

            bottom-0

            h-[160px]

            bg-gradient-to-t

            from-black

            to-transparent"

        />

        {/* RED ENERGY LINE */}

        <div

          className="absolute

            left-0

            top-[22%]

            h-px

            w-[42%]"

          style={{

            backgroundImage: `

              linear-gradient(

                to right,

                transparent,

                ${HERO_THEME.primary},

                transparent

              )

            `,

            opacity: 0.4,

          }}

        />

        {/* ORANGE ENERGY LINE */}

        <div

          className="absolute

            bottom-[20%]

            right-0

            h-px

            w-[35%]"

          style={{

            backgroundImage: `

              linear-gradient(

                to right,

                transparent,

                ${HERO_THEME.accent},

                transparent

              )

            `,

            opacity: 0.3,

          }}

        />

      </div>

      {/* =====================================================

          MAIN

      ===================================================== */}

      <div

        className="relative

          z-10

          mx-auto

          flex

          w-full

          max-w-[1500px]

          items-center

          px-4

          py-8

          sm:px-6
          [@media(width:1024px)]:h-full
          min-[1025px]:h-full
          [@media(width:1024px)]:px-2
          min-[1025px]:px-2
          [@media(width:1024px)]:py-0
          min-[1025px]:py-0

          xl:px-8"

      >

        <div

          className="grid

            w-full

            grid-cols-1
            items-center
            gap-8
            [@media(width:1024px)]:grid-cols-[0.95fr_1.05fr]
            min-[1025px]:grid-cols-[0.95fr_1.05fr]
            [@media(width:1024px)]:gap-5
            min-[1025px]:gap-5"

        >

          {/* =================================================

              LEFT CONTENT

          ================================================= */}

          <motion.div

            {...fade(0, 0, -35)}

            className="relative

              z-20

              flex
              flex-col
              justify-center
              [@media(width:1024px)]:pl-2
              min-[1025px]:pl-2"

          >

            {/* BADGE */}

            <motion.div

              {...fade(0.15, 10)}

              className="mb-4

                inline-flex

                w-fit

                items-center

                gap-2

                border

                px-3

                py-1.5"

              style={{

                borderColor: HERO_THEME.borderPrimary,

                backgroundColor: 'rgba(255,255,255,0.02)',

                boxShadow: '0 0 20px rgba(0,0,0,0.15)',

              }}

            >

              <span

                className="h-[7px]

                  w-[7px]

                  rounded-full"

                style={{

                  backgroundColor: HERO_THEME.primary,

                  boxShadow: `0 0 12px ${HERO_THEME.primary}`,

                }}

              />

              {['MOBILE', 'WEB', 'IDEAS', 'IMPACT'].map((item, i) => (

                <span

                  key={item}

                  className="flex items-center gap-2"

                >

                  {i > 0 && (

                    <span

                      className="mb-[5px]"

                      style={{

                        color: HERO_THEME.primary,

                        opacity: 0.3,

                      }}

                    >

                      ×

                    </span>

                  )}

                  <span

                    className="font-mono

                      text-[9px]

                      tracking-[0.13em]"

                    style={{

                      color: HERO_THEME.textSoft,

                    }}

                  >

                    {item}

                  </span>

                </span>

              ))}

            </motion.div>

            {/* INTRO */}

            <motion.p

              {...fade(0.25)}

              className="mb-2

                font-mono

                text-[11px]

                tracking-[0.16em]"

              style={{

                color: HERO_THEME.textDim,

              }}

            >

              HELLO, I'M SWAGAT

            </motion.p>

            {/* HEADING */}

            <motion.h1

              {...fade(0.3, 20)}

              className="max-w-[620px]

                text-[clamp(2.125rem,8vw,3.125rem)]

                font-black

                uppercase

                leading-[0.92]

                tracking-[-0.055em]

                min-[1025px]:text-[54px]

                xl:text-[64px]"

              style={{

                color: HERO_THEME.text,

              }}

            >

              Turning Ideas

              <br />

              Into{' '}

              <span

                className="bg-clip-text

                  text-transparent"

                style={{

                  backgroundImage: `

                    linear-gradient(

                      to right,

                      ${HERO_THEME.primary},

                      ${HERO_THEME.secondary},

                      ${HERO_THEME.accent}

                    )

                  `,

                }}

              >

                Real Apps.

              </span>

            </motion.h1>

            {/* UNDERLINE */}

            <motion.div

              {...fade(0.38, 8)}

              className="mt-4

                h-[3px]

                w-[115px]"

              style={{

                backgroundImage: `

                  linear-gradient(

                    to right,

                    ${HERO_THEME.primary},

                    ${HERO_THEME.accent}

                  )

                `,

                boxShadow: `0 0 14px ${HERO_THEME.primary}`,

              }}

            />

            {/* DESCRIPTION */}

            <motion.p

              {...fade(0.4, 15)}

              className="mt-5

                max-w-[480px]

                text-[13px]

                leading-[1.55]

                min-[1025px]:text-[14px]"

              style={{

                color: HERO_THEME.textMuted,

              }}

            >

              I'm a frontend developer and mobile app enthusiast building

              modern, scalable and user-centric digital experiences for web

              and mobile.

            </motion.p>

            {/* BUTTONS */}

            <motion.div

              {...fade(0.5, 15)}

              className="mt-6

                flex

                flex-wrap

                items-center

                gap-3

                max-[380px]:gap-2"

            >

              {/* LET'S TALK */}

              <motion.button

                type="button"

                onClick={() => {

                  const contact =

                    document.getElementById('contact')

                  if (!contact) return

                  const target =

                    contact.getBoundingClientRect().top +

                    window.scrollY -

                    88

                  window.scrollTo({

                    top: target,

                    behavior: 'smooth',

                  })

                }}

                whileHover={{

                  y: -2,

                  boxShadow:

                    `0 0 28px ${HERO_THEME.glowButton}`,

                }}

                whileTap={{

                  scale: 0.97,

                }}

                className="group

                  relative

                  flex

                  h-[46px]

                  cursor-pointer

                  items-center

                  gap-4

                  overflow-hidden

                  rounded-[6px]

                  px-6

                  font-mono

                  text-[12px]

                  font-bold

                  uppercase

                  tracking-[0.04em]

                  text-white

                  max-[380px]:gap-2

                  max-[380px]:px-3

                  max-[380px]:text-[10px]"

                style={{

                  border:

                    `1px solid ${HERO_THEME.primary}`,

                  backgroundImage: `

                    linear-gradient(

                      to right,

                      ${HERO_THEME.primaryDark},

                      ${HERO_THEME.secondary}

                    )

                  `,

                  boxShadow:

                    `0 0 12px ${HERO_THEME.glowButton}`,

                }}

              >

                <span className="relative z-10">

                  Let's Talk

                </span>

                <ArrowRight

                  size={16}

                  className="relative

                    z-10

                    transition-transform

                    duration-300

                    group-hover:translate-x-1"

                />

              </motion.button>

              {/* VIEW MY WORK */}

              <motion.button

                type="button"

                onClick={() => {

                  const projects =

                    document.getElementById('projects')

                  if (!projects) return

                  const target =

                    projects.getBoundingClientRect().top +

                    window.scrollY -

                    88

                  window.scrollTo({

                    top: target,

                    behavior: 'smooth',

                  })

                }}

                whileHover={{

                  y: -2,

                  borderColor:

                    HERO_THEME.borderSecondary,

                  color:

                    HERO_THEME.secondary,

                }}

                whileTap={{

                  scale: 0.97,

                }}

                className="flex

                  h-[46px]

                  cursor-pointer

                  items-center

                  gap-4

                  rounded-[6px]

                  border

                  bg-white/[0.025]

                  px-6

                  font-mono

                  text-[12px]

                  font-bold

                  uppercase

                  tracking-[0.03em]

                  transition-colors

                  duration-300

                  max-[380px]:gap-2

                  max-[380px]:px-3

                  max-[380px]:text-[10px]"

                style={{

                  borderColor:

                    'rgba(255,255,255,0.10)',

                  color:

                    HERO_THEME.textSoft,

                }}

              >

                View My Work

                <ArrowRight

                  size={16}

                  style={{

                    color:

                      HERO_THEME.secondary,

                  }}

                />

              </motion.button>

            </motion.div>

            {/* STATS */}

            <motion.div

              {...fade(0.6, 15)}

              className="mt-8

                flex

                items-start"

            >

              {stats.map(([value, label], i) => (

                <div

                  key={`${i}-${String(value)}`}

                  className={

                    i === 0

                      ? 'border-r border-white/[0.08] pr-7 max-[380px]:pr-2'

                      : i === 1

                        ? 'border-r border-white/[0.08] px-7 max-[380px]:px-2'

                        : 'pl-7 max-[380px]:pl-2'

                  }

                >

                  <p

                    className="text-[25px]

                      font-black

                      leading-none"

                    style={{

                      color: HERO_THEME.text,

                    }}

                  >

                    {value}

                  </p>

                  <p

                    className="mt-1.5

                      text-[11px]

                      uppercase

                      leading-4

                      tracking-[0.08em]

                      max-[380px]:text-[9px]"

                    style={{

                      color: HERO_THEME.textDim,

                    }}

                  >

                    {label}

                  </p>

                </div>

              ))}

            </motion.div>

            {/* SCROLL */}

            <motion.div

              {...fade(0.9)}

              className="mt-7

                hidden

                items-center

                gap-3

                lg:flex"

            >

              <motion.div

                animate={{

                  y: [0, 4, 0],

                  opacity: [0.65, 1, 0.65],

                }}

                transition={{

                  duration: 2,

                  repeat: Infinity,

                  ease: 'easeInOut',

                }}

                className="flex

                  h-9

                  w-9

                  items-center

                  justify-center

                  rounded-full

                  border"

                style={{

                  borderColor:

                    HERO_THEME.borderPrimary,

                  backgroundColor:

                    'rgba(255,255,255,0.02)',

                  boxShadow:

                    `0 0 15px ${HERO_THEME.glowPrimary}`,

                }}

              >

                <span

                  style={{

                    color:

                      HERO_THEME.secondary,

                  }}

                >

                  ↓

                </span>

              </motion.div>

              <span

                className="font-mono

                  text-[8px]

                  font-semibold

                  tracking-[0.25em]"

                style={{

                  color:

                    'rgba(255,255,255,0.25)',

                }}

              >

                SCROLL TO EXPLORE

              </span>

            </motion.div>

          </motion.div>

          {/* =================================================

              RIGHT / PHONE

          ================================================= */}

          <div

            className="relative

              hidden
              h-full
              items-center
              justify-center
              [@media(width:1024px)]:flex
              min-[1025px]:flex
              [@media(width:1024px)]:min-h-[440px]
              min-[1025px]:min-h-[600px]
              [@media(width:1024px)]:justify-end
              min-[1025px]:justify-end
              [@media(width:1024px)]:pr-10
              min-[1025px]:pr-15

              xl:pr-16"

          >

{/* RED ORBIT */}

<motion.div

  animate={{

    rotate: 360,

  }}

  transition={{

    duration: 35,

    repeat: Infinity,

    ease: 'linear',

  }}

  className="absolute

    left-1/2

    top-1/2

    [@media(width:1024px)]:h-[360px]
    [@media(width:1024px)]:w-[360px]
    h-[520px]

    w-[520px]

    -translate-x-1/2

    -translate-y-1/2

    rounded-full

    border"

  style={{

    borderColor: HERO_THEME.borderPrimary,

    boxShadow: `

      0 0 30px ${HERO_THEME.glowPrimary}

    `,

  }}

/>

{/* ORANGE ORBIT */}

<motion.div

  animate={{

    rotate: -360,

  }}

  transition={{

    duration: 45,

    repeat: Infinity,

    ease: 'linear',

  }}

  className="absolute

    left-1/2

    top-1/2

    [@media(width:1024px)]:h-[430px]
    [@media(width:1024px)]:w-[430px]
    h-[620px]

    w-[620px]

    -translate-x-1/2

    -translate-y-1/2

    rounded-full

    border"

  style={{

    borderColor: HERO_THEME.borderSecondary,

  }}

/>

            {/* CENTER RING */}

            <div

              className="absolute

                z-10
                [@media(width:1024px)]:h-[250px]
                [@media(width:1024px)]:w-[250px]
                h-[320px]

                w-[320px]

                rounded-full

                border"

              style={{

                borderColor:

                  HERO_THEME.glowPrimary,

              }}

            />

            {/* PHONE GLOW */}

            <div

              className="absolute
                [@media(width:1024px)]:h-[220px]
                [@media(width:1024px)]:w-[220px]
                h-[300px]

                w-[300px]

                rounded-full

                blur-[85px]"

              style={{

                backgroundColor:

                  HERO_THEME.glowPrimary,

              }}

            />

            {/* PHONE */}

            <motion.div

              {...fade(0.35, 30)}

              className="relative
                z-20
              [@media(width:1024px)]:mr-24
              mr-40
              [@media(width:1024px)]:h-[420px]
              h-[500px]
              [@media(width:1024px)]:w-[206px]
              w-[245px]

                rounded-[34px]

                p-[6px]"

              style={{

                backgroundImage: `

                  linear-gradient(

                    135deg,

                    #171717,

                    #050505 50%,

                    ${HERO_THEME.primary}

                  )

                `,

                boxShadow: `

                  0 0 30px

                  ${HERO_THEME.glowPhone},

                  0 0 70px

                  ${HERO_THEME.glowSecondary}

                `,

              }}

            >

              <div

                className="h-full

                  w-full

                  overflow-hidden

                  rounded-[28px]

                  border"

                style={{

                  borderColor:

                    HERO_THEME.borderSecondary,

                }}

              >

                <PhoneApp />

              </div>

            </motion.div>

            {/* FLOATING CARD */}

            <motion.div

              animate={{

                y: [0, -6, 0],

              }}

              transition={{

                duration: 4,

                repeat: Infinity,

                ease: [0.42, 0, 0.58, 1],

              }}

              className="absolute

                right-0

                top-[23%]

                z-30

                hidden

                w-[145px]

                flex-col

                gap-3

                rounded-xl

                border

                bg-[#080808]/90

                p-3.5

                backdrop-blur-xl

                xl:flex"

              style={{

                borderColor:

                  HERO_THEME.borderSecondary,

                boxShadow:

                  '0 0 25px rgba(255,40,0,0.08)',

              }}

            >

              <div className="flex items-center gap-2">

                <Smartphone

                  size={16}

                  style={{

                    color:

                      HERO_THEME.secondary,

                  }}

                />

                <div>

                  <p

                    className="text-[9px]"

                    style={{

                      color:

                        HERO_THEME.text,

                    }}

                  >

                    React Native

                  </p>

                  <p

                    className="text-[6px]"

                    style={{

                      color:

                        HERO_THEME.textDim,

                    }}

                  >

                    Build once

                  </p>

                </div>

              </div>

              <div

                className="h-px"

                style={{

                  backgroundColor:

                    'rgba(255,255,255,0.07)',

                }}

              />

              <div className="flex items-center gap-2">

                <Code2

                  size={15}

                  style={{

                    color:

                      HERO_THEME.accent,

                  }}

                />

                <div>

                  <p

                    className="text-[9px]"

                    style={{

                      color:

                        HERO_THEME.text,

                    }}

                  >

                    Clean Code

                  </p>

                  <p

                    className="text-[6px]"

                    style={{

                      color:

                        HERO_THEME.textDim,

                    }}

                  >

                    Better Apps

                  </p>

                </div>

              </div>

            </motion.div>

            {/* DECORATIVE TEXT - LEFT */}

            <motion.div

              {...fade(0.9, 0, 15)}

              className="absolute

                left-[1%]

                top-[34%]

                z-30

                ml-20

                mt-20

                hidden

                rotate-[-8deg]

                font-serif

                text-[25px]

                font-bold

                italic

                leading-[1.1]

                xl:block"

              style={{

                color:

                  HERO_THEME.primary,

                opacity: 0.6,

              }}

            >

              Design

              <br />

              Develop

              <br />

              Deploy

              <br />

              Repeat

            </motion.div>

            {/* DECORATIVE TEXT - RIGHT */}

            <motion.div

              {...fade(1.1, 0, 15)}

              className="absolute

                right-[-1%]

                top-[31%]

                z-30

                ml-20

                mt-20

                hidden

                rotate-[-5deg]

                font-serif

                text-[25px]

                font-bold

                italic

                leading-[1.15]

                xl:block"

              style={{

                color:

                  HERO_THEME.accent,

                opacity: 0.55,

              }}

            >

              Mobile

              <br />

              Experiences

              <br />

              Real Impact

            </motion.div>

            {/* SPEED LINE 1 */}

            <div

              className="absolute

                right-[-5%]

                top-[45%]

                h-px

                w-[180px]

                rotate-[-12deg]"

              style={{

                backgroundImage: `

                  linear-gradient(

                    to right,

                    transparent,

                    ${HERO_THEME.primary},

                    transparent

                  )

                `,

                opacity: 0.5,

              }}

            />

            {/* SPEED LINE 2 */}

            <div

              className="absolute

                right-[5%]

                top-[51%]

                h-px

                w-[120px]

                rotate-[-12deg]"

              style={{

                backgroundImage: `

                  linear-gradient(

                    to right,

                    transparent,

                    ${HERO_THEME.accent},

                    transparent

                  )

                `,

                opacity: 0.4,

              }}

            />

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero