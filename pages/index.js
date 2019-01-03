import Prism from 'prismjs'

var code = `
  const example = "This is an example"
  const test = () => {
    console.log(example)
  }
`
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript')

export default () => (
  <div>
    Code
    <pre className='line-numbers language-javascript' data-start='0'>
      <code className='language-javascript' dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  </div>
)
