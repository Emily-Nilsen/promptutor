import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function FormulaIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={20} r={12} fill={`url(#${id}-gradient)`} />

        <path
          d="M20.48,14.72c-0.31-0.51-0.48-1.09-0.48-1.68V3.97h1.2c0.22,0,0.4-0.18,0.4-0.4s-0.18-0.4-0.4-0.4h-1.2h-0.8h-6.41h-0.8
          h-1.2c-0.22,0-0.4,0.18-0.4,0.4s0.18,0.4,0.4,0.4h1.2v9.06c0,0.59-0.17,1.18-0.48,1.68l-6.22,8.81c-0.34,0.55-0.52,1.18-0.52,1.82
          c0,1.92,1.56,3.48,3.48,3.48h15.49c1.92,0,3.48-1.56,3.48-3.48c0-0.64-0.18-1.27-0.52-1.82L20.48,14.72z M12.79,3.97h6.41v9.06
          c0,0.74,0.21,1.47,0.6,2.1c0.01,0.02,0.02,0.03,0.03,0.04l2.84,4.03H9.33l2.85-4.03c0.01-0.02,0.02-0.03,0.03-0.04
          c0.39-0.63,0.6-1.36,0.6-2.1L12.79,3.97L12.79,3.97z M26.04,23.97c0.25,0.42,0.39,0.9,0.39,1.38c0,1.48-1.2,2.68-2.68,2.68H8.25
          c-1.48,0-2.68-1.2-2.68-2.68c0-0.49,0.14-0.97,0.39-1.38l2.8-3.96h0.03h14.43h0.03L26.04,23.97z"
          fillOpacity={0.5}
          stroke="currentColor"
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.45,12.85c0,1.1-0.31,2.18-0.88,3.12l-2.11,3.43h11.09l-2.11-3.43c-0.58-0.94-0.88-2.02-0.88-3.12V4.94h-5.11V12.85z
          M21.11,4.94v7.91c0,0.63,0.18,1.25,0.51,1.78l5.75,9.36c0.36,0.58,0.55,1.25,0.55,1.94c0,2.04-1.65,3.69-3.69,3.69H7.78
         c-2.04,0-3.69-1.65-3.69-3.69c0-0.68,0.19-1.35,0.55-1.94l5.75-9.35c0.33-0.54,0.51-1.15,0.51-1.78V4.94h-0.43
         c-0.71,0-1.28-0.57-1.28-1.28s0.57-1.28,1.28-1.28h2.13h6.81h2.13c0.71,0,1.28,0.57,1.28,1.28s-0.57,1.28-1.28,1.28H21.11z"
          fill={`url(#${id}-gradient-dark)`}
        />
      </DarkMode>
    </>
  )
}
