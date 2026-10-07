import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Don't reset scroll when returning from Ideas
    const restoreBlogScroll =
      sessionStorage.getItem('restoreBlogScroll')

    if (pathname === '/' && restoreBlogScroll === 'true') {
      const savedPosition = sessionStorage.getItem(
        'blogScrollPosition'
      )

      sessionStorage.removeItem('restoreBlogScroll')

      if (savedPosition) {
        const position = Number(savedPosition)

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: position,
              behavior: 'instant',
            })
          })
        })

        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop