import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { useState } from 'react'

const styles = {
  note: {
    container:
      'bg-teal-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-teal-900 dark:text-teal-400 font-medium',
    body: 'text-teal-800 [--tw-prose-background:theme(colors.teal.50)] prose-a:text-teal-900 prose-code:text-teal-900 dark:text-gray-300 dark:prose-code:text-gray-300',
  },
  warning: {
    container:
      'bg-fuchsia-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-fuchsia-900 dark:text-fuchsia-500 font-medium',
    body: 'text-fuchsia-800 [--tw-prose-underline:theme(colors.fuchsia.400)] [--tw-prose-background:theme(colors.fuchsia.50)] prose-a:text-fuchsia-900 prose-code:text-fuchsia-900 dark:text-gray-300 dark:[--tw-prose-underline:theme(colors.teal.700)] dark:prose-code:text-gray-300',
  },
}

function CopyIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.22,10.86h-4.4c-0.81,0-1.47-0.66-1.47-1.47V3.52c0-0.81,0.66-1.47,1.47-1.47h3.21c0.29,0,0.57,0.12,0.78,0.32
        l1.56,1.56c0.21,0.21,0.32,0.49,0.32,0.78v4.68C13.68,10.2,13.03,10.86,12.22,10.86z M3.41,4.99h2.2v1.1h-2.2
        c-0.2,0-0.37,0.17-0.37,0.37v5.87c0,0.2,0.17,0.37,0.37,0.37h4.4c0.2,0,0.37-0.17,0.37-0.37V11.6h1.1v0.73
        c0,0.81-0.66,1.47-1.47,1.47h-4.4c-0.81,0-1.47-0.66-1.47-1.47V6.46C1.94,5.65,2.6,4.99,3.41,4.99z"
      />
    </svg>
  )
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="formula" color="fuchsia" {...props} />,
}

export function Callout({ type = 'note', title, children }) {
  const [copied, setCopied] = useState(false)

  let IconComponent = icons[type]

  const handleCopyClick = () => {
    // Function to extract text content from React elements recursively
    const extractTextContent = (element) => {
      if (typeof element === 'string') {
        return element
      } else if (Array.isArray(element)) {
        return element.map(extractTextContent).join('')
      } else if (element && element.props && element.props.children) {
        return extractTextContent(element.props.children)
      }
      return ''
    }

    // Extract text content from children
    const textContent = extractTextContent(children)

    // Copy the text content to clipboard
    const el = document.createElement('textarea')
    el.value = textContent
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      <IconComponent className="h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <div className="flex justify-between">
          <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
            {title}
          </p>
          <button
            onClick={handleCopyClick}
            className="dark:bg-t flex items-center justify-center rounded-lg bg-white/50 px-2 text-sm text-gray-500 shadow-md shadow-black/5 ring-1 ring-black/5 transition duration-150 ease-in-out hover:bg-white/80 dark:bg-gray-700 dark:text-gray-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/10"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-teal-500 dark:text-teal-300">
                <CopyIcon className="h-4 w-4 fill-teal-400 dark:fill-teal-300" />
                Copied!
              </span>
            ) : (
              <>
                <span className="flex items-center gap-1 sm:hidden">
                  <CopyIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-300" />
                  Copy
                </span>
                <span className="hidden items-center gap-1 sm:flex">
                  <CopyIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-300" />
                  Copy prompt
                </span>
              </>
            )}
          </button>
        </div>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
