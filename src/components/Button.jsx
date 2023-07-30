import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-teal-300 py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-teal-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300/50 active:bg-teal-500 transition-all duration-300 ease-in-out',
  secondary:
    'rounded-full bg-white py-2 px-4 text-sm font-medium text-gray-950 hover:bg-white/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300/50 active:text-gray-900 transition-all duration-300 ease-in-out',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
