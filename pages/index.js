import Prism from 'prismjs'
import { withNamespaces } from '../common/i18n'

var code = `
  const example = "This is an example"
  const test = () => {
    console.log(example)
  }
`
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript')

const Home = ({ t }) => (
  <div>
    {t('description')}
    <pre className='line-numbers language-javascript' data-start='0'>
      <code className='language-javascript' dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  </div>
)

Home.getInitialProps = async ({ req }) => {
  return {
    namespacesRequired: ['common']
  }
}
export default withNamespaces('common')(Home)
