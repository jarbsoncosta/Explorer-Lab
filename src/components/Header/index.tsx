import LogoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="logomarca" />
    </HeaderContainer>
  )
}
