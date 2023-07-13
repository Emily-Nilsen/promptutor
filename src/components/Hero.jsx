import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurfuchsiaImage from '@/images/fuchsia-blur.webp'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-gray-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Never miss the cache again.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Cache every single thing your app could ever do ahead of time,
                so your code never even has to run at all.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Get started</Button>
                <Button href="/" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44 opacity-50"
                src={blurfuchsiaImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />

              <div className="bg-t flex w-full items-center justify-center">
                <div className="relative w-fit rounded-full bg-teal-500/70 ring-1 ring-white/10 backdrop-blur">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="absolute inset-0 -ml-4 -mt-4 h-52 w-52 rounded-full bg-gradient-radial from-teal-300/10 via-teal-600 to-teal-300/10 opacity-10 blur-lg" />
                    <div className="absolute inset-0 -ml-6 -mt-6 h-60 w-60 rounded-full bg-gradient-radial from-teal-300/10 via-teal-600 to-teal-300/10 opacity-10 blur-lg" />
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Promptutor/Promptutor_ball_1500x1500_mxeqyy.webp"
                      width={1500}
                      height={1500}
                      alt="Promptutor logo"
                      className="z-10 h-44 w-44 object-cover"
                    />
                    <div className="absolute -top-px left-20 right-20 h-px animate-pulse bg-gradient-to-r from-teal-300/0 via-teal-300/50 to-teal-300/0 opacity-70" />
                    <div className="absolute -bottom-px left-20 right-20 h-px animate-pulse bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0 opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
