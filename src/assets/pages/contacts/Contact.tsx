import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Code2,
  BriefcaseBusiness,
} from 'lucide-react'
import { HERO_THEME } from '../Theme'

gsap.registerPlugin(ScrollTrigger)

const rgba = (hex: string, alpha: number) => {
  const clean = hex.replace('#', '')
  const value = parseInt(clean, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const contactLinks = [
  {
    title: 'EMAIL',
    value: 'swagatswain2004@gmail.com',
    icon: Mail,
    color: HERO_THEME.primary,
    href: 'mailto:swagatswain2004@gmail.com',
  },
  {
    title: 'GITHUB',
    value: 'https://github.com/swagat123og',
    icon: Code2,
    color: HERO_THEME.text,
    href: 'https://github.com/swagat123og',
  },
  {
    title: 'LINKEDIN',
    value: 'linkedin.com/in/swagat-suman-swain-831621341',
    icon: BriefcaseBusiness,
    color: HERO_THEME.secondary,
    href: 'https://linkedin.com/in/swagat-suman-swain-831621341',
  },
  {
    title: 'LOCATION',
    value: 'Bhubaneswar, India',
    icon: MapPin,
    color: HERO_THEME.accent,
    href: '#',
  },
]

const Contact = () => {
  const section = useRef<HTMLElement>(null)
  const heading = useRef<HTMLDivElement>(null)
  const form = useRef<HTMLDivElement>(null)
  const line = useRef<HTMLDivElement>(null)

  const [sent, setSent] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.current,
        { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 82%',
          },
        }
      )

      gsap.fromTo(
        form.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: form.current,
            start: 'top 82%',
          },
        }
      )

      gsap.fromTo(
        line.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: section.current,
            start: 'top 70%',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    const name = formData.name.trim()
    const email = formData.email.trim()
    const subject = formData.subject.trim()
    const message = formData.message.trim()

    if (!name) {
      newErrors.name = 'Name is required.'
    } else if (name.length < 2) {
      newErrors.name = 'Name must contain at least 2 characters.'
    }

    if (!email) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!subject) {
      newErrors.subject = 'Subject is required.'
    } else if (subject.length < 3) {
      newErrors.subject = 'Subject is too short.'
    }

    if (!message) {
      newErrors.message = 'Message is required.'
    } else if (message.length < 10) {
      newErrors.message = 'Message must contain at least 10 characters.'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setSent(true)
  }

  const handleSendAgain = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setErrors({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setSent(false)
  }

  return (
    <section
      ref={section}
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-10 text-white"
      style={{ backgroundColor: HERO_THEME.background }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(${HERO_THEME.grid} 1px, transparent 1px),
              linear-gradient(90deg, ${HERO_THEME.grid} 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div
          className="absolute left-[-12%] top-[10%] h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: HERO_THEME.glowPrimary }}
        />

        <div
          className="absolute bottom-[-10%] right-[-12%] h-[550px] w-[550px] rounded-full blur-[160px]"
          style={{ backgroundColor: HERO_THEME.glowSecondary }}
        />

        <div
          className="absolute inset-0"
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

        <div
          className="absolute inset-x-0 top-0 h-[160px]"
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

      <div className="relative z-10 w-full px-[30px]">
        <div ref={heading}>
          <div className="mb-3 flex items-center gap-3">
            <span
              className="h-[2px] w-10"
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
              className="font-mono text-[9px] tracking-[.3em]"
              style={{ color: HERO_THEME.primary }}
            >
              CONTACT / 05
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
            <h2 className="text-[28px] font-light leading-[0.95] tracking-[-0.05em] sm:text-[28px] md:text-[38px] lg:text-[50px]">
              LET'S BUILD
              <br />

              <span style={{ color: 'rgba(255,255,255,0.16)' }}>
                SOMETHING
              </span>{' '}

              <span
                className="bg-clip-text text-transparent"
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
                GREAT.
              </span>
            </h2>

            <p
              className="max-w-[310px] pb-2 text-[11px] leading-6"
              style={{ color: HERO_THEME.textMuted }}
            >
              Have an idea, project or opportunity?
              Let's turn it into something useful,
              beautiful and memorable.
            </p>
          </div>

          <div
            ref={line}
            className="mt-6 h-px w-full"
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

        <div className="mt-6 grid w-full gap-3 lg:grid-cols-[1fr_1.1fr]">
          <div className="contact-grid grid w-full gap-3 sm:grid-cols-2">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="contact-card group relative min-h-[145px] w-full overflow-hidden rounded-2xl border p-4 backdrop-blur-xl"
                  style={{
                    borderColor: rgba(item.color, 0.14),
                    background: `linear-gradient(
                      145deg,
                      ${rgba(item.color, 0.035)},
                      rgba(255,255,255,0.008)
                    )`,
                  }}
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <div
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-[50px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                    style={{ backgroundColor: item.color }}
                  />

                  <div
                    className="absolute left-0 right-0 top-0 h-[2px] opacity-60"
                    style={{
                      background: `
                        linear-gradient(
                          90deg,
                          ${item.color},
                          transparent
                        )
                      `,
                    }}
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border"
                        style={{
                          color: item.color,
                          borderColor: rgba(item.color, 0.28),
                          backgroundColor: rgba(item.color, 0.05),
                          boxShadow: `0 0 18px ${rgba(
                            item.color,
                            0.06
                          )}`,
                        }}
                      >
                        <Icon size={16} strokeWidth={1.5} />
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        style={{ color: HERO_THEME.textDim }}
                      />
                    </div>

                    <div>
                      <p
                        className="font-mono text-[9px] tracking-[0.22em]"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </p>

                      <p
                        className="mt-2 truncate text-[13px] transition-colors duration-300 group-hover:text-white"
                        style={{ color: HERO_THEME.textMuted }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            ref={form}
            className="relative w-full overflow-hidden rounded-2xl border p-3 backdrop-blur-xl md:p-5"
            style={{
              borderColor: rgba(HERO_THEME.primary, 0.12),
              background: `linear-gradient(
                145deg,
                ${rgba(HERO_THEME.primary, 0.025)},
                rgba(255,255,255,0.008)
              )`,
            }}
          >
            <div
              className="absolute right-0 top-0 h-40 w-40 rounded-full blur-[70px]"
              style={{
                backgroundColor: HERO_THEME.primary,
                opacity: 0.05,
              }}
            />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p
                    className="font-mono text-[8px] tracking-[.25em]"
                    style={{ color: HERO_THEME.primary }}
                  >
                    START A CONVERSATION
                  </p>

                  <h3 className="mt-2 text-[20px] font-light tracking-tight">
                    Send me a message.
                  </h3>
                </div>

                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: HERO_THEME.primary,
                    boxShadow: `0 0 12px ${HERO_THEME.primary}`,
                  }}
                />
              </div>

              {!sent ? (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-3"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(['name', 'email'] as const).map((field) => (
                      <div key={field}>
                        <input
                          type={
                            field === 'email'
                              ? 'email'
                              : 'text'
                          }
                          placeholder={
                            field === 'email'
                              ? 'YOUR EMAIL'
                              : 'YOUR NAME'
                          }
                          value={formData[field]}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field]: e.target.value,
                            }))
                          }
                          className="h-12 w-full rounded-xl border bg-black/20 px-4 font-mono text-[10px] tracking-[.12em] text-white outline-none placeholder:text-white/20 transition-all"
                          style={{
                            borderColor: errors[field]
                              ? HERO_THEME.primary
                              : 'rgba(255,255,255,0.08)',
                          }}
                        />

                        {errors[field] && (
                          <p
                            className="mt-1 px-1 font-mono text-[9px]"
                            style={{
                              color: HERO_THEME.primary,
                            }}
                          >
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="PROJECT / SUBJECT"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }))
                      }
                      className="h-12 w-full rounded-xl border bg-black/20 px-4 font-mono text-[10px] tracking-[.12em] text-white outline-none placeholder:text-white/20 transition-all"
                      style={{
                        borderColor: errors.subject
                          ? HERO_THEME.primary
                          : 'rgba(255,255,255,0.08)',
                      }}
                    />

                    {errors.subject && (
                      <p
                        className="mt-1 px-1 font-mono text-[9px]"
                        style={{
                          color: HERO_THEME.primary,
                        }}
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="TELL ME ABOUT YOUR PROJECT..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={5}
                      className="w-full resize-none rounded-xl border bg-black/20 px-4 py-4 font-mono text-[10px] leading-5 tracking-[.12em] text-white outline-none placeholder:text-white/20 transition-all"
                      style={{
                        borderColor: errors.message
                          ? HERO_THEME.primary
                          : 'rgba(255,255,255,0.08)',
                      }}
                    />

                    {errors.message && (
                      <p
                        className="mt-1 px-1 font-mono text-[9px]"
                        style={{
                          color: HERO_THEME.primary,
                        }}
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl border font-mono text-[10px] tracking-[.2em] text-white transition-all duration-300"
                    style={{
                      borderColor: rgba(
                        HERO_THEME.primary,
                        0.4
                      ),
                      backgroundColor: rgba(
                        HERO_THEME.primary,
                        0.06
                      ),
                    }}
                  >
                    SEND MESSAGE

                    <Send
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeOut',
                  }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border"
                    style={{
                      color: HERO_THEME.primary,
                      borderColor: rgba(
                        HERO_THEME.primary,
                        0.35
                      ),
                      backgroundColor: rgba(
                        HERO_THEME.primary,
                        0.06
                      ),
                      boxShadow: `0 0 30px ${rgba(
                        HERO_THEME.primary,
                        0.12
                      )}`,
                    }}
                  >
                    <span className="text-2xl">✓</span>
                  </div>

                  <h3
                    className="text-[22px] font-light tracking-[0.02em]"
                    style={{ color: HERO_THEME.text }}
                  >
                    MESSAGE SENT
                  </h3>

                  <p
                    className="mt-3 max-w-[360px] text-[11px] leading-6"
                    style={{
                      color: HERO_THEME.textMuted,
                    }}
                  >
                    Thanks for reaching out. Your message
                    has been received successfully.
                  </p>

                  <motion.button
                    type="button"
                    onClick={handleSendAgain}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-7 flex h-11 items-center justify-center gap-3 rounded-xl border px-6 font-mono text-[9px] tracking-[.18em] text-white transition-all duration-300"
                    style={{
                      borderColor: rgba(
                        HERO_THEME.primary,
                        0.35
                      ),
                      backgroundColor: rgba(
                        HERO_THEME.primary,
                        0.05
                      ),
                    }}
                  >
                    SEND ANOTHER MESSAGE
                    <Send size={13} />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="mt-6 flex flex-col justify-between gap-2 border-t pt-3 md:flex-row md:items-center"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <p
            className="font-mono text-[8px] tracking-[.25em]"
            style={{ color: HERO_THEME.textDim }}
          >
            AVAILABLE FOR FREELANCE / COLLABORATION
          </p>

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: HERO_THEME.accent,
                boxShadow: `0 0 8px ${HERO_THEME.accent}`,
              }}
            />

            <span
              className="font-mono text-[8px] tracking-[.2em]"
              style={{
                color: HERO_THEME.textMuted,
              }}
            >
              CURRENTLY AVAILABLE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact