import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.teal.50)),var(--quick-links-hover-bg,theme(colors.teal.50)))_padding-box,linear-gradient(to_top,theme(colors.teal.300),theme(colors.teal.300),theme(colors.teal.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="h-8 w-8" />
        <h2 className="mt-4 font-display text-base font-medium text-gray-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
