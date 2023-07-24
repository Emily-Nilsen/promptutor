import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurFuchsiaImage from '@/images/fuchsia-blur.webp'

const codeLanguage = 'javascript'
const title = 'Guide to Changing a Flat Tyre'
const code = ` 
  Can you provide step-by-step instructions on how to 
  change a flat tyre, considering I’ve never done 
  it before, and I’m on a busy highway?
  
`

const tabs = [
  { name: 'prompt example', isActive: true },
  { name: 'prompt formula', isActive: false },
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
              <p className="inline bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent">
                Unlock the potential of ChatGPT.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-gray-400">
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
                <div className="pl-4 pt-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-gray-500/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'flex h-6 rounded-full',
                          tab.isActive
                            ? 'bg-gradient-to-r from-teal-400/30 via-teal-400 to-teal-400/30 p-px font-medium text-teal-300'
                            : 'text-gray-500'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            tab.isActive && 'bg-gray-800'
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="mt-6 pl-5 text-sm text-fuchsia-400">
                      {title}
                    </p>
                  </div>
                  <div className="mt-0 flex items-start px-1 text-sm">
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex overflow-x-auto pb-6'
                          )}
                          style={style}
                        >
                          <code className="px-4 font-display text-teal-200">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                    <div className="absolute inset-0">
                      <div className="relative flex h-full w-full items-end justify-end p-3 sm:p-4">
                        <Image
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Promptutor/Promptutor_ball_1500x1500_mxeqyy.webp"
                          width={1500}
                          height={1500}
                          alt="Promptutor logo"
                          className="z-10 h-20 w-20 object-cover sm:h-32 sm:w-32"
                        />
                      </div>
                    </div>
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
