import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Profile />
      <Search />
    </Container>
  )
}
