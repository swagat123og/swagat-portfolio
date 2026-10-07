// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const sections = [
//   { id: 'home', label: 'HOME', number: '01' },
//   { id: 'about', label: 'ABOUT', number: '02' },
//   { id: 'skills', label: 'SKILLS', number: '03' },
//   { id: 'experience', label: 'EXPERIENCE', number: '04' },
//   { id: 'projects', label: 'PROJECTS', number: '05' },
//   { id: 'contact', label: 'CONTACT', number: '06' },
//   { id: 'blog', label: 'BLOG', number: '07' },
// ]

// const PageScroller = () => {
//   const [activeSection, setActiveSection] = useState('home')
//   const [isScrolling, setIsScrolling] = useState(false)

//   useEffect(() => {
//     let scrollTimeout: ReturnType<typeof setTimeout>

//     const handleScroll = () => {
//       setIsScrolling(true)

//       clearTimeout(scrollTimeout)

//       scrollTimeout = setTimeout(() => {
//         setIsScrolling(false)
//       }, 900)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       clearTimeout(scrollTimeout)
//     }
//   }, [])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       sections.forEach((section) => {
//         ScrollTrigger.create({
//           trigger: `#${section.id}`,
//           start: 'top center',
//           end: 'bottom center',

//           onEnter: () => {
//             setActiveSection(section.id)
//           },

//           onEnterBack: () => {
//             setActiveSection(section.id)
//           },
//         })
//       })

//       ScrollTrigger.refresh()
//     })

//     return () => {
//       ctx.revert()
//     }
//   }, [])

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)

//     if (!element) return

//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     })
//   }

//   return (
//     <motion.aside
//       initial={{
//         opacity: 0,
//         x: 20,
//       }}
//       animate={{
//         opacity: isScrolling ? 1 : 0,
//         x: isScrolling ? 0 : 20,
//       }}
//       transition={{
//         duration: 0.35,
//         ease: 'easeOut',
//       }}
//       className="
//         fixed
//         top-[88px]
//         right-5
//         bottom-5
//         z-40
//         w-[120px]
//         pointer-events-none
//       "
//     >
//       <div className="relative w-full h-full">

//         {/* BACKGROUND LINE */}

//         <div
//           className="
//             absolute
//             top-5
//             bottom-5
//             right-[42px]
//             w-[1px]
//             bg-white/[0.12]
//           "
//         />

//         {/* CYAN LINE */}

//         <div
//           className="
//             absolute
//             top-5
//             bottom-5
//             right-[42px]
//             w-[2px]
//             bg-[#00D9FF]/30
//           "
//         />

//         {/* SECTION POINTS */}

//         <div
//           className="
//             absolute
//             inset-0
//             flex
//             flex-col
//             justify-between
//             py-5
//           "
//         >
//           {sections.map((section) => {
//             const isActive = activeSection === section.id

//             return (
//               <div
//                 key={section.id}
//                 className="
//                   relative
//                   flex
//                   items-center
//                   justify-end
//                   pointer-events-auto
//                 "
//               >

//                 {/* LABEL */}

//                 <motion.button
//                   type="button"
//                   onClick={() => scrollToSection(section.id)}
//                   animate={{
//                     opacity: isActive ? 1 : 0.38,
//                     x: isActive ? -5 : 0,
//                   }}
//                   whileHover={{
//                     opacity: 1,
//                     x: -8,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: 'easeOut',
//                   }}
//                   className="
//                     absolute
//                     right-[70px]
//                     whitespace-nowrap
//                     bg-transparent
//                     border-none
//                     outline-none
//                     text-[9px]
//                     font-mono
//                     tracking-[0.16em]
//                     text-[#99A6B8]
//                     cursor-pointer
//                   "
//                 >
//                   {section.label}
//                 </motion.button>

//                 {/* POINT */}

//                 <motion.button
//                   type="button"
//                   onClick={() => scrollToSection(section.id)}
//                   aria-label={`Go to ${section.label}`}
//                   animate={{
//                     scale: isActive ? 1.15 : 1,
//                   }}
//                   whileHover={{
//                     scale: isActive ? 1.2 : 1.08,
//                   }}
//                   whileTap={{
//                     scale: 0.95,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: 'easeOut',
//                   }}
//                   className="
//                     relative
//                     w-[30px]
//                     h-[30px]
//                     flex
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-transparent
//                     border-none
//                     outline-none
//                     cursor-pointer
//                   "
//                 >

//                   {/* ACTIVE PULSE */}

//                   {isActive && (
//                     <motion.span
//                       initial={{
//                         scale: 0.8,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         opacity: [0.6, 0, 0.6],
//                       }}
//                       transition={{
//                         duration: 1.8,
//                         repeat: Infinity,
//                         ease: 'easeOut',
//                       }}
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                         border
//                         border-[#00D9FF]
//                       "
//                     />
//                   )}

//                   {/* POINT */}

//                   <motion.span
//                     animate={{
//                       width: isActive ? 12 : 8,
//                       height: isActive ? 12 : 8,
//                     }}
//                     transition={{
//                       duration: 0.2,
//                       ease: 'easeOut',
//                     }}
//                     className={`
//                       relative
//                       z-10
//                       rounded-full
//                       border

//                       ${
//                         isActive
//                           ? `
//                             bg-[#00D9FF]
//                             border-[#00D9FF]
//                             shadow-[0_0_14px_rgba(0,217,255,0.95)]
//                           `
//                           : `
//                             bg-[#06070B]
//                             border-white/30
//                           `
//                       }
//                     `}
//                   />

//                   {/* NUMBER */}

//                   <span
//                     className={`
//                       absolute
//                       left-[27px]
//                       text-[8px]
//                       font-mono
//                       tracking-wider

//                       ${
//                         isActive
//                           ? 'text-[#00D9FF]'
//                           : 'text-white/25'
//                       }
//                     `}
//                   >
//                     {section.number}
//                   </span>

//                 </motion.button>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </motion.aside>
//   )
// }

// export default PageScroller