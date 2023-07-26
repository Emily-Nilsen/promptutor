import Link from 'next/link'
import Image from 'next/image'

import { Icon } from '@/components/Icon'

export function Categories({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function Category({ title, href, imageUrl }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.teal.50)),var(--quick-links-hover-bg,theme(colors.teal.50)))_padding-box,linear-gradient(to_top,theme(colors.teal.300),theme(colors.teal.300),theme(colors.teal.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.800)]" />
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt=""
          width={1456}
          height={816}
          className="object-cover"
        />
      </div>
      {/* <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-950/80 from-10% via-zinc-950/40 via-30%" /> */}
      <div className="absolute inset-0 flex items-start p-6">
        <h2 className="font-display text-base font-medium text-white dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
      </div>
    </div>
  )
}
