import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function VideoIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <path
          d="M8.81,4.51C8.25,4.18,7.55,4.16,6.98,4.48C6.41,4.8,6.06,5.4,6.06,6.06v19.88c0,0.66,0.36,1.25,0.92,1.58
          c0.56,0.32,1.27,0.31,1.82-0.03l16.27-9.94c0.54-0.33,0.86-0.92,0.86-1.54c0-0.63-0.33-1.21-0.86-1.54L8.81,4.51L8.81,4.51z
           M6.54,3.69c0.86-0.48,1.9-0.46,2.74,0.05l16.27,9.94c0.81,0.49,1.3,1.37,1.3,2.32s-0.49,1.82-1.3,2.32L9.28,28.26
          c-0.84,0.51-1.89,0.53-2.74,0.05c-0.85-0.48-1.38-1.38-1.38-2.37V6.06C5.15,5.07,5.69,4.17,6.54,3.69z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path
          d="M9.35,3.87C8.52,3.36,7.48,3.34,6.63,3.82C5.79,4.29,5.27,5.19,5.27,6.16v19.68c0,0.97,0.53,1.87,1.37,2.34
          s1.88,0.45,2.71-0.05l16.1-9.84c0.8-0.49,1.29-1.35,1.29-2.29c0-0.94-0.49-1.8-1.29-2.29L9.35,3.87z"
          fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
