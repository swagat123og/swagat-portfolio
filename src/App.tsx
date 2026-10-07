import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './assets/pages/navbar/Nav'
import WebsiteIntro from './assets/intro/WebsiteIntro'
import School from './assets/pages/about/School'
import Home from './assets/pages/Home'
import About from './assets/pages/about/About'
import Skills from './assets/pages/skills/skill'
import Experience from './assets/pages/experiences/Experience'
import Project from './assets/pages/projects/Project'
import Contact from './assets/pages/contacts/Contact'
import Blog from './assets/pages/blog/Blog'
import College from './assets/pages/about/College'
import Company from './assets/pages/about/Company'
import { HERO_THEME } from './assets/pages/Theme'
import ScrollToTop from './assets/ScrollToTop'
import SkillCraft from './assets/pages/experiences/SkillCraft'
import Cognifyz from './assets/pages/experiences/Cognifyz'
import Accenture from './assets/pages/experiences/Accenture'
import Idea from './assets/pages/blog/Idea'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <BrowserRouter>

    <ScrollToTop/>
        <div
        className="
          relative
          min-h-screen
          w-full
          max-w-full
          overflow-x-hidden
          text-white
        "
        style={{
          backgroundColor:
            HERO_THEME.background,
        }}
      >

        {/* =================================================
            GLOBAL BACKGROUND
        ================================================= */}

        <div className="pointer-events-none fixed inset-0 z-0">

          {/* =================================================
              SUBTLE GRID
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
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


          {/* =================================================
              RED ATMOSPHERIC GLOW
          ================================================= */}

          <div
            className="
              absolute
              left-[-12%]
              top-[8%]
              h-[650px]
              w-[650px]
              rounded-full
              blur-[170px]
            "
            style={{
              backgroundColor:
                HERO_THEME.glowPrimary,
            }}
          />


          {/* =================================================
              ORANGE ATMOSPHERIC GLOW
          ================================================= */}

          <div
            className="
              absolute
              right-[-14%]
              top-[30%]
              h-[700px]
              w-[700px]
              rounded-full
              blur-[180px]
            "
            style={{
              backgroundColor:
                HERO_THEME.glowSecondary,
            }}
          />


          {/* =================================================
              CENTER DEPTH
          ================================================= */}

          <div
            className="
              absolute
              inset-0
            "
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  transparent 25%,
                  rgba(0,0,0,0.55) 100%
                )
              `,
            }}
          />


          {/* =================================================
              TOP DEPTH
          ================================================= */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[220px]
              bg-gradient-to-b
              from-black
              to-transparent
            "
          />


          {/* =================================================
              BOTTOM DEPTH
          ================================================= */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[220px]
              bg-gradient-to-t
              from-black
              to-transparent
            "
          />

        </div>


        {/* =================================================
            WEBSITE INTRO
        ================================================= */}

        {showIntro && (
          <WebsiteIntro
            onComplete={() =>
              setShowIntro(false)
            }
          />
        )}


        {/* =================================================
            NAVBAR
        ================================================= */}

        <Nav />


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main
          id="page-content"
          className="
            relative
            z-10
            pt-[28px]
          "
        >

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/skills"
              element={<Skills />}
            />

            <Route
              path="/experience"
              element={<Experience />}
            />

            <Route
              path="/projects"
              element={<Project />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route path="/school" element={<School />} />
            <Route path="/college" element={<College />} />
            <Route path="/company" element={<Company />} />

            <Route path="/skillcraft" element={<SkillCraft />} />
            <Route path="/cognifyz" element={<Cognifyz />} />
            <Route path="/accenture" element={<Accenture />} />
            <Route path="/ideas" element={<Idea />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  )
}

export default App