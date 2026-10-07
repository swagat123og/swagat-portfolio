import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { HERO_THEME } from '../Theme'

const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
  { label: 'Blog', id: 'blog' },
]

const Nav_mobile = () => {
  const [open, setOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!menuRef.current) return

    if (open) {
      gsap.set(menuRef.current, {
        display: 'block',
      })

      gsap.fromTo(
        menuRef.current,
        {
          y: -25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        }
      )

      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          {
            y: -12,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            delay: 0.08,
            ease: 'power2.out',
          }
        )
      }
    } else {
      gsap.to(menuRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, {
              display: 'none',
            })
          }
        },
      })
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleNavigation = (id: string) => {
    setOpen(false)

    if (id === 'home') {
      if (location.pathname !== '/') {
        navigate('/', {
          state: {
            scrollTo: 'home',
          },
        })
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }

      return
    }

    if (location.pathname !== '/') {
      navigate('/')

      setTimeout(() => {
        const element = document.getElementById(id)

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 88,
            behavior: 'smooth',
          })
        }
      }, 300)

      return
    }

    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 88,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="hidden max-[1024px]:block">
      {/* MENU BUTTON */}

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          transition-all
          duration-300
          max-[425px]:h-9
          max-[425px]:w-9
          max-[320px]:h-8
          max-[320px]:w-8
        "
        style={{
          borderColor: open
            ? HERO_THEME.primary
            : HERO_THEME.borderPrimary,
          background: open
            ? 'rgba(255,38,0,0.08)'
            : 'rgba(255,255,255,0.02)',
          color: open
            ? HERO_THEME.primary
            : HERO_THEME.text,
          boxShadow: open
            ? `0 0 18px ${HERO_THEME.glowButton}`
            : 'none',
        }}
      >
        {open ? (
          <X size={20} className="max-[425px]:size-[18px]" />
        ) : (
          <Menu size={20} className="max-[425px]:size-[18px]" />
        )}
      </button>

      {/* SLIDER MENU */}

      <div
        ref={menuRef}
        className="
          fixed
          left-0
          top-[88px]
          z-40
          hidden
          w-full
          border-b
          backdrop-blur-xl
          max-[768px]:top-[76px]
          max-[425px]:top-[68px]
          max-[320px]:top-[64px]
        "
        style={{
          background: 'rgba(3,3,3,0.97)',
          borderColor: HERO_THEME.borderPrimary,
        }}
      >
        <div
          ref={itemsRef}
          className="
            mx-auto
            flex
            max-w-[500px]
            flex-col
            px-8
            py-8
            max-[425px]:px-6
            max-[425px]:py-6
            max-[320px]:px-4
            max-[320px]:py-5
          "
        >
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                py-4
                text-left
                transition-all
                duration-300
                max-[425px]:py-3
                max-[320px]:py-2.5
              "
              style={{
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.18em]
                    max-[320px]:text-[8px]
                  "
                  style={{
                    color: HERO_THEME.primary,
                  }}
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[0.14em]
                    transition-colors
                    duration-300
                    group-hover:text-[#FF2600]
                    max-[425px]:text-xs
                    max-[320px]:text-[11px]
                  "
                  style={{
                    color: HERO_THEME.text,
                  }}
                >
                  {item.label.toUpperCase()}
                </span>
              </div>

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                style={{
                  color: HERO_THEME.primary,
                }}
              >
                →
              </span>
            </button>
          ))}

          {/* MOBILE CTA */}

          <button
            onClick={() => handleNavigation('contact')}
            className="
              mt-6
              h-12
              rounded-lg
              border
              font-mono
              text-[10px]
              font-semibold
              tracking-[0.16em]
              transition-all
              duration-300
              hover:bg-[#FF2600]
              hover:text-black
              max-[425px]:h-11
              max-[425px]:text-[9px]
              max-[320px]:mt-5
            "
            style={{
              borderColor: HERO_THEME.primary,
              color: HERO_THEME.primary,
              background: 'rgba(255,38,0,0.04)',
            }}
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav_mobile