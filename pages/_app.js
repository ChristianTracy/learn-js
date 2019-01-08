import App, { Container } from 'next/app'
import Page from '../components/Page'
import { appWithTranslation } from '../common/i18n'

class MyApp extends App {
  render () {
    const { Component } = this.props
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)
