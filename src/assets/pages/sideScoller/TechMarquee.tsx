import { HERO_THEME } from '../Theme'

type Tech = {
  name: string
  icon: string
}


/* =====================================================
   FRONTEND / MOBILE
===================================================== */

const frontendTech: Tech[] = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'GSAP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  },
]


/* =====================================================
   BACKEND / DATABASE
===================================================== */

const backendTech: Tech[] = [
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
]


/* =====================================================
   INFINITE LOOPS
===================================================== */

const frontendLoop = [
  ...frontendTech,
  ...frontendTech,
]

const backendLoop = [
  ...backendTech,
  ...backendTech,
]


/* =====================================================
   TECH CARD
===================================================== */

const TechCard = ({
  tech,
  index,
  lane,
}: {
  tech: Tech
  index: number
  lane: 'FRONTEND' | 'BACKEND'
}) => {
  return (
    <div
      className="
        tech-card
        group
        relative
        flex
        h-[82px]
        min-w-[185px]
        shrink-0
        items-center
        gap-4
        overflow-hidden
        border
        px-5
        backdrop-blur-xl
        transition-all
        duration-300
      "
      style={{
        '--primary': HERO_THEME.primary,
        '--secondary': HERO_THEME.secondary,
        '--accent': HERO_THEME.accent,

        background: `
          linear-gradient(
            135deg,
            color-mix(
              in srgb,
              ${HERO_THEME.background} 92%,
              ${HERO_THEME.primary} 8%
            ),
            color-mix(
              in srgb,
              ${HERO_THEME.background} 97%,
              ${HERO_THEME.accent} 3%
            )
          )
        `,

        borderColor: 'rgba(255,255,255,0.08)',

        boxShadow:
          `inset 0 0 25px ${HERO_THEME.glowPrimary}`,
      } as React.CSSProperties}
    >

      {/* =================================================
          TOP RED EDGE
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
              transparent,
              ${HERO_THEME.primary},
              ${HERO_THEME.accent},
              transparent
            )
          `,
          opacity: 0.65,
        }}
      />


      {/* =================================================
          ANGULAR ACCENT
      ================================================= */}

      <div
        className="
          absolute
          right-[-18px]
          top-[-30px]
          h-[75px]
          w-[75px]
          rotate-45
          opacity-20
        "
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 35%,
              ${HERO_THEME.primary} 36%,
              ${HERO_THEME.accent} 65%,
              transparent 66%
            )
          `,
        }}
      />


      {/* =================================================
          INDEX
      ================================================= */}

      <span
        className="
          absolute
          right-3
          top-2
          font-mono
          text-[6px]
          tracking-[0.15em]
        "
        style={{
          color: HERO_THEME.primary,
          opacity: 0.5,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>


      {/* =================================================
          ICON
      ================================================= */}

      <div
        className="
          relative
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          border
          bg-black/50
        "
        style={{
          borderColor:
            'rgba(255,255,255,0.08)',

          boxShadow:
            `0 0 15px ${HERO_THEME.glowPrimary}`,
        }}
      >

        {/* ICON RED FRAME */}

        <div
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

        <img
          src={tech.icon}
          alt={tech.name}
          className="
            h-6
            w-6
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="min-w-0">

        <p
          className="
            truncate
            text-[13px]
            font-bold
            uppercase
            tracking-[0.02em]
          "
          style={{
            color: HERO_THEME.text,
          }}
        >
          {tech.name}
        </p>


        <div className="mt-1 flex items-center gap-2">

          <span
            className="
              h-[3px]
              w-[18px]
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

          <p
            className="
              font-mono
              text-[6px]
              font-semibold
              tracking-[0.18em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            {lane}
          </p>

        </div>

      </div>


      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-5
          h-[2px]
          w-0
          transition-all
          duration-300
          group-hover:w-[55px]
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

    </div>
  )
}


/* =====================================================
   TECH LANE
===================================================== */

const TechLane = ({
  items,
  direction,
  lane,
}: {
  items: Tech[]
  direction: 'left' | 'right'
  lane: 'FRONTEND' | 'BACKEND'
}) => {

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
      "
    >

      {/* =================================================
          LEFT VIGNETTE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-full
          w-32
        "
        style={{
          background: `
            linear-gradient(
              to right,
              ${HERO_THEME.background},
              transparent
            )
          `,
        }}
      />


      {/* =================================================
          RIGHT VIGNETTE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-30
          h-full
          w-32
        "
        style={{
          background: `
            linear-gradient(
              to left,
              ${HERO_THEME.background},
              transparent
            )
          `,
        }}
      />


      {/* =================================================
          MOVING CONTENT
      ================================================= */}

      <div
        className={`
          flex
          w-max
          gap-4
          py-2.5
          ${
            direction === 'left'
              ? 'animate-marquee-left'
              : 'animate-marquee-right'
          }
        `}
      >

        {items.map((tech, index) => (

          <TechCard
            key={`${tech.name}-${index}`}
            tech={tech}
            index={index % 10}
            lane={lane}
          />

        ))}

      </div>

    </div>
  )
}


/* =====================================================
   RAIL
===================================================== */

const Rail = ({
  position,
  secondary = false,
}: {
  position: 'top' | 'bottom'
  secondary?: boolean
}) => {

  const color = secondary
    ? HERO_THEME.secondary
    : HERO_THEME.primary

  return (
    <div
      className={`
        absolute
        left-0
        right-0
        h-px
        ${
          position === 'top'
            ? 'top-0'
            : 'bottom-0'
        }
      `}
      style={{
        background: `
          linear-gradient(
            90deg,
            transparent 0%,
            ${color} 20%,
            ${HERO_THEME.accent} 50%,
            ${color} 80%,
            transparent 100%
          )
        `,
        opacity:
          position === 'top'
            ? 0.55
            : 0.35,

        boxShadow:
          `0 0 12px ${color}`,
      }}
    />
  )
}


/* =====================================================
   SECTION LABEL
===================================================== */

const SectionLabel = ({
  number,
  title,
  side,
}: {
  number: string
  title: string
  side: 'left' | 'right'
}) => {

  return (
    <div
      className={`
        relative
        z-20
        flex
        items-center
        gap-3
        ${
          side === 'right'
            ? 'justify-end'
            : 'justify-start'
        }
      `}
    >

      <span
        className="
          font-mono
          text-[7px]
          font-bold
          tracking-[0.25em]
        "
        style={{
          color:
            HERO_THEME.primary,
        }}
      >
        {number}
      </span>


      <span
        className="
          h-px
          w-8
        "
        style={{
          background:
            HERO_THEME.primary,
        }}
      />


      <span
        className="
          font-mono
          text-[7px]
          font-bold
          tracking-[0.25em]
        "
        style={{
          color:
            HERO_THEME.textMuted,
        }}
      >
        {title}
      </span>

    </div>
  )
}


/* =====================================================
   MAIN TECH MARQUEE
===================================================== */

const TechMarquee = () => {

  return (
    <section
  className="
    relative
    w-full
    overflow-hidden
    pt-16
    pb-7
    text-white
  "
  style={{
    backgroundColor: HERO_THEME.background,
  }}
>

      {/* =================================================
          GLOBAL BACKGROUND
      ================================================= */}

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


        {/* LEFT RED ATMOSPHERE */}

        <div
          className="
            absolute
            left-[-18%]
            top-[-80px]
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


        {/* RIGHT ORANGE ATMOSPHERE */}

        <div
          className="
            absolute
            bottom-[-160px]
            right-[-12%]
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
                transparent 20%,
                ${HERO_THEME.background} 100%
              )
            `,
          }}
        />

      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-4
          flex
          max-w-[1500px]
          items-center
          justify-between
          px-5
          xl:px-10
        "
      >

        <SectionLabel
          number="01"
          title="FRONTEND / MOBILE"
          side="left"
        />


        <div
          className="
            hidden
            items-center
            gap-2
            sm:flex
          "
        >

          <span
            className="
              h-[5px]
              w-[5px]
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
              tracking-[0.18em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            TECH STACK // ACTIVE
          </span>

        </div>

      </div>


      {/* =================================================
          FRONTEND LANE
      ================================================= */}

      <div className="relative z-10">

        <Rail position="top" />

        <TechLane
          items={frontendLoop}
          direction="left"
          lane="FRONTEND"
        />

        <Rail
          position="bottom"
        />

      </div>


      {/* =================================================
          CENTER DIVIDER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          my-4
          flex
          max-w-[1500px]
          items-center
          gap-4
          px-5
          xl:px-10
        "
      >

        <div
          className="h-px flex-1"
          style={{
            background:
              `linear-gradient(
                to right,
                transparent,
                ${HERO_THEME.primary}
              )`,
            opacity: 0.2,
          }}
        />

        <span
          className="
            font-mono
            text-[6px]
            tracking-[0.3em]
          "
          style={{
            color:
              HERO_THEME.primary,
          }}
        >
          // CORE
        </span>

        <div
          className="h-px flex-1"
          style={{
            background:
              `linear-gradient(
                to left,
                transparent,
                ${HERO_THEME.secondary}
              )`,
            opacity: 0.2,
          }}
        />

      </div>


      {/* =================================================
          BACKEND HEADER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-4
          flex
          max-w-[1500px]
          items-center
          justify-between
          px-5
          xl:px-10
        "
      >

        <div
          className="
            hidden
            items-center
            gap-2
            sm:flex
          "
        >

          <span
            className="
              font-mono
              text-[6px]
              tracking-[0.18em]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            SERVER // DATABASE // TOOLS
          </span>

        </div>


        <SectionLabel
          number="02"
          title="BACKEND / DATABASE"
          side="right"
        />

      </div>


      {/* =================================================
          BACKEND LANE
      ================================================= */}

      <div className="relative z-10">

        <Rail
          position="top"
          secondary
        />

        <TechLane
          items={backendLoop}
          direction="right"
          lane="BACKEND"
        />

        <Rail
          position="bottom"
          secondary
        />

      </div>


      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[80px]
          w-[70%]
          -translate-x-1/2
          rounded-full
          blur-[60px]
        "
        style={{
          backgroundColor:
            HERO_THEME.glowPrimary,
        }}
      />

    </section>
  )
}


export default TechMarquee