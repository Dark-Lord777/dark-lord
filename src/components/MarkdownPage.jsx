import ReactMarkdown from 'react-markdown'

function MarkdownPage({ content }) {
  return (
    <div className="container">
      <ReactMarkdown
        components={{
          // Кастомные стили для ссылок
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          // Кастомные стили для кода
          code: ({ children }) => (
            <code style={{
              background: '#1a1a2e',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#c084fc',
              fontSize: '0.9em'
            }}>
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownPage
