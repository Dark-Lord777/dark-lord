import MarkdownPage from '../components/MarkdownPage'
import licensesContent from '../content/licenses.md?raw'

function Licenses() {
  return <MarkdownPage content={licensesContent} />
}

export default Licenses
