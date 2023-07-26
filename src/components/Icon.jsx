import { useId } from 'react'
import clsx from 'clsx'

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { VideoIcon } from '@/components/icons/VideoIcon'
import { TvIcon } from '@/components/icons/TvIcon'
import { FormulaIcon } from '@/components/icons/FormulaIcon'

const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  video: VideoIcon,
  tv: TvIcon,
  formula: FormulaIcon,
}

const iconStyles = {
  teal: '[--icon-foreground:theme(colors.gray.900)] [--icon-background:theme(colors.white)]',
  fuchsia:
    '[--icon-foreground:theme(colors.gray.900)] [--icon-background:theme(colors.fuchsia.100)]',
}

export function Icon({ color = 'teal', icon, className, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  )
}

const gradients = {
  teal: [
    { stopColor: '#ccfbf1' },
    { stopColor: '#99f6e4', offset: '.527' },
    { stopColor: '#5eead4', offset: 1 },
  ],
  fuchsia: [
    { stopColor: '#f5d0fe', offset: '.08' },
    { stopColor: '#e879f9', offset: '.837' },
  ],
}

export function Gradient({ color = 'teal', ...props }) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  )
}

export function LightMode({ className, ...props }) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
