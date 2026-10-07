import { useMemo, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'

import PhoneSplash from './PhoneSplash'

import {
  ArrowRight,
  Code2,
  Grid2X2,
  Heart,
  Monitor,
  Search,
  Smartphone,
  User,
  X,
} from 'lucide-react'

import { HERO_THEME } from '../Theme'


/* =========================================================
   TYPES
========================================================= */

type Category = 'All' | 'Web' | 'Mobile' | 'UI/UX'

type Project = {
  id: number
  title: string
  category: Category
  tech: string
  description: string
  icon: string
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    id: 1,
    title: 'My Shoppy',
    category: 'Mobile',
    tech: 'React Native · E-Commerce',
    description: 'Modern shopping experience',
    icon: '🛍️',
  },

  {
    id: 2,
    title: 'FitTrack',
    category: 'Mobile',
    tech: 'React Native · Health',
    description: 'Smart fitness tracking',
    icon: '❤️',
  },

  {
    id: 3,
    title: 'Zomato 2.0',
    category: 'Web',
    tech: 'MERN · Food Discovery',
    description: 'Food ordering & discovery',
    icon: '🍔',
  },

  {
    id: 4,
    title: 'Crypto Dashboard',
    category: 'Web',
    tech: 'React · API',
    description: 'Real-time crypto data',
    icon: '₿',
  },

  {
    id: 5,
    title: 'Creative UI',
    category: 'UI/UX',
    tech: 'React · GSAP',
    description: 'Experimental interface',
    icon: '✦',
  },
]


/* =========================================================
   CATEGORIES
========================================================= */

const categories: {
  name: Category
  icon: ReactNode
}[] = [
  {
    name: 'Web',
    icon: <Monitor size={11} />,
  },

  {
    name: 'Mobile',
    icon: <Smartphone size={11} />,
  },

  {
    name: 'UI/UX',
    icon: <Code2 size={11} />,
  },
]


/* =========================================================
   PHONE APP
========================================================= */

const PhoneApp = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All')

  const [activeTab, setActiveTab] = useState<
    'Home' | 'Projects' | 'Saved' | 'Profile'
  >('Home')

  const [showSplash, setShowSplash] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')

  const [favorites, setFavorites] = useState<number[]>([])

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)


  /* =======================================================
     FILTER PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    let result = projects

    if (activeCategory !== 'All') {
      result = result.filter(
        (project) =>
          project.category === activeCategory
      )
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()

      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tech.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
      )
    }

    if (activeTab === 'Saved') {
      result = result.filter((project) =>
        favorites.includes(project.id)
      )
    }

    return result
  }, [
    activeCategory,
    searchQuery,
    activeTab,
    favorites,
  ])


  /* =======================================================
     FAVORITES
  ======================================================= */

  const toggleFavorite = (
    event: MouseEvent,
    projectId: number
  ) => {
    event.stopPropagation()

    setFavorites((current) =>
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId]
    )
  }


  /* =======================================================
     CATEGORY
  ======================================================= */

  const handleCategory = (category: Category) => {
    setActiveCategory(category)

    if (activeTab !== 'Home') {
      setActiveTab('Home')
    }
  }


  /* =======================================================
     TAB
  ======================================================= */

  const handleTab = (
    tab: 'Home' | 'Projects' | 'Saved' | 'Profile'
  ) => {
    setActiveTab(tab)

    if (tab !== 'Saved') {
      setActiveCategory('All')
    }
  }


  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[29px]
        border
        text-white
      "
      style={{
        backgroundColor: HERO_THEME.background,
        borderColor: HERO_THEME.borderSecondary,
      }}
    >

      {/* ==================================================
          PHONE OPENING SCREEN
      ================================================== */}

      {showSplash && (
        <PhoneSplash
          onEnter={() => setShowSplash(false)}
        />
      )}


      {/* ==================================================
          STATUS BAR
      ================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          z-40
          h-[34px]
          px-4
          flex
          items-center
          justify-between
          text-white
          pointer-events-none
        "
      >

        <span className="text-[8px] font-semibold">
          9:41
        </span>

        <div className="flex items-center gap-1.5">

          <span className="text-[6px]">
            ▮▮▮
          </span>

          <span className="text-[6px]">
            WiFi
          </span>

          <span className="text-[7px]">
            ▰
          </span>

        </div>

      </div>


      {/* ==================================================
          SCROLLABLE APP
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-y-auto
          overscroll-contain
          px-4
          pt-11
          pb-[65px]
          scrollbar-thin
          scrollbar-thumb-white/10
          scrollbar-track-transparent
        "
        style={{
          scrollbarWidth: 'none',
        }}
      >


        {/* =================================================
            HOME
        ================================================= */}

        {activeTab === 'Home' && (
          <>

            {/* HEADER */}

            <div className="flex items-center justify-between">

              <div>

                <p
                  className="text-[9px]"
                  style={{
                    color: HERO_THEME.textSoft,
                  }}
                >
                  Hi, I'm
                </p>

                <p
                  className="text-[16px] font-semibold"
                  style={{
                    color: HERO_THEME.text,
                  }}
                >
                  Swagat 👋
                </p>

                <p
                  className="mt-0.5 text-[6px]"
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  Building digital experiences
                </p>

              </div>


              {/* PROFILE BUTTON */}

              <motion.button
                type="button"
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  text-white
                  cursor-pointer
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      135deg,
                      ${HERO_THEME.primary},
                      ${HERO_THEME.accent}
                    )
                  `,
                  boxShadow:
                    `0 0 14px ${HERO_THEME.glowButton}`,
                }}
              >
                S
              </motion.button>

            </div>


            {/* SEARCH */}

            <div
              className="
                mt-4
                h-[31px]
                rounded-lg
                border
                flex
                items-center
                px-2.5
                gap-1.5
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.08)',
                backgroundColor:
                  'rgba(255,255,255,0.03)',
              }}
            >

              <Search
                size={10}
                style={{
                  color: HERO_THEME.textDim,
                }}
              />

              <input
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search projects, skills..."
                className="
                  flex-1
                  min-w-0
                  bg-transparent
                  outline-none
                  border-none
                  text-[7px]
                  text-white
                "
                style={{
                  caretColor: HERO_THEME.primary,
                }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery('')
                  }
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  <X size={9} />
                </button>
              )}

            </div>


            {/* CATEGORIES */}

            <div className="flex gap-1.5 mt-3">

              {categories.map((category) => {

                const active =
                  activeCategory === category.name

                return (
                  <motion.button
                    key={category.name}
                    type="button"
                    onClick={() =>
                      handleCategory(category.name)
                    }
                    whileTap={{
                      scale: 0.94,
                    }}
                    animate={{
                      borderColor: active
                        ? HERO_THEME.primary
                        : 'rgba(255,255,255,0.08)',
                    }}
                    className={`
                      flex-1
                      h-[43px]
                      rounded-lg
                      border
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-1
                      cursor-pointer
                      transition-colors
                      duration-200
                    `}
                    style={{
                      backgroundColor: active
                        ? `${HERO_THEME.primary}12`
                        : 'rgba(255,255,255,0.025)',
                    }}
                  >

                    <span
                      style={{
                        color: active
                          ? HERO_THEME.primary
                          : HERO_THEME.textDim,
                      }}
                    >
                      {category.icon}
                    </span>

                    <span
                      className="text-[6px]"
                      style={{
                        color: HERO_THEME.text,
                      }}
                    >
                      {category.name}
                    </span>

                  </motion.button>
                )
              })}

            </div>


            {/* FEATURED */}

            <div className="flex items-center justify-between mt-4">

              <span
                className="text-[9px] font-semibold"
                style={{
                  color: HERO_THEME.text,
                }}
              >
                Featured Projects
              </span>

              <button
                type="button"
                onClick={() =>
                  handleTab('Projects')
                }
                className="text-[6px] cursor-pointer"
                style={{
                  color: HERO_THEME.secondary,
                }}
              >
                See all →
              </button>

            </div>


            {/* PROJECTS */}

            <div className="mt-2 space-y-2">

              {filteredProjects.length === 0 ? (

                <div
                  className="
                    py-8
                    text-center
                    text-[7px]
                  "
                  style={{
                    color: HERO_THEME.textDim,
                  }}
                >
                  No projects found
                </div>

              ) : (

                filteredProjects.map((project) => (

                  <ProjectCard
                    key={project.id}
                    project={project}
                    favorite={favorites.includes(
                      project.id
                    )}
                    onFavorite={toggleFavorite}
                    onOpen={setSelectedProject}
                  />

                ))

              )}

            </div>

          </>
        )}


        {/* =================================================
            PROJECTS
        ================================================= */}

        {activeTab === 'Projects' && (

          <div>

            <PageTitle
              title="Projects"
              subtitle="Things I've built"
            />

            <div className="mt-4 space-y-2">

              {filteredProjects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                  favorite={favorites.includes(
                    project.id
                  )}
                  onFavorite={toggleFavorite}
                  onOpen={setSelectedProject}
                />

              ))}

            </div>

          </div>

        )}


        {/* =================================================
            SAVED
        ================================================= */}

        {activeTab === 'Saved' && (

          <div>

            <PageTitle
              title="Saved"
              subtitle={`
                ${favorites.length} saved project${
                  favorites.length === 1
                    ? ''
                    : 's'
                }
              `}
            />

            <div className="mt-4 space-y-2">

              {filteredProjects.length === 0 ? (

                <div
                  className="
                    py-10
                    text-center
                  "
                >

                  <Heart
                    size={22}
                    className="mx-auto"
                    style={{
                      color: HERO_THEME.textDim,
                    }}
                  />

                  <p
                    className="mt-2 text-[8px]"
                    style={{
                      color:
                        HERO_THEME.textMuted,
                    }}
                  >
                    No saved projects yet
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      handleTab('Projects')
                    }
                    className="
                      mt-3
                      text-[7px]
                    "
                    style={{
                      color:
                        HERO_THEME.primary,
                    }}
                  >
                    Explore projects →
                  </button>

                </div>

              ) : (

                filteredProjects.map((project) => (

                  <ProjectCard
                    key={project.id}
                    project={project}
                    favorite={true}
                    onFavorite={toggleFavorite}
                    onOpen={setSelectedProject}
                  />

                ))

              )}

            </div>

          </div>

        )}


        {/* =================================================
            PROFILE
        ================================================= */}

        {activeTab === 'Profile' && (

          <div>

            <PageTitle
              title="Swagat"
              subtitle="Frontend & Mobile Developer"
            />

            <div
              className="
                mt-5
                rounded-xl
                border
                p-4
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.08)',
                backgroundColor:
                  'rgba(255,255,255,0.03)',
              }}
            >

              <div
                className="
                  mx-auto
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  font-semibold
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      135deg,
                      ${HERO_THEME.primary},
                      ${HERO_THEME.accent}
                    )
                  `,
                  boxShadow:
                    `0 0 20px ${HERO_THEME.glowButton}`,
                }}
              >
                S
              </div>

              <p
                className="
                  mt-3
                  text-center
                  text-[11px]
                  font-semibold
                "
                style={{
                  color: HERO_THEME.text,
                }}
              >
                Swagat
              </p>

              <p
                className="
                  mt-1
                  text-center
                  text-[7px]
                "
                style={{
                  color: HERO_THEME.textDim,
                }}
              >
                React · React Native · UI Engineering
              </p>

              <div className="grid grid-cols-3 gap-2 mt-5">

                <ProfileStat
                  value="10+"
                  label="Projects"
                />

                <ProfileStat
                  value="5+"
                  label="Tech"
                />

                <ProfileStat
                  value="2+"
                  label="Years"
                />

              </div>

            </div>

          </div>

        )}

      </div>


      {/* ==================================================
          PROJECT MODAL
      ================================================== */}

      {selectedProject && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            absolute
            inset-0
            z-50
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-5
          "
          style={{
            backgroundColor:
              'rgba(0,0,0,0.90)',
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            className="
              w-full
              rounded-2xl
              border
              p-4
            "
            style={{
              borderColor:
                'rgba(255,255,255,0.10)',
              backgroundColor:
                HERO_THEME.background,
            }}
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <div
                  className="
                    w-8
                    h-8
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-[14px]
                  "
                  style={{
                    backgroundColor:
                      `${HERO_THEME.primary}15`,
                    border:
                      `1px solid ${HERO_THEME.borderPrimary}`,
                  }}
                >
                  {selectedProject.icon}
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                    "
                    style={{
                      color: HERO_THEME.text,
                    }}
                  >
                    {selectedProject.title}
                  </p>

                  <p
                    className="text-[6px]"
                    style={{
                      color:
                        HERO_THEME.textDim,
                    }}
                  >
                    {selectedProject.tech}
                  </p>

                </div>

              </div>


              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                style={{
                  color:
                    HERO_THEME.textDim,
                }}
              >
                <X size={13} />
              </button>

            </div>


            <div
              className="
                mt-4
                rounded-lg
                border
                h-[100px]
                flex
                items-center
                justify-center
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.06)',
                backgroundImage: `
                  linear-gradient(
                    135deg,
                    ${HERO_THEME.primary}12,
                    ${HERO_THEME.accent}08
                  )
                `,
              }}
            >

              <Smartphone
                size={45}
                style={{
                  color:
                    HERO_THEME.primary,
                  opacity: 0.5,
                }}
              />

            </div>


            <p
              className="
                mt-3
                text-[8px]
                leading-4
              "
              style={{
                color:
                  HERO_THEME.textMuted,
              }}
            >
              {selectedProject.description}. This project
              demonstrates modern frontend development,
              responsive interfaces and interactive
              experiences.
            </p>


            <button
              type="button"
              onClick={() =>
                setSelectedProject(null)
              }
              className="
                mt-4
                w-full
                h-[32px]
                rounded-lg
                border
                text-[7px]
              "
              style={{
                borderColor:
                  HERO_THEME.borderPrimary,
                backgroundColor:
                  `${HERO_THEME.primary}0F`,
                color:
                  HERO_THEME.primary,
              }}
            >
              Close Project
            </button>

          </motion.div>

        </motion.div>

      )}


      {/* ==================================================
          BOTTOM NAV
      ================================================== */}

      <div
        className="
          absolute
          z-40
          bottom-3
          left-4
          right-4
          h-[43px]
          rounded-xl
          border
          backdrop-blur-xl
          flex
          items-center
          justify-around
        "
        style={{
          borderColor:
            'rgba(255,255,255,0.08)',
          backgroundColor:
            'rgba(9,9,9,0.95)',
        }}
      >

        <PhoneNavItem
          icon={<Grid2X2 size={12} />}
          label="Home"
          active={activeTab === 'Home'}
          onClick={() =>
            handleTab('Home')
          }
        />

        <PhoneNavItem
          icon={<Code2 size={12} />}
          label="Projects"
          active={activeTab === 'Projects'}
          onClick={() =>
            handleTab('Projects')
          }
        />

        <PhoneNavItem
          icon={<Heart size={12} />}
          label="Saved"
          active={activeTab === 'Saved'}
          onClick={() =>
            handleTab('Saved')
          }
          badge={favorites.length}
        />

        <PhoneNavItem
          icon={<User size={12} />}
          label="Profile"
          active={activeTab === 'Profile'}
          onClick={() =>
            handleTab('Profile')
          }
        />

      </div>

    </div>
  )
}


/* =========================================================
   PROJECT CARD
========================================================= */

type ProjectCardProps = {
  project: Project
  favorite: boolean
  onFavorite: (
    event: MouseEvent,
    projectId: number
  ) => void
  onOpen: (project: Project) => void
}


const ProjectCard = ({
  project,
  favorite,
  onFavorite,
  onOpen,
}: ProjectCardProps) => {

  return (
    <motion.div
      layout
      whileTap={{
        scale: 0.98,
      }}
      onClick={() =>
        onOpen(project)
      }
      className="
        rounded-lg
        border
        p-2
        cursor-pointer
      "
      style={{
        borderColor:
          'rgba(255,255,255,0.08)',
        backgroundColor:
          'rgba(255,255,255,0.035)',
      }}
    >

      <div className="flex items-center gap-2">

        <div
          className="
            w-6
            h-6
            rounded-md
            flex
            items-center
            justify-center
            text-[11px]
          "
          style={{
            backgroundColor:
              `${HERO_THEME.primary}12`,
            border:
              `1px solid ${HERO_THEME.borderPrimary}`,
          }}
        >
          {project.icon}
        </div>


        <div className="flex-1 min-w-0">

          <p
            className="
              text-[8px]
              font-medium
              truncate
            "
            style={{
              color: HERO_THEME.text,
            }}
          >
            {project.title}
          </p>

          <p
            className="
              text-[5px]
              truncate
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            {project.tech}
          </p>

        </div>


        <button
          type="button"
          onClick={(event) =>
            onFavorite(
              event,
              project.id
            )
          }
          className="p-1"
        >

          <Heart
            size={10}
            style={{
              color: favorite
                ? HERO_THEME.primary
                : HERO_THEME.textDim,

              fill: favorite
                ? HERO_THEME.primary
                : 'transparent',
            }}
          />

        </button>


        <ArrowRight
          size={10}
          style={{
            color:
              HERO_THEME.textDim,
          }}
        />

      </div>


      <div
        className="
          mt-2
          h-[61px]
          rounded-md
          border
          flex
          items-center
          justify-between
          px-2
          overflow-hidden
        "
        style={{
          backgroundImage: `
            linear-gradient(
              135deg,
              ${HERO_THEME.primary}10,
              ${HERO_THEME.accent}08
            )
          `,
          borderColor:
            'rgba(255,255,255,0.05)',
        }}
      >

        <div>

          <p
            className="
              text-[8px]
              font-medium
            "
            style={{
              color:
                HERO_THEME.text,
            }}
          >
            {project.description}
          </p>

          <p
            className="
              mt-0.5
              text-[5px]
            "
            style={{
              color:
                HERO_THEME.textDim,
            }}
          >
            {project.category} experience
          </p>


          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onOpen(project)
            }}
            className="
              mt-1.5
              px-1.5
              py-0.5
              rounded
              border
              text-[5px]
            "
            style={{
              borderColor:
                HERO_THEME.borderPrimary,
              color:
                HERO_THEME.primary,
              backgroundColor:
                `${HERO_THEME.primary}08`,
            }}
          >
            View Project
          </button>

        </div>


        <div
          className="
            w-[40px]
            h-[48px]
            rounded-md
            border
            rotate-[5deg]
            flex
            items-center
            justify-center
          "
          style={{
            borderColor:
              'rgba(255,255,255,0.10)',
            backgroundColor:
              '#080808',
          }}
        >

          <Smartphone
            size={19}
            style={{
              color:
                HERO_THEME.primary,
              opacity: 0.6,
            }}
          />

        </div>

      </div>

    </motion.div>
  )
}


/* =========================================================
   PAGE TITLE
========================================================= */

const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {

  return (
    <div>

      <p
        className="text-[8px] font-mono"
        style={{
          color:
            HERO_THEME.textDim,
        }}
      >
        PORTFOLIO
      </p>

      <h2
        className="
          mt-1
          text-[20px]
          font-semibold
        "
        style={{
          color:
            HERO_THEME.text,
        }}
      >
        {title}
      </h2>

      <p
        className="mt-1 text-[7px]"
        style={{
          color:
            HERO_THEME.textDim,
        }}
      >
        {subtitle}
      </p>

    </div>
  )
}


/* =========================================================
   PROFILE STAT
========================================================= */

const ProfileStat = ({
  value,
  label,
}: {
  value: string
  label: string
}) => {

  return (
    <div
      className="
        rounded-lg
        border
        p-2
        text-center
      "
      style={{
        borderColor:
          'rgba(255,255,255,0.06)',
        backgroundColor:
          'rgba(255,255,255,0.025)',
      }}
    >

      <p
        className="
          text-[12px]
          font-semibold
        "
        style={{
          color:
            HERO_THEME.primary,
        }}
      >
        {value}
      </p>

      <p
        className="mt-1 text-[6px]"
        style={{
          color:
            HERO_THEME.textDim,
        }}
      >
        {label}
      </p>

    </div>
  )
}


/* =========================================================
   BOTTOM NAV ITEM
========================================================= */

const PhoneNavItem = ({
  icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: ReactNode
  label: string
  active: boolean
  onClick: () => void
  badge?: number
}) => {

  return (
    <motion.button
      type="button"
      whileTap={{
        scale: 0.9,
      }}
      onClick={onClick}
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        gap-0.5
        w-[45px]
        h-[38px]
        cursor-pointer
      "
    >

      <span
        style={{
          color: active
            ? HERO_THEME.primary
            : HERO_THEME.textDim,
        }}
      >
        {icon}
      </span>


      <span
        className="
          text-[5px]
        "
        style={{
          color: active
            ? HERO_THEME.primary
            : HERO_THEME.textDim,
        }}
      >
        {label}
      </span>


      {badge !== undefined &&
        badge > 0 && (

          <span
            className="
              absolute
              top-1
              right-1
              min-w-[10px]
              h-[10px]
              px-0.5
              rounded-full
              text-[5px]
              font-bold
              flex
              items-center
              justify-center
            "
            style={{
              backgroundColor:
                HERO_THEME.primary,
              color:
                HERO_THEME.background,
            }}
          >
            {badge}
          </span>

        )}

    </motion.button>
  )
}


export default PhoneApp