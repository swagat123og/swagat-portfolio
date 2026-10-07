import { HERO_THEME } from '../Theme'

const Nav_left = () => {
  return (
    <div className="flex items-center gap-1">
      
      {/* Logo */}
      <div
        className="
          text-2xl
          font-bold
          tracking-[-0.03em]
        "
        style={{
          color: HERO_THEME.text,
        }}
      >
        SWAGAT
      </div>

      {/* .div */}
      <div
        className="
          text-2xl
          font-bold
          tracking-[-0.03em]
        "
        style={{
          color: HERO_THEME.primary,
        }}
      >
        .div
      </div>

    </div>
  )
}

export default Nav_left