/* =========================================================
   GLOBAL PORTFOLIO THEME
   Change colors here to change the entire visual theme
========================================================= */

export const HERO_THEME = {
  /* =======================================================
     BASE
  ======================================================= */

  background: '#030303',


  /* =======================================================
     MAIN COLORS
  ======================================================= */

  primary: '#FF2600',
  secondary: '#FF4A00',
  accent: '#FF8500',

  /* Dark primary used for gradients/buttons */
  primaryDark: '#B91600',


  /* =======================================================
     TEXT
  ======================================================= */

  text: '#FFFFFF',
  textMuted: '#8A8A8A',
  textDim: '#666666',
  textSoft: '#A5A5A5',


  /* =======================================================
     BACKGROUND / GRID
  ======================================================= */

  grid: 'rgba(255,60,20,0.5)',

  glowPrimary: 'rgba(255,30,0,0.07)',
  glowSecondary: 'rgba(255,106,0,0.055)',
  glowCenter: 'rgba(217,0,0,0.025)',


  /* =======================================================
     BORDERS
  ======================================================= */

  borderPrimary: 'rgba(255,42,10,0.30)',
  borderSecondary: 'rgba(255,61,26,0.25)',


  /* =======================================================
     GLOW / SHADOW
  ======================================================= */

  glowButton: 'rgba(255,55,10,0.45)',
  glowPhone: 'rgba(255,35,0,0.25)',
} as const


/* =========================================================
   OPTIONAL GLOBAL COLORS
   Use these in other sections later
========================================================= */

export const COLORS = {
  black: '#030303',
  white: '#FFFFFF',

  primary: HERO_THEME.primary,
  secondary: HERO_THEME.secondary,
  accent: HERO_THEME.accent,

  muted: HERO_THEME.textMuted,
  dim: HERO_THEME.textDim,
} as const