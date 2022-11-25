import { Header } from '../../components/Header'
import { IssueCard } from './components/IssueCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { Container } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Card } from './components/IssueCard/styles'

interface PropsIssueGitHub {
  id: number
  title: string
  body: string
  number: number
}
export function Home() {
  const [q, setrQ] = useState('')

  const [issues, setIssues] = useState<PropsIssueGitHub[]>([])
  console.log(issues)
  useEffect(() => {
    api
      .get('https://api.github.com/search/issues', {
        params: {
          q: `repo:diego3g/responsive-native is:issue ${q} `,
        },
      })
      .then((response) => {
        setIssues(response.data.items)
      })
  }, [q])
  return (
    <Container>
      <Profile />
      <Search setrQ={setrQ} />
      <IssueCard issues={issues} />
    </Container>
  )
}
