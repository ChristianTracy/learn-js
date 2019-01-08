import Link from 'next/link'
import { i18n } from '../common/i18n'
const Nav = () => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='about'>
        <a>About</a>
      </Link>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}> LANG</button>
    </div>
  )
}

export default Nav
