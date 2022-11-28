import { IssueCard } from './components/IssueCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { Container } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import Loading from '../../components/isLoading/isLoading'

interface PropsIssueGitHub {
  id: number
  title: string
  body: string
  number: number
  created_at: Date
}
export function Home() {
  const [q, setrQ] = useState('')

  const [isLoading, setLoading] = useState(false)

  const [issues, setIssues] = useState<PropsIssueGitHub[]>([])
  console.log(issues)

  useEffect(() => {
    async function handleIssueResponse() {
      const response = await api.get('https://api.github.com/search/issues', {
        params: {
          q: `repo:diego3g/responsive-native is:issue ${q} `,
        },
      })
      setIssues(response.data.items)
      setLoading(true)
    }
    handleIssueResponse()
  }, [q])
  return (
    <Container>
      <Profile />
      <Search setrQ={setrQ} />
      {!isLoading && <Loading />}
      <IssueCard issues={issues} />
    </Container>
  )
}
