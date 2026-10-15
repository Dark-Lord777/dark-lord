import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

function MarkdownPage({ content }) {
  const cleanContent = content ? content.replace(/<!--[\s\S]*?-->/g, '') : ''

  return (
    <div className="container">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => {
            if (href && href.startsWith('/')) {
              return <Link to={href}>{children}</Link>
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a> 
            )
          },
          
          code: ({ children }) => (
            <span className="notranslate notranslate-text" translate="no">
              {children}
            </span>
          ),
        }}
      >
        {cleanContent}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownPage
