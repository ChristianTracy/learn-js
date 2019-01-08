import { withNamespaces } from '../common/i18n'

const About = ({ t }) => <div>{t('title')}</div>

About.getInitialProps = async ({ req }) => {
  return {
    namespacesRequired: ['about']
  }
}

export default withNamespaces('about')(About)
