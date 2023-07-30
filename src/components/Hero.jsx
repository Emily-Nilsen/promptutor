import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurFuchsiaImage from '@/images/fuchsia-blur.webp'
import robotsSmellingFlowers from '@/images/robots-smelling-flowers.webp'

// bg-gradient-to-r from-[#2b7d85] from-10% via-[#24a7a7] via-30% to-[#23afb0] to-90%
export function Hero() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-teal-700 from-10% via-teal-500 via-30% to-teal-600 to-90% dark:bg-gradient-to-r dark:from-teal-950 dark:from-10% dark:via-teal-700 dark:via-30% dark:to-teal-900 dark:to-90% ">
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
              <p className="inline bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent">
                Unlock the potential of ChatGPT.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-white/80">
                Empower yourself with powerful prompts to harness the
                capabilities of ChatGPT and other models to save time and
                achieve more.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/docs/prompt-categories">
                  Browse prompt categories
                </Button>
                <Button href="/docs/learn-with-videos" variant="secondary">
                  Learn with videos
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
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
                className="absolute -bottom-40 -right-44"
                src={blurFuchsiaImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-300 via-teal-300/70 to-fuchsia-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-300 via-teal-300/70 to-fuchsia-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-teal-300/0 via-teal-300/70 to-teal-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400 to-fuchsia-400/0" />
                <Image
                  alt="robots tending to flowers"
                  src={robotsSmellingFlowers}
                  width={1456}
                  height={816}
                  unoptimized
                  priority
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
