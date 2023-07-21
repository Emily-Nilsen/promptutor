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

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="fuchsia" {...props} />,
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
        <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
        <button
          onClick={handleCopyClick}
          className="mt-4 rounded-md bg-teal-500 px-4 py-2 text-white transition hover:bg-teal-600"
        >
          {copied ? 'Copied!' : 'Copy prompt'}
        </button>
      </div>
    </div>
  )
}
