import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { YoutubeVideo } from './YoutubeVideo'
import Link from 'next/link'

export function Videos({ children }) {
  return (
    <div className="not-prose mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function Video({ title, description, href }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pt-5">
      <div className="relative aspect-video w-full rounded-2xl object-cover">
        <YoutubeVideo publicId={href} />
      </div>
      <div className="flex h-full w-full flex-col justify-end">
        <h3 className="mt-1 text-base font-semibold leading-8 tracking-tight text-gray-900 dark:text-white sm:mt-2">
          {title}
        </h3>
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
